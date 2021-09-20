import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyDIwK5uF8l4Sxyw8DNoWykNQgpdpOlcIvk',
  authDomain: 'fire-store-tester.firebaseapp.com',
  projectId: 'fire-store-tester',
};

export const firebaseApp = initializeApp(firebaseConfig);
