<template>
  <v-menu
      bottom
      min-width="200px"
      rounded
      offset-y
      nudge-bottom="6"
      nudge-right="10"
      v-if="!!user"
  >
    <template #activator="{ on }">
      <v-btn
          icon
          x-large
          v-on="on"
      >
        <Avatar/>
      </v-btn>
    </template>
    <v-card>
      <v-list-item-content class="justify-center">
        <div class="mx-auto text-center">
          <Avatar/>
          <h3 class="px-3 mt-3">{{ user.name }}</h3>
          <p class="text-caption mt-1">
            {{ user.email }}
          </p>
          <v-divider class="my-3"></v-divider>
          <v-btn
              depressed
              rounded
              text
          >
            Edit Account
          </v-btn>
          <v-divider class="my-3"></v-divider>
          <v-btn
              depressed
              rounded
              text
              @click="logout"
          >
            Disconnect
          </v-btn>
        </div>
      </v-list-item-content>
    </v-card>
  </v-menu>

  <v-btn @click="login" v-else>Login</v-btn>
</template>

<script>
import firebase from 'firebase';
import { githubProvider } from '@/plugins/googleAuth.js';
import { mapState } from 'vuex';
import Avatar from '@/components/authentication/Avatar.vue';

export default {
  name: 'AuthenticationMenu',
  components: { Avatar },
  methods: {
    login() {
      firebase.auth().signInWithPopup(githubProvider);
    },
    logout() {
      firebase.auth().signOut();
    },
  },
  computed: {
    ...mapState('authentication', { user: 'user' }),
  },
};
</script>
