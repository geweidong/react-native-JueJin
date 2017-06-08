import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import px2dp from '../util/px2dp';
import theme from '../config/theme';

export default class TextButton extends Component{
	static defaultProps = {

	};

	render() {
		return (
			<TouchableOpacity 
				activeOpacity={theme.btnActiveOpacity}
				onPress={this.props.onPress}>
				<View style={{height: px2dp(16)}}>
					<Text style={this.props.style}>{this.props.text}</Text>
				</View>
			</TouchableOpacity>
		)
	}
}