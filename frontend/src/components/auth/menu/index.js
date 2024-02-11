import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import styles from './styles';
import { Feather } from '@expo/vector-icons';

export default function AuthMenu(
	{ authPage, setAuthPage, detailsPage, setDetailsPage }) {
	return (
		<View style={styles.container}>
			<View style={styles.containerMain}>
				<Text style={styles.headerText}>
					{ authPage === 0 ? 'sign in' : 'sign up' }
				</Text>
				<TouchableOpacity style={styles.providerButton}
					onPress={() => setDetailsPage(true)}
				>
					<Feather name="user" size={24} color="black" />
					<Text style={styles.providerButtonText}>Use EMail</Text>
					<View />
				</TouchableOpacity>
			</View>

{/*			<TouchableOpacity
				style={styles.containerBottomButton}
				onPress={() => authPage === 0 ? setAuthPage(1) : setAuthPage(0)}>

				{ authPage === 0 ?
					<Text>Don't have an account?
						<Text style={styles.containerBottomButtonText}>Sign up</Text>
					</Text>
					:
					<Text>Already registered?
						<Text style={styles.containerBottomButtonText}>Sign in</Text>
					</Text>
				}
			</TouchableOpacity>*/}
		</View>
	)
}
