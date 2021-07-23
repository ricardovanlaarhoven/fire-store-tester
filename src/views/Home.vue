<template>
  <v-row>
    <v-col cols="12" lg="4">
      <PostsCard/>
    </v-col>
  </v-row>
</template>

<script>

import PostsCard from '@/components/PostsCard.vue';

export default {
  name: 'Home',
  components: { PostsCard },
  async created() {

  },
};
</script>
