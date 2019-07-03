// Get a Firestore instance

import * as firebase from 'firebase';

const config = {
	apiKey: 'AIzaSyCBeAd5ibFPwNvgm5uU3d46Yvqo_vNAPhw',
	authDomain: 'robometer-b3a8d.firebaseapp.com',
	databaseURL: 'https://robometer-b3a8d.firebaseio.com'
};

export const db = firebase
	.initializeApp(config).database();