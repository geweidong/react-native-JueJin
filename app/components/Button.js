/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableNativeFeedback,
  Platform
} from 'react-native';

import px2dp from '../util/px2dp';

export default class Button extends Component{
	render(){
		return (
            <TouchableNativeFeedback onPress={this.props.onPress}>
                <View style={{flex: 1, height: px2dp(45), backgroundColor: '#046ada', alignItems:'center', justifyContent:'center',borderRadius: 3}}>
	                <Text style={styles.text}>{this.props.text}</Text>
	            </View>
            </TouchableNativeFeedback>
        );
	}
}

const styles = StyleSheet.create({
   text:{
       color: '#fff',
       fontSize: px2dp(13)
   }
});