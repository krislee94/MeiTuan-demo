import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, StatusBar, Image, TouchableOpacity, ScrollView, RefreshControl,ImageBackground } from 'react-native'

import { Heading2, Heading3, Paragraph } from '../../widget/Text'
import { screen, system } from '../../common'
import { color, DetailCell, NavigationItem, EmptyView } from '../../widget'

import RefreshListView, { RefreshState } from 'react-native-refresh-list-view'
import AboutHeader from './AboutHeader';
import AboutTag from './AboutTag';
import AboutFooter from './AboutFooter';

import mock from '../../mock';
import AboutItem from './AboutItem';

export default class AboutHuaTai extends PureComponent {

    constructor(props){
      super(...arguments);

      this.state = {
        isRefreshing:false,
      }
    }

    //设置导航样式

   static navigationOptions = () =>({
    header:(
        <Image style={styles.iconimg}  source={require('../../img/foundation-mi.png')}/>
    ),
    headerStyle: {
      
      elevation: 0,  //android让导航线消失
      borderBottomWidth: 0, //ios让dao
    },
  })

  requestFirstPage = ()=>{
    console.warn("下拉刷新操作")
  }
  requestNextPage = ()=>{
    console.warn("上拉加载操作")
  }

    renderHeader=()=>{
        return(
            <AboutHeader/>
        )
    }
    renderItem = (rowData)=>{
        return (
          <AboutItem 
            info={rowData.item}
          />
        )
        
    }
    renderFooter=()=>{
        return(
            <AboutFooter />
        )
    }
    render() {

        return (
            <View style={styles.con}>
            <View style={styles.headerView}></View>
                <RefreshListView
                    data={mock.huatai}
                    ListHeaderComponent={this.renderHeader}
                    ListFooterComponent={this.renderFooter}
                    renderItem={this.renderItem}
                    keyExtractor={(item,index)=>index.toString()}
                    onHeaderRefresh={this.requestFirstPage}
                    onFooterRefresh={this.requestNextPage}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    con:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    headerView:{
        position:'absolute',
        width:screen.width,
        height:screen.height/2,
        backgroundColor:color.gloden
    },
    iconimg:{
        width:screen.width,
        height:80
    }
})
