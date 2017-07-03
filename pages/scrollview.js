import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Button,
  Image,
  ScrollView
} from 'react-native';
import Swiper from 'react-native-swiper';  

export default class CustomScrollView extends Component {
  
  renderItem() {
    var itemAry = [];
    var colorAry = ['gray', 'yellow', 'orange', 'red', 'green'];
    for (var i = 0; i<colorAry.length; i++) {
      itemAry.push(
        <View key={i} style={[styles.itemStyle, {backgroundColor: colorAry[i]}]}></View>
      );
    }
    return itemAry;
  }

  render(){
    return(
      <View style={styles.layout}>
        <View style={{width: 50, height: 50, backgroundColor: '#456789'}}>
        </View>
        <ScrollView style={styles.scrollViewStyle}
          contentContainerStyle={styles.scrollContainer}
          horizontal={true}
          decelerationRate={0}
          contentOffset={{x:0, y:0}}
          showsHorizontalScrollIndicator={false}
          endFillColor={'yellow'}
          pagingEnabled={false}
          snapToAlignment={'start'}
          snapToInterval={300}
          >
          {this.renderItem()}
        </ScrollView>
        <View style={{width: 50, height: 100, backgroundColor: 'red'}}>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  layout: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ccc',
  },


  scrollViewStyle: {
    backgroundColor: '#404040',
  },

  scrollContainer: {
    backgroundColor: '#456234',
  },

  itemStyle: {
    width: 375,
    height: 300,
    //margin: 5,
    marginTop:10
  },

});












