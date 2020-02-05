import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Clock from './src/components/clock/index';
import Ola from './src/components/hello/index';
import FlexApp from './src/components/flexbox/index';
import TextChangeApp from './src/components/Text/index';
import ButtonApp from './src/components/ButtonTouch/index';
import ScrollViewApp from './src/components/ScrollView/index';
export default function App() {
	return (
		<View style={styles.container}>
			<TextChangeApp />
			<ScrollViewApp />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'stretch',
		backgroundColor: '#fff'
	}
});
