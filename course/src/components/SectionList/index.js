import React, { Component } from 'react';
import { Text, View, SectionList, StyleSheet } from 'react-native';

export default class SectionListApp extends Component {
	render() {
		return (
			<View style={styles.container}>
				<SectionList
					sections={[
						{
							title: 'Heros',
							data: [
								'Iron-man',
								'hulk',
								'thor',
								'spider-man',
								'black-widow',
								'ant-man'
							]
						},
						{
							title: 'Villains',
							data: ['Loki', 'Ultron', 'galatico', 'thanos', 'venom']
						}
					]}
					renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
					renderSectionHeader={({ section }) => (
						<Text style={styles.sectionHeader}>{section.title}</Text>
					)}
					keyExtractor={(item, index) => index}
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
	},
	sectionHeader: {
		paddingTop: 10,
		paddingLeft: 10,
		paddingRight: 10,
		paddingBottom: 2,
		fontSize: 30,
		fontWeight: 'bold',
		backgroundColor: '#054f77'
	}
});
