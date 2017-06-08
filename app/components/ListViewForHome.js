import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  TouchableOpacity,
  PixelRatio
} from 'react-native';

import px2dp from '../util/px2dp';
import theme from '../config/theme';
import TextButton from './TextButton';

export default class ListViewForHome extends Component {
	constructor(props){
		super(props);

		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2,
		});
		this.state = {
			dataSource: ds.cloneWithRows(this.props.contents)
		};

	}

	componentDidMount() {
		
	}

	render() {
		return (
			<ListView 
				dataSource={this.state.dataSource}
				style={styles.listView}
				renderRow={(rowData)=>this._renderItem(rowData)}
			/>
		)
	}

	_renderItem(rowData) {
		// console.log(rowData)
		return (
			<View>
				<View style={styles.headerCell}>
					<View style={styles.headerLeft}>
						<Image source={{uri: rowData.user.avatar_large}} style={styles.avator} />
						<View style={{marginLeft: px2dp(5)}}>
							<TextButton
								text={rowData.user.username}
								style={styles.userName}
								onPress={()=>this._userNameClickCallback(rowData.user)}
							/>
							<Text style={{color:theme.grayColor, fontSize:px2dp(11)}} numberOfLines={1}>{rowData.user.jobTitle} @ {rowData.user.company} • {rowData.time}</Text>
						</View>
					</View>
					<View>
						<Text style={{color:theme.grayColor, fontSize:px2dp(12)}}>{rowData.tags[0]}</Text>
					</View>
				</View>
				<View style={styles.contentCell}>
					<Text style={styles.contentText} numberOfLines={3}>{rowData.content}</Text>
					<TouchableOpacity 
						activeOpacity={theme.btnActiveOpacity}
						onPress={()=>this.gotoItemDetail(rowData)}
					>
						{this.renderCell(rowData)}
					</TouchableOpacity>
				</View>
				<View style={styles.bottomCell}>
					<Image source={require('../image/favorite_gray.png')} style={{width: px2dp(25), height:px2dp(25)}} />
					<Text style={{marginRight: px2dp(25),marginLeft: px2dp(5)}}>{rowData.collectionCount}</Text>
					<Image source={require('../image/bubble_gray.png')} style={{width: px2dp(25), height:px2dp(25)}} />
				</View>
			</View>
		)
	}

	// 跳转文章详情页
	gotoItemDetail(rowData) {
		const {navigate} = this.props.navigation;
		navigate('WebViewPage',{
			url: rowData.url
		})
	}

	renderCell(rowData) {
		return (
			<View style={styles.linkView}>
				{
					rowData.screenshot ? 
					<Image source={{uri: rowData.screenshot.url}} style={{width:59, height:59}} />
					:
					<Image source={require('../image/user_article_no_data.png')} style={{width:59, height:59, resizeMode: 'cover'}} />
				}
				
				<View style={styles.linkTextView}>
					<Text style={styles.linkText} numberOfLines={2}>{rowData.title}</Text>
				</View>
			</View>
		)
	}

	_userNameClickCallback(user) {
		const {navigate} = this.props.navigation;
		navigate('IndividualPage',{
			user: user
		})
	}
}


const styles = StyleSheet.create({
	listView:{
		backgroundColor:'#fff'
	},
	headerCell:{
		flexDirection:'row',
		padding:px2dp(10),
		height:px2dp(45),
		width:theme.screenWidth,
		justifyContent:'space-between',
		alignItems:'center'
	},
	headerLeft:{
		flexDirection:'row',
	},
	avator:{
		width:px2dp(34),
		width:px2dp(34),
		borderRadius:px2dp(3)
	},
	userName:{
		color:'steelblue',
		fontSize:px2dp(14)
	},
	contentCell:{

	},
	contentText:{
		color:'#000',
		padding:px2dp(10)
	},
	linkView:{
		height: px2dp(60),
		width: theme.screenWidth - px2dp(20),
		flexDirection: 'row',
		alignItems: 'center',
		borderWidth: 1/PixelRatio.get(),
		borderColor: theme.grayColor,
		marginLeft: px2dp(10)
	},
	linkTextView:{
		padding: px2dp(5),
		alignItems: 'flex-start',
		flex:1
	},
	linkText:{
		fontSize:px2dp(16),
		fontWeight:'bold',
		color:'#000'
	},
	bottomCell:{
		flexDirection: 'row',
		alignItems:'center',
		width:theme.screenWidth,
		padding:px2dp(10)
	}
})