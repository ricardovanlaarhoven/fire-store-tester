<template>
  <v-app>
    <v-app-bar
        app
        color="primary"
        dark
    >
      <v-row class="justify-end px-3">
        <AuthenticationMenu/>
      </v-row>
    </v-app-bar>

    <v-main class="ma-3">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import AuthenticationMenu from '@/components/authentication/AuthenticationMenu.vue';
import { mapActions } from 'vuex';

export default {
  name: 'App',
  components: { AuthenticationMenu },
  created() {
    this.init();
  },
  methods: {
    ...mapActions({
      init: 'authentication/init',
    }),
  },
};
</script>

<style>
.v-application {
  background-color: #fafafa!important;
}
</style>
