import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import ScrollPage from './demo/simple'
import ListPage from './demo/List'

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{marginTop: 50}}>
        <Text>Hello, Chat App!</Text>
          <Button
            onPress={() => navigate('List')}
            title="Chat with Lucy"
          />
      </View>  
    )
  }
}

const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  List: { screen: ListPage},
});



AppRegistry.registerComponent('ReactApp', () => SimpleApp);