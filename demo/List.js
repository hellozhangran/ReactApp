import React, { Component } from 'react';
import { AppRegistry, ListView, Text, View } from 'react-native';

export default class ListViewBasics extends Component {
  static navigationOptions = {
      header: null
  }
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
      ])
    };
  }
  render() {
    return (
      <View style={{flex: 1, paddingTop: 22,}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={
              (rowData) =>  {
                  return (
                    <Text style={{fontSize: 100, textAlign: 'center'}}>{rowData}</Text>
                  )
              }
          }
        />
      </View>
    );
  }
}