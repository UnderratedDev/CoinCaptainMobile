import React from 'react';
import { Platform, View, StatusBar, StyleSheet, Text } from 'react-native';

export default class StatusBarBackground extends React.Component {
  
  render() {
    return (
      <View style = { [ styles.statusBarBackground, this.props.style || {} ] }>
        { console.log (this.props.style) }
        <StatusBar 
          translucent
          backgroundColor = { this.props.style.backgroundColor || 'white' }
          barStyle = 'default'
          hidden = { false }
        />
      </View>
    )
  }
}

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

const styles = StyleSheet.create ({
  statusBarBackground : {
    height : STATUSBAR_HEIGHT,
    backgroundColor : 'white'
  },
});

module.exports = StatusBarBackground