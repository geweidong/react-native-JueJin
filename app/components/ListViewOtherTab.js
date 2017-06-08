
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

import theme from '../config/theme';
import px2dp from '../util/px2dp';
import WebViewPage from './WebViewPage';

export default class ListViewOtherTab extends Component {
	constructor(props){
		super(props);
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});
		
		this.state = {
			rowData: ds.cloneWithRows(this.props.contents)
		}
	}

	componentDidMount() {
		
	}

	render() {
		return (
			<View>
				<ListView 
					style={styles.listView}
					dataSource={this.state.rowData}
					renderRow={(rowData)=>this._renderRow(rowData)}
					renderHeader={this._renderHeader.bind(this)}
				/>
				
			</View>
		)
	}

	_renderHeader() {
		if(this.props.hasHeaderView){
			return (
				<View style={styles.headerTitle}>
					<Text>精品文章</Text>
				</View>
			)
		}else{
			return null;
		}
		
	}

	gotoItemDetail(rowData) {
		const {navigate} = this.props.navigation;
		navigate('WebViewPage',{
			url: rowData.url
		})
	}

	_renderRow(rowData) {
		return (
			<TouchableOpacity
				activeOpacity={theme.btnActiveOpacity}
				onPress={()=>this.gotoItemDetail(rowData)}
			>
				<View style={styles.item}>
	                <View style={{
	                    flex: 20,
	                    flexDirection: 'row',
	                    justifyContent: 'space-between',
	                    alignItems: 'center',
	                    paddingLeft: px2dp(10)
	                }}>
	                    {
	                    	rowData.screenshot ? 
	                    	<Image source={{uri: rowData.screenshot.url}}
	                               style={styles.image}/>
	                        :
	                        <Image source={require('../image/user_article_no_data.png')}
	                               style={styles.image}/>
	                    }
	                </View>
	                <View style={{flex: 80, marginTop: px2dp(10)}}>
	                    <Text style={styles.content} numberOfLines={2}>{rowData.title}</Text>
	                    <View style={styles.infoBar}>
	                        <Text style={styles.infoBarText} numberOfLines={1}>{rowData.collectionCount}人收藏
	                            • {rowData.user.username} • {rowData.time}</Text>
	                    </View>
	                </View>
	            </View>
			</TouchableOpacity>
		)
	}
}

const styles = StyleSheet.create({
	listView:{
		marginTop: px2dp(15),
	},
	item:{
		flexDirection:'row',
		backgroundColor:'#fff',
		height: px2dp(80),
		borderTopColor: theme.grayColor,
		borderTopWidth: 1/PixelRatio.get()
	},
	headerTitle:{
		height: px2dp(40),
		justifyContent:'center',
		paddingLeft: px2dp(10),
		backgroundColor: '#fff'
	},
	image:{
		height: px2dp(55),
        width: px2dp(55),
        backgroundColor: '#f4f4f4',
        resizeMode: 'cover'
	},
	content:{
		color: '#000',
        fontSize: px2dp(15),
	},
	infoBar:{
		flexDirection: 'row',
        marginTop: px2dp(3)
	},
	infoBarText:{
		fontSize: px2dp(11),
        color: theme.grayColor
	}
})