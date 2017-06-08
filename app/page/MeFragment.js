import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableNativeFeedback,
  TouchableOpacity
} from 'react-native';

import theme from '../config/theme';
import px2dp from '../util/px2dp';
import NavigationBar from '../components/NavigationBar';

export default class MeFragment extends Component {

	constructor(props){
		super(props);
		this.state = {

		}
	}

	render(){
		return (
			<View>
				<NavigationBar title="我" />
				<TouchableNativeFeedback onPress={()=>this._addMoreInfo()}>
					<View style={styles.logoHeader}>
						<View style={{flexDirection:'row'}}>
							<Image source={require('../image/logo_og.png')}  style={{width:px2dp(55),height: px2dp(55), borderRadius:px2dp(27)}}/>
							<View style={{marginLeft: px2dp(20)}}>
								<Text style={{color:'#000',fontSize:20}}>React-native</Text>
								<Text style={{color: theme.grayColor,}}>添加职位@添加公司</Text>
							</View>
						</View>
						<View>
							<Image source={require('../image/ic_find_category.png')} style={{width: px2dp(30),height:px2dp(30)}}/>
						</View>
					</View>
				</TouchableNativeFeedback>
					<ItemBar style={{marginTop:px2dp(20)}} leftText="我的收藏" leftIcon={require('../image/ic_feed_collection.png')} rightText="15篇"/>
					<ItemBar leftText="阅读过的文章" leftIcon={require('../image/read.png')} rightText="15篇"/>
					<ItemBar leftText="标签管理" leftIcon={require('../image/tips.png')} rightText="9个"/>

					<ItemBar style={{marginTop:px2dp(20)}} leftText="掘金排名" leftIcon={require('../image/juejin_rank.png')} rightText=""/>
					<ItemBar leftText="设置" onPress={()=>this.gotoSetting()} leftIcon={require('../image/shezhi.png')}/>
			</View>
		)
	}

	gotoSetting() {
		const {navigate} = this.props.navigation;

		navigate('SettingPage',{
	      user:'SettingPage'
	    });
	}

	_addMoreInfo() {
		alert('添加职位');
	}
}


class ItemBar extends Component {

	render() {
		let {style, leftIcon, leftText, rightText, onPress} = this.props;

		return (
			<TouchableOpacity onPress={onPress} activeOpacity={theme.btnActiveOpacity}>
				<View style={[styles.itemBarView, style]}>
					<View style={{flexDirection:'row'}}>
						<Image source={leftIcon} style={{width:px2dp(20),height:px2dp(20)}} />
						<Text style={{color:'#000',marginLeft:px2dp(20)}}>{leftText}</Text>
					</View>
					<View style={{marginLeft:px2dp(20)}}>
						<Text style={{color:'gray'}}>{rightText}</Text>
					</View>
				</View>
			</TouchableOpacity>
		)
	}
}

const styles = StyleSheet.create({
	logoHeader:{
		flexDirection:'row',
		height: px2dp(100),
		backgroundColor: '#fff',
		alignItems:'center',
		paddingHorizontal: px2dp(15), 
		justifyContent:'space-between'
	},
	itemBarView:{
		width: theme.screenWidth,
		height:px2dp(50),
		backgroundColor:'#fff',
		flexDirection:'row',
		alignItems:'center',
		paddingHorizontal:px2dp(15),
		marginBottom:px2dp(1),
		justifyContent:'space-between'
	}
})