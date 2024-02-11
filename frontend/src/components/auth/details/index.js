import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import styles from './styles';
import { useDispatch } from 'react-redux';
import { login, register } from '../../../redux/actions';

export default function AuthDetails({ authPage, detailsPage, setDetailsPage }) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const dispatch = useDispatch();
	const handleLogin = () => {
		dispatch(login(email, password))
			.then((response) => {
				console.log('login successful: ', response);
			})
			.catch((error) => {
				console.log('login unsuccessful: ', error);
			});
	};

	const handleRegister = () => {
		dispatch(register(email, password))
		.then((response) => {
			console.log('register successful: ', response);
		})
		.catch((error) => {
			console.log('register unsuccessful: ', error);
		});
	};

	return (
		<View style={ styles.container }>
			<TouchableOpacity onPress={ () => setDetailsPage(false) }>
				<Feather name="arrow-left" size={ 24 } color="black"></Feather>
			</TouchableOpacity>

			<TextInput
				onChangeText={ (text) => setEmail(text) }
				style={ styles.textInput }
				placeholder="Email">
			</TextInput>

			<TextInput
				onChangeText={ (text) => setPassword(text) }
				style={ styles.textInput }
				secureTextEntry
				placeholder="Password">
			</TextInput>

			<TouchableOpacity
				style={ styles.button }
				onPress={() => authPage === 0 ? handleLogin() : handleRegister()}
			>
				<Text>{ authPage === 0 ? 'Sign In' : 'Sign Up' }</Text>
			</TouchableOpacity>
		</View>
	);
}
