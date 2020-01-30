import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Clock from './src/components/clock/index';

function Ola(props) {
	return (
		<View style={styles.message}>
			<Text>Ola{props.name}!</Text>
		</View>
	);
}
function Clockapp() {
	return (
		<View>
			<Clock />
		</View>
	);
}

export default function App() {
	return (
		<View style={styles.container}>
			<Ola name=' Dev' />
			<Clockapp />
		</View>
	);
}

const styles = StyleSheet.create({
	message: {
		alignItems: 'center'
	},
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
