const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

const db = admin.firestore();

exports.newUser = functions.auth.user().onCreate((user) => {
	console.log('[Function] newUser: ', user);
	return db
		.collection('user')
		.doc(user.uid)
		.create((JSON.parse(JSON.stringify(user))));
});
