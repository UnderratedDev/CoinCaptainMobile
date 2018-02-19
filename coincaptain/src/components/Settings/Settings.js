import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

export default class Settings extends Component {

  render () {
    return (
      <View>
          <Text>Settings Component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container : {
      padding : 20
  },
  input : {
      height : 40,
      backgroundColor : 'rgba(255, 255, 255, 0.2)',
      marginBottom : 10,
      color : '#FFF',
      paddingHorizontal : 10
  },
  buttonContainer : {
      backgroundColor : '#2980b9',
      paddingVertical : 15
  },
  buttonText : {
      textAlign : 'center',
      color : '#FFFFFF',
      fontWeight : '700'
  }
})

AppRegistry.registerComponent ('Settings', () => Settings);