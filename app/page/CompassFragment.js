import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  PixelRatio,
  Image,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
  Alert
} from 'react-native';

import theme from '../config/theme';
import px2dp from '../util/px2dp';
import SearchText from '../components/SearchText';
import Swiper from 'react-native-swiper';  
import ImageBtn from '../components/ImageBtn';
import computeTime from '../util/computeTime';
import ListViewOtherTab from '../components/ListViewOtherTab';

const bannerImages = [require('../image/banner1.jpg'), require('../image/banner2.png')];
const URL = 'http://gold.xitu.io/api/v1/hot/57fa525a0e3dd90057c1e04d/android';

const imageBtnLines = [
	{
		text:'沸点',
		source:require('../image/trend.png')
	},
	{
		text:'贡献榜',
		source:require('../image/flame.png')
	},
	{
		text:'本周最热',
		source:require('../image/rank.png')
	},
]

export default class CompassFragment extends Component {
	constructor(props){
		super(props);
		this.state = {
			refreshing: true,
			dataBlob: null,
			hasLoaded: false
		}
	}

	componentDidMount() {
		this._fetchData();
	}

	_fetchData() {
		fetch(URL)
		.then((response) => response.json())
		.then((data) => {
			const dataSource = data.data.entry;
			const dataBlob = [];

			for(let i in dataSource){
                let itemInfo = {
                    title: dataSource[i].title,
                    collectionCount: dataSource[i].collectionCount,
                    user: dataSource[i].user,
                    time: computeTime(dataSource[i].createdAtString),
                    url: dataSource[i].url,
                    commentsCount: dataSource[i].commentsCount,
                    viewsCount: dataSource[i].viewsCount,
                    screenshot: dataSource[i].screenshot ? dataSource[i].screenshot : null
                }
                dataBlob.push(itemInfo);
            }

            this.setState({
            	dataBlob: dataBlob,
            	hasLoaded: true,
            	refreshing: false
            })
		})
		.done();
	}

	render(){
		return (
			<View style={{flex: 1}}>
				<View style={styles.headerView}>
					<SearchText style={styles.textInput} onPress={()=>this.searchBtnEvent()}/>
				</View>
				<ScrollView
					refreshControl={
						<RefreshControl 
							refreshing={this.state.refreshing}
                            onRefresh={this._onRefresh.bind(this)}
                            colors={['red','#ffd500','#0080ff','#99e600']}
                            tintColor={theme.themeColor}
						/>
					}
				>
					<Swiper
						loop={true}
						index={0}  
		                autoplay={true}
		                showsPagination={true}
		                height={px2dp(130)}
		                paginationStyle={{position: 'absolute', bottom: px2dp(5)}}
		                activeDotColor="#fff"
					>
						{this.renderImgs()}
					</Swiper>

					<View style={styles.imageBtnLine}>
						{
							imageBtnLines.map((item, index) => {
								return (
									<ImageBtn key={index} onPress={()=>this.imageBtnCallBack(item.text)} source={item.source} text={item.text} imgStyle={{width: px2dp(40), height: px2dp(40)}}/>
								)
							})
						}
					</View>
					<View>
						{this._renderListView()}
					</View>
				</ScrollView>
			</View>
		)
	}

	imageBtnCallBack(item) {
		Alert.alert(
            '温馨提示',
            item+"页面还没有开发",
            [{text: '算了', onPress: () => {
            	// 点击回调
            }}]
        );
	}

	_renderListView() {
		if(!this.state.refreshing || this.state.hasLoaded){
			return (
				<ListViewOtherTab {...this.props} contents={this.state.dataBlob} hasHeaderView={true} />
			)
		}
	}

	renderImgs() {
		let imageViews = [];
		for(var i=0;i<bannerImages.length;i++){
			imageViews.push(
				<Image key={i} source={bannerImages[i]} style={{width: theme.screenWidth, height: px2dp(130)}} />
			)
		};

		return imageViews;
	}

	_onRefresh() {
		this.setState({
			refreshing:true,
		});
		this._fetchData();
	}

	searchBtnEvent() {
		alert('正在搜索');
	}
}

const styles = StyleSheet.create({
	headerView: {
		height: theme.actionBar.height,
		backgroundColor: theme.themeColor,
		alignItems:'center'
	},
	textInput:{
		borderColor:'#FFF',
		borderWidth:1/PixelRatio.get(),
		width: theme.screenWidth-60,
		backgroundColor:'#489efc',
		borderRadius:px2dp(3),
		height: theme.actionBar.height-5,
		alignItems:'center',
		marginLeft: px2dp(10),
		marginTop: px2dp(2)
	},
	imageBtnLine:{
		flexDirection: 'row',
		justifyContent: 'space-around',
		width: theme.screenWidth,
		backgroundColor:'#fff',
		borderBottomColor:'#c4c4c4',
		borderBottomWidth:1/PixelRatio.get()
	}
})