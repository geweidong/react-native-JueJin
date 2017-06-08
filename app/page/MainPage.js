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
  View,
  Image
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

import px2dp from '../util/px2dp';

// 引入其他内容组件四个大部分
import HomeFragment from '../page/HomeFragment';
import CompassFragment from '../page/CompassFragment';
import MeFragment from '../page/MeFragment';
import NotifyFragment from '../page/NotificationFragment';

export default class Index extends Component {
	constructor(props){
		super(props);
		this.state = {
			selectedTab:'home',
			tabName: ['首页','发现','消息','我']
		}
	}

	render(){
		const {tabName} = this.state;
		return (
			<TabNavigator
				{...this.props}
				hidesTabTouch={true} 
				tabBarStyle={styles.tabbar}
			>
			  <TabNavigator.Item
			    selected={this.state.selectedTab === 'home'}
			    title={tabName[0]}
			    renderIcon={() => <Image source={require('../image/home_gray.png')} style={styles.tab} />}
			    renderSelectedIcon={() => <Image source={require('../image/home_blue.png')} style={styles.tab} />}
			    onPress={() => this.setState({ selectedTab: 'home' })}>
			    {<HomeFragment {...this.props} />}
			  </TabNavigator.Item> 
			  <TabNavigator.Item
			    selected={this.state.selectedTab === 'comprass'}
			    title={tabName[1]}
			    renderIcon={() => <Image source={require('../image/comprass_gray.png')} style={styles.tab} />}
			    renderSelectedIcon={() => <Image source={require('../image/comprass_blue.png')} style={styles.tab} />}
			    onPress={() => this.setState({ selectedTab: 'comprass' })}>
			    {<CompassFragment {...this.props} />}
			  </TabNavigator.Item>
			  <TabNavigator.Item
			    selected={this.state.selectedTab === 'message'}
			    title={tabName[2]}
			    renderIcon={() => <Image source={require('../image/message_gray.png')} style={styles.tab} />}
			    renderSelectedIcon={() => <Image source={require('../image/message_blue.png')} style={styles.tab} />}
			    onPress={() => this.setState({ selectedTab: 'message' })}>
			    {<NotifyFragment {...this.props} />}
			  </TabNavigator.Item> 
			  <TabNavigator.Item
			    selected={this.state.selectedTab === 'main'}
			    title={tabName[3]}
			    renderIcon={() => <Image source={require('../image/main_gray.png')} style={styles.tab} />}
			    renderSelectedIcon={() => <Image source={require('../image/main_blue.png')} style={styles.tab} />}
			    onPress={() => this.setState({ selectedTab: 'main' })}>
			    {<MeFragment {...this.props} />}
			  </TabNavigator.Item>
			</TabNavigator>
		)
	}
}

const styles = StyleSheet.create({
	tabbar:{
		height:px2dp(49),
		justifyContent:'center',
		alignItems:'center', 
		backgroundColor:'#fff'
	},
	tab:{
		width:px2dp(22),
		height:px2dp(22)
	}
})