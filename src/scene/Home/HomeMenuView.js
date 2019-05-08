/**
 * 展示menu代码
 */

import React, { PureComponent } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import PageControl from "react-native-page-control";  //引入三方组建库 (用于分页) 

import { screen, system } from "../../common";
import color from "../../widget/color";
import HomeMenuItem from "./HomeMenuItem";

type Props = {
  menuInfos: Array<Object>,
  onMenuSelected: Function
};
type State = {
  currentPage: number
};



export default class HomeMenuView extends PureComponent<Props, State> {
  constructor(props) {
    super(...arguments);

    this.state = {
      currentPage: 0 //默认当前页面的currentPage为0
    };
  }

  //滚动监听事件
  onScroll(e){
      let x = e.nativeEvent.contentOffset.x  //计算当前x的偏移量
      //当偏移量发生改变超过一个屏幕时候，就要更改currentPage
      let currentPage = Math.round(x / screen.width)
      //currentPage发生改变的时候才去调用this.setData方法
      if(this.state.currentPage != currentPage){
        this.setState({
            currentPage: currentPage
          })
      }
  }

  //分页点击事件
  onpage_press(e){
      console.log(e);
      //判断用户点击的页码，而改变currentPage。
      if(e != this.state.currentPage){
        this.setState({
            currentPage:e
        })
        //并且改变scrollview的偏移量
        this.myScrollView.scrollTo({x: e*screen.width+1, animated: true})
      }
      
  }

  render() {
    let { menuInfos, onMenuSelected } = this.props;

    //解析menuInfos的值、放入HomeMenuItem
    let menuItems = menuInfos.map((infos, index) => (
      <HomeMenuItem
        key={index}
        title={infos.title}
        icon={infos.icon}
        onPress={() => {
          onMenuSelected && onMenuSelected(i);
        }}
      />
    ));
    //用户存放渲染的view的数组
    let menuViews = [];
    //计算page
    let pageCount = Math.ceil(menuItems.length / 10);

    for (let i = 0; i < pageCount; i++) {
      let items = menuItems.slice(i * 10, i * 10 + 10); //截取10个数据

      let menuView = (
        <View style={styles.itemsView} key={i}>
          {items}
        </View>
      );

      menuViews.push(menuView);
    }

    return (
        <View style={styles.container}>
            <ScrollView

                ref={(view) => { this.myScrollView = view; }}
                horizontal  //ScrollView水平展示
                showsHorizontalScrollIndicator={false} //不展示默认滚动条
                pagingEnabled
                onScroll={(e) => this.onScroll(e)}
            >
                <View style={styles.menuContainer}>
                   {menuViews}
                </View>
            </ScrollView>

            <PageControl
              style={styles.pageControl} 
              numberOfPages={pageCount}
              currentPage={this.state.currentPage}
              pageIndicatorTintColor='gray'
              currentPageIndicatorTintColor={color.primary}
              onPageIndicatorPress={(e)=>{this.onpage_press(e)}}
            /> 

           
        </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
    },
    menuContainer: {
      flexDirection: 'row',
    },
    itemsView: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: screen.width,
    },
    pageControl: {
      margin: 10,
    },

  })
