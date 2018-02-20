import React from 'react';
import { TabNavigator } from 'react-navigation';
import { Text, View, Image, StyleSheet } from 'react-native';

import { Icon } from 'native-base';

import Login from '../../components/Login/Login';
import Register from '../../components/Register/Register';
import Profile from '../../components/Profile/Profile';
import CoinPrices from '../../components/CoinPrices/CoinPrices';
import Settings from '../../components/Settings/Settings';

import TabIcon from '../../subcomponents/TabIcon/TabIcon';

const TabNavigation = TabNavigator ({
  Profile : {
    screen : Profile,
    navigationOptions : {
      tabBarLabel : 'Profile',
      tabBarIcon  : ({ tintColor }) => (
        <Image 
          source = { require ('../../../assets/profile.imageset/user_male.png') }
          style  = { [styles.icon, { tintColor : tintColor }]}
        />
      )
    },
  },
  CoinPrices : {
    screen : CoinPrices,
    navigationOptions : {
      tabBarLabel : 'Coin Prices',
      tabBarIcon : ({
        focused, tintColor
      }) => (
        <TabIcon
          iconDefault = "ios-settings"
          iconFocused = "ios-settings"
          focused = { focused }
          tintColor = { tintColor }
          type = { "IoniconsIcon" }
          style  = { [styles.icon, { tintColor : tintColor } ] }
        />
      )
    }
  },
  Settings : {
    screen : Settings,
    navigationOptions : {
      tabBarLabel : 'Settings',
      tabBarIcon : ({
        focused, tintColor
      }) => (
        <TabIcon
          iconDefault = "ios-settings-outline"
          iconFocused = "ios-settings"
          focused = { focused }
          tintColor = { tintColor }
          type = { "IoniconsIcon" }
          style  = { [styles.icon, { tintColor : tintColor } ] }
        />
      )
    }
  },
}, {
  tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor : '#e91e63',
    inactiveTintColor :  'grey',
    activeBackgroundColor : 'white',
    inactiveBackgroundColor : 'yellow'
  },
});

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});

export default TabNavigation;