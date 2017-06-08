import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';

import px2dp from '../util/px2dp';
import theme from '../config/theme';

export default class ImageBtn extends Component{
	static defaultProps = {

	};

	render() {
		return (
			<TouchableOpacity 
				activeOpacity={theme.btnActiveOpacity}
				onPress={this.props.onPress}>
				<View style={{paddingTop: px2dp(10),paddingBottom: px2dp(10),justifyContent: 'center', alignItems:'center'}}>
					<Image source={this.props.source} style={this.props.imgStyle}/>
					<Text style={this.props.textStyle}>{this.props.text}</Text>
				</View>
			</TouchableOpacity>
		)
	}
}