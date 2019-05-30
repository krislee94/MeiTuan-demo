import React, { PureComponent } from 'react'
import {View,Text,StyleSheet,StatusBar} from 'react-native'
import { createStackNavigator, createBottomTabNavigator, createAppContainer, TabBarBottom } from 'react-navigation'


import HomeScene from './scene/Home/HomeScene'
import OrderScene from './scene/Order/OrderScene'
import NearbyScene from './scene/Nearby/NearbyScene'
import MineScene from './scene/Mine/MineScene'

import color from './widget/color';
import WebScene from './widget/WebScene';

import TabBarItem from './widget/TabBarItem';
import AboutHuaTai from './scene/Mine/AboutHuaTai'

export default class RootScene extends PureComponent {

  constructor(props){
    super(...arguments);
    
    this.state = {

    }

    StatusBar.setBarStyle('light-content')
  }
 
  render() {
    return (
     <AppContainer />
    )
  }
  
}

/**
 * 创建底部导航栏
 */
  const Tab = createBottomTabNavigator(
      {
        Home: {
            screen: createStackNavigator({ Home: HomeScene }),
            navigationOptions: ({ navigation }) => ({
              tabBarLabel: '团购',
              tabBarIcon: ({ focused, tintColor }) => (
                <TabBarItem
                  tintColor={tintColor}
                  focused={focused}
                  normalImage={require('./img/tabbar/tabbar_homepage.png')}
                  selectedImage={require('./img/tabbar/tabbar_homepage_selected.png')}
                />
              )
            }),
          },
          Nearby: {
            screen: createStackNavigator({ Nearby: NearbyScene }),
            navigationOptions: ({ navigation }) => ({
              tabBarLabel: '附近',
              tabBarIcon: ({ focused, tintColor }) => (
                <TabBarItem
                  tintColor={tintColor}
                  focused={focused}
                  normalImage={require('./img/tabbar/tabbar_merchant.png')}
                  selectedImage={require('./img/tabbar/tabbar_merchant_selected.png')}
                />
              )
            }),
          },
      
          Order: {
            screen: createStackNavigator({ Order: OrderScene }),
            navigationOptions: ({ navigation }) => ({
              tabBarLabel: '订单',
              tabBarIcon: ({ focused, tintColor }) => (
                <TabBarItem
                  tintColor={tintColor}
                  focused={focused}
                  normalImage={require('./img/tabbar/tabbar_order.png')}
                  selectedImage={require('./img/tabbar/tabbar_order_selected.png')}
                />
              )
            }),
          },
      
          Mine: {
            screen: createStackNavigator({ Mine: MineScene }),
            navigationOptions: ({ navigation }) => ({
              tabBarLabel: '我的',
              tabBarIcon: ({ focused, tintColor }) => (
                <TabBarItem
                  tintColor={tintColor}
                  focused={focused}
                  normalImage={require('./img/tabbar/tabbar_mine.png')}
                  selectedImage={require('./img/tabbar/tabbar_mine_selected.png')}
                />
              )
            }),
          },
        },
        {
          tabBarComponent: TabBarBottom,
          tabBarPosition: 'bottom',
          lazy: true,
          animationEnabled: false,
          swipeEnabled: false,
          tabBarOptions: {
            activeTintColor: color.primary,
            inactiveTintColor: color.gray,
            style: { backgroundColor: '#ffffff' },
          },
        }
  )
  /**
   * 设置导航头部为null
   */
  Tab.navigationOptions = {
    header: null,
  };
  
  const AppNavigator = createStackNavigator({
    Tab:{screen:Tab},
    WebScene:{screen: WebScene},
    About:{screen:AboutHuaTai}
  },{
    defaultNavigationOptions: {
      headerBackTitle: null,
      headerTintColor: '#333333',
      showIcon: true,
    },
  })

  const AppContainer = createAppContainer(AppNavigator);




