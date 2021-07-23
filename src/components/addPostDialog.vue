<template>
  <v-dialog width="500" v-bind="$attrs" @click:outside="$emit('input', false);">
    <v-card>
      <v-card-title>Create a post</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="createPost" ref="form">
          <v-text-field v-model="form.title" label="Title"></v-text-field>
          <v-text-field v-model="form.date" label="date" type="date"></v-text-field>
          <v-btn type="submit">Create</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { postCollection } from '@/collections/posts.js';

export default {
  name: 'addPostDialog',
  data: () => ({
    form: {
      title: '',
      date: '',
    },
  }),
  methods: {
    async createPost() {
      const newPost = {
        title: this.form.title,
        date: new Date(this.form.date),
      };
      const docRef = await postCollection.add(newPost);
      this.$emit('add',{ id: docRef.id, ...newPost });
      this.$emit('input', false);
      this.$refs.form.reset();
    },
  }
};
</script>

<style scoped>

</style>
