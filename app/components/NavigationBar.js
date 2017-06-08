import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Platform,
    TouchableOpacity
} from 'react-native';

import theme from '../config/theme';
import px2dp from '../util/px2dp';

class NavigationBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // leftTitle和leftImage 优先判断leftTitle (即 文本按钮和图片按钮优先显示文本按钮)
        const { title, leftTitle, leftImage, leftAction, rightTitle, rightImage, rightAction } = this.props;
        return (
            <View style={[styles.barView, this.props.style]}>
                <View style={ styles.showView }>
                    {
                        leftTitle
                        ?
                        <TouchableOpacity style={styles.leftNav} onPress={ ()=>{leftAction()} }>
                            <View style={{alignItems: 'center'}}>
                                <Text style={styles.barButton}>{leftTitle}</Text>
                            </View>
                        </TouchableOpacity>
                        :
                        (
                            leftImage
                            ?
                            <TouchableOpacity style={styles.leftNav} onPress={ ()=>{leftAction()} }>
                                <View style={{alignItems: 'center'}}>
                                    <Image source={ leftImage } style={{width:px2dp(30),height:px2dp(30)}}/>
                                </View>
                            </TouchableOpacity>
                            : null
                        )
                    }
                    {
                        title ?
                        <Text style={styles.title}>{title || ''}</Text>
                        : null
                    }
                    {
                        rightTitle ?
                        <TouchableOpacity style={styles.rightNav} onPress={ ()=>{rightAction()} }>
                            <View style={{alignItems: 'center'}}>
                                <Text style={styles.barButton}>{rightTitle}</Text>
                            </View>
                        </TouchableOpacity>
                        : (rightImage ?
                            <TouchableOpacity style={styles.rightNav} onPress={ ()=>{rightAction()} }>
                                <View style={{alignItems: 'center'}}>
                                    <Image source={ rightImage } style={{width:px2dp(30),height:px2dp(30)}}/>
                                </View>
                            </TouchableOpacity>
                            : null
                        )
                    }

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    barView: {
        height: theme.actionBar.height,
        backgroundColor: theme.themeColor,
    },
    showView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: Platform.OS === 'android' ? 0 : px2dp(20),
        height: px2dp(44),
    },
    title: {
        color: theme.actionBar.fontColor,
        fontSize: px2dp(18),
    },
    leftNav: {
        position: 'absolute',
        top: px2dp(8),
        bottom: px2dp(8),
        left: px2dp(8),
        justifyContent: 'center',
    },
    rightNav: {
        position: 'absolute',
        right: px2dp(8),
        top: px2dp(8),
        bottom: px2dp(8),
        justifyContent: 'center',
    },
    barButton: {
        color: 'white',
        fontSize: theme.actionBar.fontSize
    },
})
export default NavigationBar