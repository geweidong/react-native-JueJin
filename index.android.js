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
import {StackNavigator} from 'react-navigation';

const JueJin = StackNavigator({
        Index: {screen: Index},
    },{
        initialRouteName: 'Index', // 默认路由
        headerMode: 'none'
    }
);



AppRegistry.registerComponent('JueJin', () => JueJin);
