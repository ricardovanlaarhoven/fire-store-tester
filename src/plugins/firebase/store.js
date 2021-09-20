import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';

require('@/plugins/firebase/firebase.js');

const database = getFirestore();
if (process.env.NODE_ENV === 'development') {
  connectFirestoreEmulator(database, 'localhost', 9080);
}

export { database };

