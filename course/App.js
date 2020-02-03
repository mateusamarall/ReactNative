import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Clock from './src/components/clock/index';
import Ola from './src/components/hello/index';
import FlexApp from './src/components/flexbox/index';

export default function App() {
	return (
		<View style={styles.container}>
			<Ola name=' Dev' />
			<Clock />
			<FlexApp />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff'
	}
});
