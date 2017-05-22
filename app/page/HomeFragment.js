import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import theme from '../config/theme';
import px2dp from '../util/px2dp';
import HomeTab from './HomeTabPages/HomeTab';
import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view';
import RCTDeviceEventEmitter from 'RCTDeviceEventEmitter';

export default class HomeFragment extends Component {
	constructor(props){
		super(props);
		this.state = {
			tabNames: ['首页','Android','iOS']
		}
	}

	componentDidMount(){
		RCTDeviceEventEmitter.addListener('valueChange', this._handleTabNames);
	}

	componentWillUnmount(){
		RCTDeviceEventEmitter.removeListener('value', this._handleTabNames);
	}

	_handleTabNames(tabName){
		this.setState({ tabNames: tabNames });
	}

	render(){
		return (
			<View style={styles.container}>
				<ScrollableTabView
					tabBarTextStyle={{fontSize: theme.scrollView.fontSize}}
			        tabBarInactiveTextColor='mintcream' // 没有被选中的文字颜色
			        tabBarActiveTextColor='white'       // 选中的文字颜色
			        tabBarBackgroundColor='rgb(22,131,251)'     // 选项卡背景颜色
			        tabBarUnderlineStyle={[theme.scrollView.underlineStyle,{height:px2dp(2)}]}   //下划线的样式
			        initialPage={0}
			        renderTabBar={() => <ScrollableTabBar style={{height: px2dp(40),borderWidth:0,elevation:2}} tabStyle={{height: px2dp(39)}}
			                                underlineHeight={2}/>}
			      >
			        {
			        	this.state.tabNames.map((item,index) => {
			        		return (
			        			<HomeTab {...this.props} tabLabel={item} key={index}/>
			        		)
			        	})
			        }
			     </ScrollableTabView>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:theme.pageBackgroundColor
	}
})