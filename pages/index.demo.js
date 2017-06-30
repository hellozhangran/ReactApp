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
  NavigatorIOS,
  Dimensions,
  PixelRatio
} from 'react-native';
import Index from './pages/Index';


export default class ReactApp extends Component {
  render() {
    console.log(Dimensions.get('window').width)
    console.log(PixelRatio.get())
    return (
      <View style={{height: 300, backgroundColor: '#ccc', justifyContent: 'center'}}>
        {/*<Text style={{marginTop: 20}}>React Native的布局 && 尺寸</Text>
        <View style = {[styles.box,styles.h1]}></View>
        <Text style={styles.text}>你好</Text>
        <View style={styles.box1}>
          <View style={{height: 100, backgroundColor: 'red'}}></View>
          <Text style={{height:100, backgroundColor: 'green'}}></Text>
        </View>*/}
          <View style={{height:100, borderWidth:1, borderColor:'#af9810', }}>
            <View style={{flex:1,  width:200,height:200, backgroundColor: '#333333'}}/>
            <View style={{flex:1,  width: 50,height:100, backgroundColor: 'yellow'}}/>
          </View>  

          <Text><Text style={{color:'red'}}>你好，</Text>你是谁啊，我认识你吗</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box1: {
    width: 100
  },
  box:{
    borderWidth:1,
    borderColor:'red'
  },
  h1:{
    height: 100
  },
  text: {
    borderWidth:1,
    borderColor:'red',
    width: 200,
    height:10,
    fontSize:20
  }
  
});

AppRegistry.registerComponent('ReactApp', () => ReactApp);
