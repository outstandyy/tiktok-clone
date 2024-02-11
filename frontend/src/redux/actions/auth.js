import { signInWithEmailAndPassword, createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

import { USER_STATE_CHANGE } from '../constants';
import firebase from 'firebase/compat';

console.log('auth.js');

export const userAuthStateListener = () => dispatch => {
	const auth = getAuth();
	auth.onAuthStateChanged((user) => {
		if (user) {
			dispatch(getCurrentUserData());
		} else {
			dispatch({
				type: USER_STATE_CHANGE,
				currentUser: null,
				loaded: true
			});
		}
	});
};

export const getCurrentUserData = () => dispatch => {
	firebase.firestore()
		.collection('user')
		.doc(firebase.auth().currentUser.uid)
		.onSnapshot((res) => {
			if (res.exists) {
				return dispatch({
					type: USER_STATE_CHANGE,
					currentUser: res.data(),
					loaded: true
				});
			}
		});
};

export const login = (email, password) => dispatch => {
	const auth = getAuth();
	return new Promise((resolve, reject) => {
		signInWithEmailAndPassword(auth, email, password)
		.then(userCredential => resolve(userCredential))
		.catch(error => reject(error));
	});
};


export const register = (email, password) => dispatch => {
	const auth = getAuth();
	return new Promise((resolve, reject) => {
		createUserWithEmailAndPassword(auth, email, password)
		.then(userCredential => resolve(userCredential))
		.catch(error => reject(error));
	});
};
