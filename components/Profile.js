import React, { Component } from 'react';
import { ListView,StatusBar,View,Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';

export default class Profile extends Component {

  render() {
    return (
      <View>
        <View>
          <Text>"name": "std6002041520042"</Text>
          <Text>"email": "oatdmp@gmail.com"</Text>
        </View>
      </View>
    );
  }
}
