/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 判断是图片还是文字，渲染一个圆形的标，这样可以具有良好的扩展性
 */

import React, { Component } from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';

export default class Avatar extends Component{
	static defaultProps = {
		size:40,
		color:'#fff',
		backgroundColor:'rgba(0,0,0,0.1)',
		borderWidth:1
	};

	render(){
		const {
			image,
			size,
			color,
			backgroundColor,
			text,
			textSize,
			borderColor,
			borderWidth,
		} = this.props;

		if(image){
			return (
				<View style={{padding: 3}}>
                    <Image
                        style={{width: size, height: size, borderRadius: size/2, borderColor: borderColor, borderWidth: borderWidth}}
                        source={image}>
                    </Image>
                </View>
			)
		}

		if(text){
			return (
				<View style={{padding: 5}}>
                    <View style={{ width: size, height: size, borderRadius: size/2, backgroundColor: backgroundColor, alignItems:'center', justifyContent: 'center' }}>
                        <Text style={{ color: color, fontSize: textSize }}>{text}</Text>
                    </View>
                </View>
			)
		}

		return null;
	}
}