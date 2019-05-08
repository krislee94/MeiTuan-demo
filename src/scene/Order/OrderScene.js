import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, Image, ListView, TouchableOpacity, ScrollView, RefreshControl } from 'react-native'
import RefreshListView, { RefreshState } from 'react-native-refresh-list-view'
import { Heading2, Heading3, Paragraph } from '../../widget/Text'
import { screen, system } from '../../common'
import mock from '../../mock'
import DetailCell from '../../widget/DetailCell';
import OrderMenuItem from './OrderMenuItem';
import color from '../../widget/color';
import GroupCell from '../Home/GroupCell'

export default class OrderScene extends Component {

  static navigationOptions = ({ navigation }: any) => ({
    title: '订单',
    headerStyle: { backgroundColor: 'white' },
  })



  constructor(props){
      super(...arguments);


      this.state = {

      }


  }


  renderHeader = ()=>{

    return (
      <View style = {styles.container}>
      <DetailCell
        title = "我的订单"
        subtitle="全部订单"
      />

      <View style={styles.itemContainer}>
        <OrderMenuItem title='待付款' icon={require('../../img/order/order_tab_need_pay.png')} />
        <OrderMenuItem title='待使用' icon={require('../../img/order/order_tab_need_use.png')} />
        <OrderMenuItem title='待评价' icon={require('../../img/order/order_tab_need_review.png')} />
        <OrderMenuItem title='退款/售后' icon={require('../../img/order/order_tab_needoffer_aftersale.png')} />
      </View>
      <View style={styles.emp}></View>
      <DetailCell
        title='我的收藏'
        subtitle="查看全部"
      />

    </View>
    )
  }
    
  renderItem = (rowData)=>{
    return (
      <GroupCell 
        info={rowData.item}
        onPress={this.onCellSelected}
      />
    )
  }
  requestFirstPage = ()=>{
    console.warn("下拉刷新操作")
  }
  requestNextPage = ()=>{
    console.warn("上拉加载操作")
  }


  render() {
    return (
      <View style={styles.container}>

        <RefreshListView
          data={mock.goodsInfo}
          ListHeaderComponent={this.renderHeader}
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
    container:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    itemContainer: {
      flexDirection: 'row',
    },
    emp:{
      width:screen.width,
      height:14,
      backgroundColor:'#f5f5f5'
    }
})

