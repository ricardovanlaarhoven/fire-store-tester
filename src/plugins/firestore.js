import firebase from 'firebase';

firebase.initializeApp({
  apiKey: 'AIzaSyDIwK5uF8l4Sxyw8DNoWykNQgpdpOlcIvk',
  authDomain: 'fire-store-tester.firebaseapp.com',
  projectId: 'fire-store-tester',
});

export const database = firebase.firestore();
