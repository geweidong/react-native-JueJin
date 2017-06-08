import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableNativeFeedback,
  TouchableOpacity,
  ScrollView,
  Switch,
  PixelRatio
} from 'react-native';

import theme from '../config/theme';
import px2dp from '../util/px2dp';
import NavigationBar from '../components/NavigationBar';

export default class SettingPage extends Component {
	render() {
		return (
			<View>
				<NavigationBar leftImage={require('../image/back.png')} leftAction={()=>this.gobackToMePage()} />

				<ScrollView>
					<View style={{marginTop: px2dp(20)}}>
						<ItemBar leftText="邮箱" rightText="未设置"/>
						<ItemBar leftText="手机号" rightText="未设置"/>
						<ItemBar leftText="修改账户密码"/>
					</View>

					<View style={{marginTop: px2dp(20)}}>
						<ItemBar leftText="绑定新浪微博" rightText="未设置" isHasSwitcher={true} switchValue={false}/>
						<ItemBar leftText="绑定微信" rightText="未设置"/>
						<ItemBar leftText="绑定Github" rightText="React-native" isHasSwitcher={true} switchValue={true}/>
					</View>

					<View style={{marginTop: px2dp(20)}}>
						<ItemBar leftText="清除缓存"/>
						<ItemBar leftText="向我推送好文章" isHasSwitcher={true} switchValue={false}/>
						<ItemBar leftText="移动网页下首页不显示图片" isHasSwitcher={true} switchValue={false}/>
						<ItemBar leftText="自动检查粘贴板块快速分享" isHasSwitcher={true} switchValue={true}/>
					</View>

					<View style={{marginTop: px2dp(20)}}>
						<ItemBar leftText="用户反馈"/>
					</View>
				</ScrollView>
			</View>
		)
	}

	gobackToMePage() {
		this.props.navigation.goBack();
	}
}

class ItemBar extends Component {
	constructor(props){
		super(props);
		this.state = {
			value: this.props.switchValue,
		}
	}
	render() {
		const {leftText, rightText, isHasSwitcher, onPress, switchValue} = this.props;

		return(
			<TouchableOpacity activeOpacity={theme.btnActiveOpacity}>
				<View style={styles.itemBarView}>
					<Text style={{color:'#000'}}>{leftText}</Text>
					<View style={styles.itemRightView}>
						<Text style={{color:'gray'}}>{rightText}</Text>
						{
							isHasSwitcher ?
							<Switch onValueChange={()=>{
								this.setState({
									value: !this.state.value
								})
							}} value={this.state.value}/>
							:
							null
						}
					</View>
				</View>
			</TouchableOpacity>
		)	
	}
}

const styles = StyleSheet.create({
	itemBarView:{
		width: theme.screenWidth, 
		height: px2dp(40),
		backgroundColor:'#fff',
		marginBottom:px2dp(2),
		paddingHorizontal: px2dp(20),
		alignItems:'center',
		flexDirection: 'row',
		justifyContent:'space-between'
	},
	itemRightView:{
		flexDirection:'row',
		alignItems:'center'
	}
})