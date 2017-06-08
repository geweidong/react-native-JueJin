import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity
} from 'react-native';

import theme from '../config/theme';
import px2dp from '../util/px2dp';

export default class SearchText extends Component {
	constructor(props){
		super(props);
		this.state = {}
	}

	searchEvent() {
		this.props.onPress();
		// 让其失去焦点
		this.refs.textInput.blur();

	}

	render() {
		return (
			<View style={{flexDirection:'row', justifyContent:'space-between', alignItems:"center"}}>
				<TextInput 
					ref='textInput'
					placeholder="搜索"
					style={[{color:'#fff'},this.props.style]}
					selectionColor={theme.themeColor}
					placeholderTextColor='#fff'
					underlineColorAndroid="transparent"
					onBlur={()=>this.refs.textInput.blur()}
				/>
				<TouchableOpacity 
					activeOpacity={theme.btnActiveOpacity}
					onPress={()=>this.searchEvent()}
				>
					<Image source={require('../image/Search.png')} style={{width: px2dp(35), height: px2dp(35), marginRight: px2dp(10)}} />
				</TouchableOpacity>
			</View>
		)
	}
}

