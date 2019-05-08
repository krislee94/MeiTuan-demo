import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, StatusBar, Image, TouchableOpacity, ScrollView, RefreshControl } from 'react-native'

import { Heading2, Heading3, Paragraph } from '../../widget/Text'
import { screen, system } from '../../common'
import { color, DetailCell, NavigationItem, EmptyView } from '../../widget'




export default class MineScene extends PureComponent {

  constructor(props){
      super(...arguments);


      this.state = {
        isRefreshing:false,
      }


  }

  static navigationOptions = () =>({
    headerRight: (
      <View style={{ flexDirection: 'row' }}>
        <NavigationItem
          icon={require('../../img/mine/icon_navigation_item_set_white.png')}
          onPress={() => {

          }}
        />
        <NavigationItem
          icon={require('../../img/mine/icon_navigation_item_message_white.png')}
          onPress={() => {

          }}
        />
      </View>
    ),
    headerStyle: {
      backgroundColor: color.primary,
      elevation: 0,  //android让导航线消失
      borderBottomWidth: 0, //ios让dao
    },
  })

  /**
   * 渲染头部
   */
  renderHeader=()=>{
    return(
      <View style={styles.header}> 
         <Image style={styles.avatar} source={require('../../img/mine/avatar.png')} />
        <View>
        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
            <Heading2 style={{ color: 'white' }}>素敌</Heading2>
            <Image style={{ marginLeft: 4,width:16,height:16 }} source={require('../../img/mine/beauty_technician_v15.png')} />
          </View>
          <Paragraph style={{ color: 'white', marginTop: 4 }}>个人信息 ></Paragraph>
        </View>
      </View>
    )
  }
  //获取数据源
  getDataList() {
    return (
      [
        [
          { title: '我的钱包', subtitle: '办信用卡', image: require('../../img/mine/icon_mine_wallet.png') },
          { title: '余额', subtitle: '￥95872385', image: require('../../img/mine/icon_mine_balance.png') },
          { title: '抵用券', subtitle: '63', image: require('../../img/mine/icon_mine_voucher.png') },
          { title: '会员卡', subtitle: '2', image: require('../../img/mine/icon_mine_membercard.png') }
        ],
        [
          { title: '好友去哪', image: require('../../img/mine/icon_mine_friends.png') },
          { title: '我的评价', image: require('../../img/mine/icon_mine_comment.png') },
          { title: '我的收藏', image: require('../../img/mine/icon_mine_collection.png') },
          { title: '会员中心', subtitle: 'v15', image: require('../../img/mine/icon_mine_membercenter.png') },
          { title: '积分商城', subtitle: '好礼已上线', image: require('../../img/mine/icon_mine_member.png') }
        ],
        [
          { title: '客服中心', image: require('../../img/mine/icon_mine_customerService.png') },
          { title: '关于美团', subtitle: '我要合作', image: require('../../img/mine/icon_mine_aboutmeituan.png') }
        ]
      ]
    )
  }

  //处理数据源
  detailData = ()=>{
    //拿到数据源
    let dataSource = this.getDataList();
    //定义一个cells数组
    let cells = []
    for(let i = 0;i<dataSource.length;i++){
      let subArray = dataSource[i];
      for(let j=0;j<subArray.length;j++){
        let data = subArray[j];
        let cell = (
          <DetailCell
          image={data.image} 
          title={data.title} 
          subtitle={data.subtitle} 
          key={data.title}
          />
        )
        cells.push(cell)
      }
      cells.push(<EmptyView key={i} />)
    }
    return cells;
  }

  onHeaderRefresh = ()=>{
    this.setState({ isRefreshing: true })

    setTimeout(() => {
      this.setState({ isRefreshing: false })
    }, 2000)
  }

  render() {
    return (
      <View style = {styles.container}>
          <View style={styles.headerView}></View>
          <ScrollView
            refreshControl = {
              <RefreshControl 
                refreshing={this.state.isRefreshing}
                onRefresh={() => this.onHeaderRefresh()}
                tintColor='gray'
              />
            }
          >
            {this.renderHeader()}
            <EmptyView /> 
            {this.detailData()}
          </ScrollView>

      </View>
    )
  }
}


const styles = StyleSheet.create({
  icon: {
    width: 27,
    height: 27,
  },
  header: {
    backgroundColor: color.primary,
    paddingBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#51D3C6'
  },
  emp:{
    width:screen.width,
    height:14,
    backgroundColor:'#f5f5f5'
  },
  headerView:{
    position:'absolute',
    width:screen.width,
    height:screen.height/2,
    backgroundColor: color.primary
  }
})

