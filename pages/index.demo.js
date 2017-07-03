'use strict';

import React , {Component} from 'react';
import { AppRegistry, ScrollView, View, Dimensions, Text, StyleSheet } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const scrollViewWidth = Math.round(screenWidth * 1);
const cardWidth = scrollViewWidth * 0.80;
const paddingCard = scrollViewWidth * 0.02;
const scrollViewPadding = scrollViewWidth * 0.08;

export default class ScrollViewAlign extends Component{
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{height:40}}></View>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          style={styles.scroll}
          snapToAlignment={'start'}
          decelerationRate={'fast'}
          contentOffset={{
            x: 0,
            y: 0,
          }}
          snapToInterval={cardWidth + paddingCard + paddingCard}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          pagingEnabled={false}
        >
          <View style={styles.slide1}><Text>First Card</Text></View>
          <View style={styles.slide}><Text>Second Card</Text></View>
          <View style={styles.slide}><Text>Third Card</Text></View>
          <View style={styles.slide}><Text>Third Card</Text></View>
          <View style={styles.slide}><Text>Third Card</Text></View>
          <View style={styles.slide2}><Text>Third Card</Text></View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  layout: {

  },
  scroll: {
    flex: 0, 
    backgroundColor: '#BDBDBD', 
    height: screenWidth * 0.5,
    width: scrollViewWidth
  },
  scrollContainer: {
  },
  slide1: {
    justifyContent: 'center',
    width:cardWidth, 
    height: 500,
    marginTop:30,
    borderRadius: 20, 
    backgroundColor: '#F44336', 
    marginLeft: paddingCard + scrollViewPadding,
    marginRight: paddingCard
  },
  slide2: {
    justifyContent: 'center',
    width: cardWidth, 
    height: 500,
    marginTop:30,
    borderRadius: 20,
    backgroundColor: '#1A237E',
    marginRight:paddingCard + scrollViewPadding, 
    marginLeft: paddingCard  
  },
  slide: {
    justifyContent: 'center',
    width: cardWidth, 
    height: 500,
    marginTop:30,
    borderRadius: 20,
    backgroundColor: '#9C27B0', 
    marginHorizontal:paddingCard
  }
  

})