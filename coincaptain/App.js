import React from 'react';
import { AppRegistry, Platform, View, StatusBar, StyleSheet } from 'react-native';

import { AppLoading } from 'expo';

import * as firebase from "firebase";

import TabNavigation from './src/navigation/TabNavigation/TabNavigation';
import StackNavigation from './src/navigation/StackNavigation/StackNavigation';

import StatusBarBackground from './src/subcomponents/StatusBarBackground/StatusBarBackground';

export default class App extends React.Component {
  state = {
    loggedIn : false,
    isReady : false
  };

  componentWillMount () {
    firebase.auth().onAuthStateChanged( user =>
      this.setState({loggedIn: !!user})
    );
  }

  render() {
    if (this.state.isReady)
      return (
        <View style = { styles.container }>
          { Platform.OS === 'ios' && 
            <StatusBarBackground style = { 
              {
                backgroundColor : '#3498db'
              }
            } />
            /* <StatusBar 
              translucent
              backgroundColor = { 'blue' }
              barStyle = 'default'
              hidden = { false }
            />  */
          }
          { this.state.loggedIn ? <TabNavigation /> : <StackNavigation /> }
        </View>
      );
    else
      return (
      <AppLoading
        startAsync = { () => {} }
        onFinish = { () => { 
          this.setState (
            {
              isReady : true
            }
          )}
        }
        onError = {
          console.warn
        }
        
      />
      )
  }
}

const styles = StyleSheet.create ({
  container : {
    flex : 1
  },
});

AppRegistry.registerComponent ('App', () => App);