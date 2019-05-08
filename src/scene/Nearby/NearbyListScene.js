import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import NearbyHeaderView from './NearbyHeaderView';
import RefreshListView, { RefreshState } from 'react-native-refresh-list-view'
// import { color, Button, NavigationItem } from '../../widget'
import color from '../../widget/color';
import { Heading2, Heading3, Paragraph } from '../../widget/Text'
import { screen, system } from '../../common'
import GroupCell from '../Home/GroupCell'

import api from '../../mock'






type Props = {

}
type State = {
    typeIndex:number,
}


export default class NearbyListScene extends PureComponent<Props,State> {

  constructor(props){
      super(...arguments);

      this.state = {
        typeIndex:0,
      }
      
  }

  /**
   * QA:
   * 如果分离出去的组件尽量不要用this.props.xxx，容易有问题。最好的方式是通过render主函数中去传递
   *
   */
  renderHeader = (types)=>{
      return (
        <NearbyHeaderView
        titles={types}
        selectedIndex={this.state.typeIndex}
        onSelected={(index)=>{
        if(index != this.state.typeIndex){
          //更改typeIndex
          this.setState({
              typeIndex:index
          })
          //请求数据，刷新数据 xxx
      }
    }}
    />
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
    let {types} = this.props
    return (
        <RefreshListView 
            ListHeaderComponent = {this.renderHeader(types)}
            data={api.goodsInfo}
            renderItem={this.renderItem}
            keyExtractor={(item,index)=>index.toString()}
            onHeaderRefresh={this.requestFirstPage}
            onFooterRefresh={this.requestNextPage}
        />
    )
  }
}
