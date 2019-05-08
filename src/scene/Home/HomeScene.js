import React, { Component } from 'react';
import {Text,View,StyleSheet,TouchableOpacity,Image,FlatList} from 'react-native';
import color from '../../widget/color'
import screen from '../../common/screen'
import system from '../../common/system'

import { Heading2, Heading3, Paragraph } from '../../widget/Text'

import NavigationItem from '../../widget/NavigationItem'

import HomeMenuView from './HomeMenuView';
import HomeGridView from './HomeGridView';
import GuessLike from './GuessLike'
import GroupCell from './GroupCell'

import api from '../../mock';

export default class HomeScene extends Component {

  constructor(props){
      super(...arguments);
      this.state = {
        discount:[]
      }

      console.log(api);
  }

  static navigationOptions = ()=>({
    headerStyle:{
      backgroundColor:color.primary
    },
    headerTitle:(
        <TouchableOpacity style={styles.searchBar}>
          <Image source={require('../../img/home/search_icon.png')} style={styles.searchIcon} />
        <Paragraph>搜索</Paragraph>
       </TouchableOpacity>
    ),
    headerRight: (
      <NavigationItem
        icon={require('../../img/mine/icon_navigation_item_message_white.png')}
        onPress={() => {

        }}
      />
    ),
    headerLeft: (
      <NavigationItem
        title='南京'
        titleStyle={{ color: 'white' }}
        onPress={() => {

        }}
      />
    )
  })

  onGridpress=(index)=>{
    console.log(index);
  }


  renderItem = (rowData)=>{
    return (
      <GroupCell 
        info={rowData.item}
        onPress={this.onCellSelected}
      />
    )
  }

  onCellSelected = ()=>{
    console.log("1111")
  }


  render() {
    return (
      <View style = {styles.container}>
          

          <FlatList 
              ListHeaderComponent = {()=>(
                <View>
                  <HomeMenuView 
                     menuInfos = {api.menuInfo}
                     onMenuSelected = {(i)=>{
                       console.log(i);
                     }}
                 />

                  <View  style={styles.empstyle} />
                  
                  <HomeGridView  menuInfo={api.discount.data}  menuonPress={()=>{this.onGridpress(index)}}/>

                  <View  style={styles.empstyle} />
                  
                  <GuessLike title='猜你喜欢'/>
                </View>
              )}

              data={api.goodsInfo}
              
              renderItem={this.renderItem}

              keyExtractor={(item,index)=>item.title}

          
          />

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.paper
  },
  recommendHeader: {
    height: 35,
    justifyContent: 'center',
    borderWidth: screen.onePixel,
    borderColor: color.border,
    paddingVertical: 8,
    paddingLeft: 20,
    backgroundColor: 'white'
  },
  searchBar: {
    width: screen.width * 0.7,
    height: 30,
    borderRadius: 19,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    alignSelf: 'center',
  },
  searchIcon: {
    width: 20,
    height: 20,
    margin: 5,
  },
  empstyle:{
    width:screen.width,
    height:14,
    backgroundColor:color.paper
  },
  paper1:{
    width:screen.width,
    height:300,
    backgroundColor:'white'
  }
})

