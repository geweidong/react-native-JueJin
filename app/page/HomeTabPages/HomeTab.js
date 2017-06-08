import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView, 
  RefreshControl,
  PixelRatio
} from 'react-native';

import computeTime from '../../util/computeTime';
import theme from '../../config/theme';
import HotPanel from '../../components/HotPanel';
import ListViewForHome from '../../components/ListViewForHome';
import ListViewOtherTab from '../../components/ListViewOtherTab';

export default class HomeTab extends Component{
	constructor(props){
		super(props);
		this.state = {
			refreshing: true,
            loadedData: false,
            dataBlob: [] // 存放列表的数据
		}
	}
	componentDidMount(){
		this._fetData();
	}

	_fetData(){
		const url = 'http://gold.xitu.io/api/v1/timeline/57fa525a0e3dd90057c1e04d/' + this._getCurrentTime();
		fetch(url)
			.then((data) => data.json())
			.then((response) => {
				const data = response.data;
				let dataBlob = [];

				for(let i in data){
					let dataInfo = {
						tags: data[i].tagsTitleArray,
                        category: data[i].category,
                        content: data[i].content,
                        collectionCount: data[i].collectionCount,
                        title: data[i].title,
                        user: data[i].user,
                        url: data[i].url,
                        time: computeTime(data[i].createdAtString),
                        commentsCount: data[i].commentsCount,
                        viewsCount: data[i].viewsCount,
                        screenshot: data[i].screenshot ? data[i].screenshot : null
					};
					dataBlob.push(dataInfo);
				}

				if(dataBlob.length !== 0){
					this.setState({
						dataBlob:dataBlob,
						refreshing: false,
			            loadedData: true,
					})
				}
			})

	}

	_getCurrentTime(){
		function convertTime(time) {
            if (time <= 9)
                return '0' + time;
            return time;
        }

        var date = new Date();
        return date.getFullYear() + '-' + convertTime(date.getMonth() + 1) + '-' + convertTime(date.getDate()) + 'T' + convertTime(date.getHours()) + ':' + convertTime(date.getMinutes()) + ':' + convertTime(date.getSeconds() + '.' + date.getMilliseconds() + 'Z');

	}
	render(){
		return (
			<ScrollView
				refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh.bind(this)}
                        colors={['red','#ffd500','#0080ff','#99e600']}
                        tintColor={theme.themeColor}
                        title="加载中..."
                        titleColor={theme.themeColor}
                    />
                }
			>
				{this._renderContents()}
			</ScrollView>
		)
	}

	// 刷新的动作  
	_onRefresh(){
		this.setState({
			refreshing:true
		})

		this._fetData();
	}

	// 渲染里面的内容
	_renderContents(){
		let tabName = this.props.tabLabel;
		if(tabName == '首页'){
			tabName = '热门推荐';
		}else{
			tabName += '热门';
		}
		if(!this.state.refreshing || this.state.loadedData){
			// 如果没有出现菊花或者加载数据完成了
			return (
				<View>
					<HotPanel {...this.props} title={tabName} contents={this.state.dataBlob}/>
					{
						tabName === '热门推荐'?
						<ListViewForHome {...this.props} contents={this.state.dataBlob}/>:
						<ListViewOtherTab {...this.props} contents={this.state.dataBlob}/>
					}
				</View>
			)
		}
	}
}

