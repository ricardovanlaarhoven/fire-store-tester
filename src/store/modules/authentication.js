import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from 'firebase/firestore';
import { database } from '@/plugins/firebase/store.js';

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
      const auth = getAuth();
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          const userInfo = await getDoc(doc(database, 'users', user.uid))
          console.log(userInfo.data(), user.uid);
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
