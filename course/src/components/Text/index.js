import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native';

export default class TextChangeApp extends Component {
	constructor(props) {
		super(props);
		this.state = { text: '' };
	}
	render() {
		return (
			<View style={{ padding: 40 }}>
				<TextInput
					style={{ height: 50, fontSize: 20 }}
					placeholder='Digite aqui para traduzir!'
					onChangeText={(text) => this.setState({ text })}
				/>
				<Text style={{ padding: 10, fontSize: 10 }}>
					{this.state.text
						.split(' ')
						.map((word) => (word ? ' u are awesome' : ''))}
				</Text>
			</View>
		);
	}
}
