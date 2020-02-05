import React, { Component } from 'react';

import { Text, View, ScrollView } from 'react-native';

export default class ScrollViewApp extends Component {
	render() {
		return (
			<ScrollView>
				<View
					style={{
						margin: 20,
						flexDirection: 'row',
						justifyContent: 'flex-end'
					}}
				>
					<Text style={{ fontSize: 22 }}>Oiie</Text>
				</View>
				<View
					style={{
						margin: 20,
						flexDirection: 'row',
						justifyContent: 'flex-start'
					}}
				>
					<Text style={{ fontSize: 22 }}>Olá Dev</Text>
				</View>

				<View
					style={{
						margin: 20,
						flexDirection: 'row',
						justifyContent: 'flex-end'
					}}
				>
					<Text style={{ fontSize: 22 }}>Oiie</Text>
				</View>
				<View
					style={{
						margin: 40,
						flexDirection: 'row',
						justifyContent: 'flex-start'
					}}
				>
					<Text style={{ fontSize: 22 }}>Olá Dev</Text>
				</View>

				<View
					style={{
						margin: 20,
						flexDirection: 'row',
						justifyContent: 'flex-end'
					}}
				>
					<Text style={{ fontSize: 22 }}>Oiie</Text>
				</View>
				<View
					style={{
						margin: 20,
						flexDirection: 'row',
						justifyContent: 'flex-start'
					}}
				>
					<Text style={{ fontSize: 22 }}>Olá Dev</Text>
				</View>

				<View
					style={{
						margin: 20,
						flexDirection: 'row',
						justifyContent: 'flex-end'
					}}
				>
					<Text style={{ fontSize: 22 }}>Oiie</Text>
				</View>
				<View
					style={{
						margin: 40,
						flexDirection: 'row',
						justifyContent: 'flex-start'
					}}
				>
					<Text style={{ fontSize: 22 }}>Olá Dev</Text>
				</View>
			</ScrollView>
		);
	}
}
