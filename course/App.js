import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Ola(props) {
	return (
		<View style={styles.message}>
			<Text>Ola{props.name}!</Text>
		</View>
	);
}
export default function App() {
	return (
		<View style={styles.container}>
			<Ola name=' Dev' />
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
