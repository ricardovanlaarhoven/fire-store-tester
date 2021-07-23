import firebase from 'firebase';
import { userCollection } from '@/collections/users.js';

export default {
  namespaced: true,
  state: {
    user: null,
  },
  mutations: {
    updateUser(state, user) {
      state.user = user;
    },
  },
  getters: {
    isLoggedIn: (state) => !!state.user,
  },
  actions: {
    init({ commit }) {
      firebase.auth().onAuthStateChanged(async (user) => {
        if (user) {
          const userInfo = await userCollection.doc(user.uid).get()
          commit('updateUser', {
            profilePicture: user.photoURL,
            name: user.displayName,
            email: user.email,
            uid: user.uid,
            ...userInfo.data()
          });
        } else {
          commit('updateUser', null);
        }
      });
    },
  },
};
