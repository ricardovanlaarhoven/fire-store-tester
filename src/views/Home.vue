<template>
  <v-row>
    <v-col cols="12" lg="4">
      <v-card>
        <v-card-text>
          <v-list>
            <v-list-item v-for="post in posts" :key="post.id">
              <v-list-item-content>
                <v-list-item-title>{{ post.title }}</v-list-item-title>
                <v-list-item-subtitle>{{ dayjs(post.date).format('LL') }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card-text>
        <AddPostDialog @add="addPost" v-model="dialog"/>
        <v-btn fab absolute bottom right color="primary" @click="openPostDialog">
          <v-icon>mdi-pencil-plus-outline</v-icon>
        </v-btn>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import dayjs from '@/plugins/dayjs.js';
import { postCollection } from '@/collections/posts.js';
import AddPostDialog from '@/components/addPostDialog.vue';

export default {
  name: 'Home',
  components: { AddPostDialog },
  created() {
    this.fetch();
  },
  data: () => ({
    posts: [],
    dialog: false,
  }),
  methods: {
    dayjs,
    openPostDialog() {
      this.dialog = true;
    },
    addPost(post) {
      this.posts.push(post);
    },
    async fetch() {
      this.posts = [];
      const response = await postCollection.get();
      response.forEach((post) => {
        const data = post.data();
        this.posts.push({
          id: post.id,
          title: data.title,
          date: data.date.toDate(),
        });
      });
    },
  },
};
</script>
