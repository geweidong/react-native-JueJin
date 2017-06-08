import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,

} from 'react-native';

import theme from '../config/theme';
import px2dp from '../util/px2dp';
import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view';
import RCTDeviceEventEmitter from 'RCTDeviceEventEmitter';

export default class NotificationFragment extends Component {
	constructor(props){
		super(props);
		this.state = {
			tabNames: ['消息', '动态']
		};
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
			        tabBarInactiveTextColor='mintcream' 
			        tabBarActiveTextColor='white'       
			        tabBarBackgroundColor='rgb(22,131,251)'     
			        tabBarUnderlineStyle={[theme.scrollView.underlineStyle,{height:px2dp(2)}]}   
			        initialPage={0}
			        renderTabBar={() => <ScrollableTabBar style={{height: px2dp(40),borderWidth:0,elevation:2}} tabStyle={{height: px2dp(39)}}
			                                underlineHeight={2}/>}
			      >
			        {
			        	this.state.tabNames.map((item,index) => {
			        		return (
			        			<View style={{flex: 1, justifyContent: 'center', alignItems:'center'}} tabLabel={item} >
			        				<Text {...this.props} key={index}>{item}</Text>
			        			</View>
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