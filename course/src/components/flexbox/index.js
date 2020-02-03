import React, { Component } from 'react';
import { View } from 'react-native';
export default class FlexApp extends Component {
	render() {
		return (
			<View
				style={{
					flex: 1,
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'stretch'
				}}
			>
				<View style={{ height: 180, backgroundColor: '#00f' }}></View>
				<View style={{ height: 180, backgroundColor: '#7f7fff' }}></View>
				<View style={{ height: 180, backgroundColor: '#ccccff' }}></View>
			</View>
		);
	}
}
