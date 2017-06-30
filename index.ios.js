/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  PixelRatio,
  TouchableHighlight
} from 'react-native';

export default class ReactApp extends Component {
  state = {
        count: 0,
        countLong: 0,
        text: '',
        waiting: false,
        startTime: 0
  }
  onPressBtnIn(){
    console.log('press')
  }

  render() {
    return (
      <Image source={require('./assets/bg.png')} style={styles.bg}>
        <View style={styles.container}>
          <Image source={require('./assets/giraffine.png')} style={styles.banner}/>
          <TouchableHighlight style={[styles.btn, styles.btnIn]}
              activeOpacity={0.9}
              underlayColor='#82D1D8'
              onHideUnderlay={()=>{
                  //this.setState({text:'衬底被隐藏'})
              }}
              onShowUnderlay={()=>{
                  //this.setState({text:'衬底显示'})
              }}
              onPress={this.onPressBtnIn}
              >
              <Text style={styles.text1}>点击进入游戏</Text>
          </TouchableHighlight>
          
          <TouchableHighlight style={[styles.btn, styles.btnStep]}
              activeOpacity={0.9}
              underlayColor='#4EEBFA'
              onPress={this.onPressBtnIn}
              >
              <Text style={styles.text2}>获取运动步数权限</Text>
          </TouchableHighlight>

          <TouchableHighlight style={[styles.btn, styles.btnPosition]}
              activeOpacity={0.9}
              underlayColor='#4EEBFA'
              onPress={this.onPressBtnIn}
              >
              <Text style={styles.text2}>获取位置权限</Text>
          </TouchableHighlight>
        </View>       
      </Image>
    );
  }
}

var screen = Dimensions.get('window')
const styles = StyleSheet.create({
  bg:{
    flex:1,  
    width: null, 
    height: null,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '80%', 
    height: '90%',
    borderRadius: 20,
    backgroundColor: '#AAF8FF'
  },
  banner: {
    width: '85%',
    height: '55%',
    resizeMode:'contain',
    paddingTop:0
  },
  btn: {
    borderRadius: 20,
    width: '85.8%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnIn: {
    marginTop: 50,
    backgroundColor: '#4DD3DE',
    
  },
  btnStep: {
    marginTop: 30,
    backgroundColor: '#FFF',
  },
  btnPosition: {
    marginTop: 10,
    backgroundColor: '#FFF',
  },
  text1: {
    fontSize:15, 
    color: 'white', 
    textAlign: 'center',  
  },
  text2: {
    fontSize:15, 
    color: '#41BBC6', 
    textAlign: 'center', 
  }
});

AppRegistry.registerComponent('ReactApp', () => ReactApp);
