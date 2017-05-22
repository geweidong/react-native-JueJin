// 定义了全局的某些样式

'use strict';

import {PixelRatio, Dimensions, Platform} from 'react-native';
import px2dp from '../util/px2dp';
// 全局文字颜色
const globalTextColor = '#000';

module.exports = {
	// 屏幕宽度
	screenWidth:Dimensions.get('window').width,
	// 屏幕高度
	screenHeight:Dimensions.get('window').height,
	// 主题颜色
	themeColor: 'rgb(22,131,251)',
	// 主题背景
	pageBackgroundColor: '#f4f4f4',
	// 灰色
	grayColor: '#c4c4c4',
	// 点击按钮透明度
	btnActiveOpacity: 0.7,
	// 导航条设置
	actionBar: {
        height:px2dp(49),
        backgroundColor: 'rgb(22,131,251)',
        fontSize: px2dp(16),
        fontColor: 'white'
    },
    text: {
        color: globalTextColor,
        fontSize: px2dp(15)
    },
    scrollView: {
        fontSize: px2dp(15),
        underlineStyle: {
            backgroundColor: 'white'
        }
    }
}