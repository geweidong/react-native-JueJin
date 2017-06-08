import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  WebView,
  Image,
  ActivityIndicator
} from 'react-native';

import NavigationBar from './NavigationBar';
import theme from '../config/theme';
import px2dp from '../util/px2dp';

export default class WebViewPage extends Component {
	constructor(props){
		super(props);
		this.state = {
			URL: ''
		}
	}

	componentDidMount() {
	    // 传参
	    const {params} = this.props.navigation.state;
	    console.log(params.url);
	    this.setState({
	    	URL: params.url
	    })
	}

	render() {
		return (
			<View style={{flex: 1}}>
				<NavigationBar 
					{...this.props}
					title="文章详情"
					leftImage={require('../image/back.png')}
					leftAction={() => this.backPage()}
				/>
				<View style={{flex: 1}}>
					<WebView 
						source={{uri: this.state.URL}}
						renderLoading={this._renderLoading.bind(this)}

					/>
				</View>
			</View>
		)
	}

	backPage() {
		this.props.navigation.goBack();
	}

	_renderLoading() {
		return (
			<View style={{justifyContent: 'center', paddingTop: px2dp(20)}}>
				<ActivityIndicator 
					color={theme.themeColor}
					size="large"
				/>
			</View>
		)
	}
}