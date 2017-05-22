/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

// 引入主页组件
import MainPage from './page/MainPage';

export default class Index extends Component {
  render() {
    return (
      <View style={{flex:1, justifyContent: 'flex-end'}}>
        <MainPage {...this.props}/>
      </View>
    );
  }
}


