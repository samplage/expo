import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Audio } from 'expo-av';
const soundObject = new Audio.Sound();

const play = async () => {
	try {
		await soundObject.loadAsync(
			require('./assets/rocky_balboa-it_aint_about_how_hard_you_hit.mp3')
		);
		await soundObject.playAsync();
		// Your sound is playing!
	} catch (error) {
		// An error occurred!
	}
};

export default function App() {
	return (
		<View style={styles.container}>
			<Text>Open up App.tsx to start working on your app!</Text>
			<Button onPress={play} title="Play" />
			<Button
				onPress={() => {
					soundObject.stopAsync();
				}}
				title="Stop"
			/>
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
