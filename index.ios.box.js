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
  NavigatorIOS
} from 'react-native';
import Index from './pages/Index';


export default class ReactApp extends Component {
  render() {
    return (
      <NavigatorIOS
        style = {styles.container}
        initialRoute = {{
          title: '首页',
          component: Index,
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent('ReactApp', () => ReactApp);
