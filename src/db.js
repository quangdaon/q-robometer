// Get a Firestore instance

import * as firebase from 'firebase';
import config from './config';

console.log(config);

export const db = firebase
	.initializeApp(config.firebase).database();