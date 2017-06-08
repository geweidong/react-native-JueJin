import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  WebView
} from 'react-native';

import NavigationBar from '../components/NavigationBar';

export default class IndividualPage extends Component {
	constructor(props){
		super(props);
		this.state = {
		
		}
	}

	render() {
		return (
			<View style={{flex: 1}}>
				<NavigationBar
					{...this.props}
					title="个人主页"
					leftImage={require('../image/back.png')}
					leftAction={() => this.backPage()}
				 />
				  	<View style={styles.webView}>
				  		<Text style={{fontSize:20}}>他还没有主页</Text>
				  	</View>
			</View>
		)
	}

	componentDidMount() {
		
	}

	backPage() {
		this.props.navigation.goBack();
	}
}

const styles = StyleSheet.create({
	webView:{
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff'
	}
})