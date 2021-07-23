<template>
  <v-avatar
      color="primary"
      size="48"
  >
    <img
        v-if="user && user.profilePicture"
        alt="Avatar"
        :src="user.profilePicture"
    >
    <span class="white--text text-h5" v-else>{{ initials }}</span>
  </v-avatar>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Avatar',
  computed: {
    ...mapState('authentication', { user: 'user' }),
    initials() {
      let rgx = new RegExp(/(\p{L}{1})\p{L}+/, 'gu');

      let initials = [...this.user.name.matchAll(rgx)] || [];

      return (
          (initials.shift()?.[1] || '') + (initials.pop()?.[1] || '')
      ).toUpperCase();
    }
  },
};
</script>

<style scoped>

</style>
