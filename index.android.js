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

import Index from './app/Index';
import WebViewPage from './app/components/WebViewPage';
import IndividualPage from './app/page/IndividualPage';
import {StackNavigator} from 'react-navigation';
import SettingPage from './app/page/SettingPage';

const JueJin = StackNavigator({
        Index: {screen: Index},
        IndividualPage: {screen: IndividualPage},
        WebViewPage: {screen: WebViewPage},
        SettingPage: {screen: SettingPage}
    },{
        initialRouteName: 'Index', // 默认路由
        headerMode: 'none'
    }
);



AppRegistry.registerComponent('JueJin', () => JueJin);
