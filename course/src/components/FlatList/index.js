import React, { Component } from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';

export default class FlatListApp extends Component {
	render() {
		return (
			<View style={styles.container}>
				<FlatList
					data={[
						{ key: 'Iron-Man' },
						{ key: 'Hulk' },
						{ key: 'Thor' },
						{ key: 'Capitão-america' },
						{ key: 'Spider-Man' },
						{ key: 'Black-Widow' },
						{ key: 'Gavião-Arqueiro' },
						{ key: 'Ant-Man' }
					]}
					renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
				/>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 22
	},
	item: {
		padding: 10,
		fontSize: 30,
		height: 60
	}
});
