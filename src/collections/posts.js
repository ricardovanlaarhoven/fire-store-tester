import { database } from '@/plugins/firestore.js';

export const postCollection = database.collection('posts');
