import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { initializeApp, getApps } from 'firebase/app';

import AuthScreen from './src/screens/auth';
import rootReducer from './src/redux/reducers';

console.log('app.js');

// Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDPiA0dMCmaGcOs2nvsxDFDu0SylquNUuw",
	authDomain: "tiktok-f1ef5.firebaseapp.com",
	projectId: "tiktok-f1ef5",
	storageBucket: "tiktok-f1ef5.appspot.com",
	messagingSenderId: "543958797360",
	appId: "1:543958797360:web:b2ccd8bc622b10e20d71f5",
	measurementId: "G-8VDLDC60NZ"
};

if (getApps().length === 0) {
	initializeApp(firebaseConfig);
}

const store = createStore(rootReducer, applyMiddleware(thunk));

console.log('apps: ', getApps());

export default function App() {
	return (
		<Provider store={store}>
			<AuthScreen />
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
