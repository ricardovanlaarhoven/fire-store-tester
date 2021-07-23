<template>
  <v-card>
    <v-card-text>
      <VSkeletonLoader type="list-item-two-line@6" v-if="isLoading"/>
      <v-list v-else>
        <v-list-item v-for="post in posts" :key="post.id">
          <v-list-item-content>
            <v-list-item-title>{{ post.title }}</v-list-item-title>
            <v-list-item-subtitle>{{ dayjs(post.date).format('LL') }}</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-btn icon @click="deletePost(post.id)"><v-icon>mdi-close</v-icon></v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-card-text>
    <AddPostDialog @add="addPost" v-model="dialog"/>
    <v-scale-transition>
      <v-btn fab absolute bottom right color="primary" @click="openPostDialog" v-if="isLoggedIn">
        <v-icon>mdi-pencil-plus-outline</v-icon>
      </v-btn>
    </v-scale-transition>
  </v-card>
</template>

<script>
import dayjs from '@/plugins/dayjs.js';
import { postCollection } from '@/collections/posts.js';
import AddPostDialog from '@/components/addPostDialog.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'PostsCard',
  components: { AddPostDialog },
  created() {
    this.fetch();
  },
  data: () => ({
    isLoading: true,
    posts: [],
    dialog: false,
  }),
  computed: {
    ...mapGetters({
      isLoggedIn: 'authentication/isLoggedIn',
    }),
  },
  methods: {
    dayjs,
    openPostDialog() {
      this.dialog = true;
    },
    addPost(post) {
      this.posts.push(post);
    },
    async deletePost(id) {
      await postCollection.doc(id).delete();
      this.posts = this.posts.filter(post => post.id !== id);
    },
    async fetch() {
      this.posts = [];
      this.isLoading = true;
      const response = await postCollection.get();
      response.forEach((post) => {
        const data = post.data();
        this.posts.push({
          id: post.id,
          title: data.title,
          date: data.date.toDate(),
        });
      });

      this.isLoading = false;
    },
  },
};
</script>

<style scoped>

</style>
