import React, { Component } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

export default class TextChangeApp extends Component {
	constructor(props) {
		super(props);
		this.state = { text: '' };
	}
	render() {
		return (
			<View style={{ padding: 40, justifyContent: 'center' }}>
				<TextInput
					style={{ paddingTop: 10, fontSize: 20 }}
					placeholder='Digite aqui para traduzir!'
					onChangeText={(text) => this.setState({ text })}
				/>
				<Text style={{ padding: 2, fontSize: 5 }}>
					{this.state.text
						.split(' ')
						.map((word) => (word ? ' u are awesome' : ''))}
				</Text>
			</View>
		);
	}
}
