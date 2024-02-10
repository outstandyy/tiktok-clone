import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import firebase from 'firebase/app';
import Constants from 'expo-constants';

console.log(Constants.manifest.web.config.firebase);

if (firebase.getApps().length === 0) {
	firebase.initializeApp(Constants.manifest.web.config.firebase);
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>!Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
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
