import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    ScrollView,
} from 'react-native';

import React, {Component} from 'react';
import Swiper from 'react-native-swiper';

var sliderImgs = [
    'https://images3.c-ctrip.com/SBU/apph5/201505/16/app_home_ad16_640_128.png',
    'https://images3.c-ctrip.com/rk/apph5/C1/201505/app_home_ad49_640_128.png',
    'https://images3.c-ctrip.com/rk/apph5/D1/201506/app_home_ad05_640_128.jpg'
]

var BUIcon = [
	'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/%E6%9C%AA%E6%A0%87%E9%A2%98-1.png',
	'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/feiji.png',
	'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/lvyou.png',
	'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/gonglue.png'

];

class Slider extends Component{
    render(){
        return (
            <Swiper style={styles.wrapper} showsButtons={false} autoplay={true} height={150} showsPagination={false}>
                <Image style={[styles.slide,]} source={{uri: sliderImgs[0]}}></Image>
                <Image style={[styles.slide,]} source={{uri: sliderImgs[1]}}></Image>
                <Image style={[styles.slide,]} source={{uri: sliderImgs[2]}}></Image>
            </Swiper>
        )
    }
}

class Index extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: 'zhangran'
        }
        console.log('constructor')
    }
    componentWillMount(){
        console.log('willMount')
    }
    componentDidMount(){
        console.log('didMount')
    }
    
    showDetails(){
        alert('show')
    }
    render(){
        return (
            <ScrollView>
                {/* 整体的View */}
                <View style={styles.container}> 
                    <Slider/> 
                    {/* 第一组 */}
                    <View style={[styles.sbu_red, styles.sbu_view]}> 
                        <TouchableHighlight underlayColor={'#FA6778'} style={{flex: 1}} onPress={this.showDetails}>
                            <View style={[styles.sbu_flex, styles.sbu_borderRight]}>
                                <View style={[styles.sub_con_flex, styles.sub_text]}>
                                    <Text style={[styles.font16]} onPress={() => alert('酒店')}>酒店</Text>
                                </View>
                                <View style={[styles.sub_con_flex]}>
                                    <Image style={[styles.sbu_icon_img]} source={{uri:BUIcon[0]}}></Image>
                                </View>
                            </View>
                        </TouchableHighlight>
                        <View style={[styles.sbu_flex, styles.sbu_borderRight]}>
                            <View style={[styles.sub_con_flex, styles.sub_text, styles.sbu_borderBottom]}>
                                <Text style={[styles.font16]}>海外</Text>
                            </View>
                            <View style={[styles.sub_con_flex, styles.sub_text]}>
                                <Text style={[styles.font16]}>周边</Text>
                            </View>
                        </View>
                        <View style={[styles.sbu_flex]}>
                            <View style={[styles.sub_con_flex, styles.sub_text, styles.sbu_borderBottom]}>
                                <Text style={[styles.font16]}>团购.特惠</Text>
                            </View>
                            <View style={[styles.sub_con_flex, styles.sub_text]}>
                                <Text style={[styles.font16]}>客栈.公寓</Text>
                            </View>
                        </View>
                    </View>    
                </View>
            </ScrollView>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        backgroundColor: '#F2F2F2',
        flex: 1
    },
    wrapper: {
        height: 80
    },
    slide: {
        height: 80,
        resizeMode: 'cover',
    },
    sbu_view:{
        height: 84,
        marginLeft: 5,
        marginRight: 5,
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        flexDirection: 'row'
    },
    sbu_red: {
        backgroundColor: '#FA6778',
        borderColor: '#FA6778',
        marginTop: -70,
    },
    sbu_flex: {
        flex: 1
    },
    sbu_borderRight: {
        borderColor: '#fff',
        borderRightWidth: 0.5,
    },
    sub_con_flex:{
  		flex:1,
  		justifyContent: 'center',
  		alignItems: 'center',
  	},
    sub_text:{
  		justifyContent:'center',
  	},
    font16: {
        fontSize: 16
    },
    sbu_icon_img:{
  		height:40,
  		width:40,
  		resizeMode:Image.resizeMode.contain,
  	},
    sbu_borderBottom:{
  		borderBottomWidth:0.5,
  		borderBottomColor:'#fff',
  	},
})

export default Index