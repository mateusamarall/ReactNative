import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default function Ola(props) {
	return (
		<View style={styles.message}>
			<Text>Ola{props.name}!</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	message: {
		fontSize: 15,
		paddingVertical: 30,
		alignSelf: 'center'
	}
});
