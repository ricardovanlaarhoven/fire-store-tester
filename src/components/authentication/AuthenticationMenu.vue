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
import { getAuth, GithubAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { mapState } from 'vuex';
import Avatar from '@/components/authentication/Avatar.vue';

export default {
  name: 'AuthenticationMenu',
  components: { Avatar },
  methods: {
    async login() {
      const auth = getAuth();
      const provider = new GithubAuthProvider
      try {
        const result = await signInWithPopup(auth, provider);
        console.log(result);
      } catch (error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = provider.credentialFromError(error);
        console.log(errorCode, errorMessage, email, credential);
      }
    },
    logout() {
      const auth = getAuth();
      signOut(auth)
    },
  },
  computed: {
    ...mapState('authentication', { user: 'user' }),
  },
};
</script>
