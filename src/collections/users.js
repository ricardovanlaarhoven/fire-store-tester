import { database } from '@/plugins/firestore.js';

export const userCollection = database.collection('users');
