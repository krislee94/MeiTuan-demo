import React, { Component } from 'react';
import {Text,View,StyleSheet,TouchableOpacity,Image} from 'react-native';
import { Heading2, Heading3, Paragraph } from '../../widget/Text'
import color from '../../widget/color';
import { screen, system } from '../../common'
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view'

import NearbyListScene from './NearbyListScene'

export default class NearbyScene extends Component {

  constructor(props){
      super(...arguments);
      this.state = {

      }


  }

  //定义头部导航栏
  static navigationOptions = () =>(
    {
      headerLeft:(
        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 10 }}>
          <Image style={{ width: 13, height: 16 }} source={require('../../img/public/icon_food_merchant_address.png')} />
          <Text style={{ fontSize: 15, color: '#333333' }}> 江苏 南京</Text>
        </TouchableOpacity>
      ),
      headerRight: (
        <TouchableOpacity style={styles.searchBar}>
          <Image source={require('../../img/home/search_icon.png')} style={styles.searchIcon} />
          <Paragraph>找附近的吃喝玩乐</Paragraph>
        </TouchableOpacity>
      ),
      headerStyle: { backgroundColor: 'white' },
    }
  )






  render() {
    let titles = ['享美食','住酒店','爱玩乐','全部']
    let types = [
      ['热门', '面包甜点', '小吃快餐', '川菜', '日本料理', '韩国料理', '台湾菜', '东北菜'],
      ['热门', '商务出行', '公寓民宿', '情侣专享', '高星特惠'],
      ['热门', 'KTV', '足疗按摩', '洗浴汗蒸', '电影院', '美发', '美甲'],
      []
    ]



    return (
     <ScrollableTabView
      style={styles.container}
      tabBarBackgroundColor='white'
      tabBarActiveTextColor='#FE566D'
      tabBarInactiveTextColor='#555555'
      tabBarTextStyle={styles.tabBarText}
      tabBarUnderlineStyle={styles.tabBarUnderline}
     >
       {
        titles.map((item,i)=>(

          <NearbyListScene 
            tabLabel={titles[i]}
            key={i}
            types={types[i]}
            navigation={this.props.navigation} 
          />

        )) 
       }
     </ScrollableTabView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.paper
  },
  searchBar: {
    width: screen.width * 0.65,
    height: 30,
    borderRadius: 19,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eeeeee',
    alignSelf: 'center',
    marginRight: 20,
  },
  searchIcon: {
    width: 20,
    height: 20,
    margin: 5,
  },
  tabBarText: {
    fontSize: 14,
    marginTop: 13,
  },
  tabBarUnderline: {
    backgroundColor: '#FE566D'
  },
})

