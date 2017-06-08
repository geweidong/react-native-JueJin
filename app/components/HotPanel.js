// 最热模块

import React, { Component } from 'react';
import {
  StyleSheet, 
  View, 
  Text, 
  Image, 
  Dimensions, 
  TouchableOpacity, 
  Platform, 
  TouchableNativeFeedback, 
  PixelRatio
} from 'react-native';

import px2dp from '../util/px2dp';
import theme from '../config/theme';


export default class HotPanel extends Component {
	constructor(props){
		super(props);
		this.state = {
			isHotPanelShow:true,
			data:[]
		}
	}
	componentWillMount(){
		for(let i in this.props.contents){
			this.state.data[i] = this.props.contents[i];
		}

		this.state.data.sort((item1,item2) => {
			// 意思是将数据按照收藏数从大到小排序
			if(item1.collectionCount < item2.collectionCount){
				// 若 a 小于 b，在排序后的数组中 a 应该出现在 b 之前，则返回一个小于 0 的值
				return 1;
			}else if(item1.collectionCount > item2.collectionCount){
				// 若 a 大于 b，则返回一个大于 0 的值。
				return -1;
			}
			// 若 a 等于 b，则返回 0
			return 0;
		})
		// 展示三组
		this.state.data.length = 3;
	}

	// 点击刷新按钮
	_onRefresh(){
		alert('刷新操作，还没做')
	}

	// 点击关闭按钮
	_closePanel(){
		this.setState({
			isHotPanelShow:false
		})
	}

	render(){
		const {title} = this.props;
        var {data} = this.state;

        if(this.state.isHotPanelShow){
        	return (
        		// 推荐三个热门
        		<View style={styles.container}>
        			<View style={styles.title}>
        				<View style={{flexDirection:'row',alignItems:'center'}}>
        					<Image source={require('../image/flame.png')} style={{width:px2dp(20),height:px2dp(20)}} />
	        				<Text
		        				style={{
		        					color: theme.themeColor,
			                        fontSize: theme.scrollView.fontSize,
			                        marginLeft: px2dp(5)
		        				}}
		        			>{title}</Text>
        				</View>
        				<View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <TouchableOpacity
                                style={{marginRight: px2dp(15)}}
                                onPress={()=>this._onRefresh()}
                                activeOpacity={theme.btnActiveOpacity}>
                                <Image source={require('../image/refresh.png')} style={{width:px2dp(20),height:px2dp(20)}} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={()=>this._closePanel()}
                                activeOpacity={theme.btnActiveOpacity}>
                                <Image source={require('../image/close.png')} style={{width:px2dp(20),height:px2dp(20)}} />
                            </TouchableOpacity>
                        </View>
        			</View>

        			<View style={{height: 1 / PixelRatio.get(), backgroundColor: '#f1f1f1'}}></View>

        			<View style={{width:theme.screenWidth}}>
        				{
	        				data.map((item,index) => {
	        					return (
	        						<TouchableNativeFeedback
	        							key={index}
	        							onPress={()=>this._hotPanelCallback(item)}
	        						>
			    						{this._renderContent(item)}
	        						</TouchableNativeFeedback>
	        					)
	        				})
	        			}
        			</View>
        		</View>
			)
        }else{
        	return null;
        }
		
	}

	// 渲染热门模块内的每块内容
	_renderContent(item){
		return (
			<View style={styles.listItem}>
				<View style={{flex:80,marginTop:px2dp(10)}}>
					{/*numberOfLines={2}表示最多显示2行，多的部分以...结尾*/}
					<Text style={{color:'#000',fontSize:px2dp(15)}} numberOfLines={2}>{item.title}</Text>
					<View style={{flexDirection:'row',marginTop:px2dp(15),alignItems:'center'}}>
						<Image source={require('../image/heart.png')} style={{width:px2dp(13),height:px2dp(13)}}/>
						<Text style={styles.underTitle}>{item.collectionCount}</Text>
						<Image source={require('../image/man.png')} style={{width:px2dp(13),height:px2dp(13)}}/>
						<Text style={styles.underTitle}>{item.user.username}</Text>
						<Image source={require('../image/time.png')} style={{width:px2dp(13),height:px2dp(13)}}/>
						<Text style={styles.underTitle}>{item.time}</Text>
					</View>
				</View>
				<View style={{justifyContent:'center'}}>
					{
						item.screenshot ? // 加载不出来图片，所以先用本地图片替代
						<Image source={require('../image/zhanwei.png')} style={{width:px2dp(50),height:px2dp(50)}} />
						:
						<Image source={require('../image/logo_og.png')} style={{width:px2dp(50),height:px2dp(50)}} />
					}
				</View>
				<View style={{height: 1/PixelRatio.get(), backgroundColor: '#f1f1f1'}}></View>
			</View>
		)
	}

	// 点击热门模块
	_hotPanelCallback(item){
		alert(item)
	}
}

const styles = StyleSheet.create({
	container:{
		backgroundColor:'#fff',
		marginTop:px2dp(12),
		marginBottom:px2dp(3)
	},
	title:{
		width:theme.screenWidth,
		flexDirection:'row',
		justifyContent:'space-between',
		alignItems:'center',
		paddingHorizontal:px2dp(15),
		paddingVertical:px2dp(7),
	},
	listItem:{
		height:px2dp(80),
		paddingHorizontal:px2dp(15),
		flexDirection:'row',
	},
	underTitle:{
		color:theme.grayColor,
		fontSize:px2dp(10),
		marginRight:px2dp(12),
		marginLeft:px2dp(5)
	}
})