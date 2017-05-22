// 统一了UI尺寸，可以做到自适应宽高比
'use strict';

import {Dimensions} from 'react-native';

const deviceHeight = Dimensions.get('window').height;
// 调试的模拟器是480X800的
const uiHeightPx = 800;
// 等比例看到效果，在其他机器运行时达到相同的比例效果
export default function px2dp(uiElementPx) {
	return uiElementPx *  deviceHeight / uiHeightPx;
}