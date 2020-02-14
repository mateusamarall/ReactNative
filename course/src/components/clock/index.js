import React, { Component } from 'react';
import { StyleSheet, Text} from 'react-native';

class Clock extends Component {
	constructor(props) {
		super(props);
		this.state = { date: new Date() };
		setInterval(() => {
			this.setState({ date: new Date() });
		}, 1000);
	}

	render() {
		return (
			<Text style={styles.hour}>
				Hora:{this.state.date.toLocaleTimeString()}
			</Text>
		);
	}
}
const styles = StyleSheet.create({
	hour: {
		fontSize: 25,
		alignSelf: 'center'
	}
});

export default Clock;
