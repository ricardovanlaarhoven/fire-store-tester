import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import firebase from 'firebase';

Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: 'AIzaSyDIwK5uF8l4Sxyw8DNoWykNQgpdpOlcIvk',
  authDomain: 'fire-store-tester.firebaseapp.com',
  projectId: 'fire-store-tester',
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');
