import firebase from 'firebase';

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
          console.log(user);
          commit('updateUser', {
            profilePicture: user.photoURL,
            name: user.displayName,
            email: user.email,
          });
        } else {
          commit('updateUser', null);
        }
      });
    },
  },
};
