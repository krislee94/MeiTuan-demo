import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, StatusBar, Image, TouchableOpacity, ScrollView, RefreshControl,ImageBackground } from 'react-native'
import { screen, system } from '../../common';
import AboutTag from './AboutTag';


type Props = {

    info:Object,

}

type State={

}



export default class AboutItem extends PureComponent<Props,State> {



   render() {

   let {info} = this.props;

      return (
          <View style={styles.contain}>
             <View style={styles.innerbox}>
                {/*上下结构，上半部分 */}
                <View style={styles.innerTop}>
                    {/*左边 */}
                    <View style={styles.innerTopLeft}>
                        <Text style={styles.text1}>{info.number}</Text>
                        <Text style={styles.text2}>{info.subtitle}</Text>
                    </View>
                    {/*右边 */}
                    <View style={styles.innerTopRight}>
                        <Text style={styles.text3}>{info.title}</Text>
                        <View style={styles.innerTopRightBottom}>
                            <AboutTag text="低风险"/>
                            <AboutTag text="003991"/>
                            <AboutTag text="1元起投"/>
                        </View>
                    </View>
                </View>
                {/* 下半部分*/}
                <View style={styles.innerBottom}>
                <View style={styles.fle}>
                    <Text style={styles.text5}>理由</Text>
                    <Text style={styles.text6}>{info.reason}</Text>
                </View>
                    <Image style={styles.arrow} source={require('../../img/public/cell_arrow.png')} />
                </View>
             </View>
          </View>
      )
    }
}


const styles = StyleSheet.create({

    contain:{
        width:screen.width,
        height:138,
        backgroundColor:'#fff',
        paddingLeft: 14,
        paddingRight: 14,
    },
    innerbox:{
        width:screen.width-28,
        height:138,
        borderBottomWidth:1,
        borderBottomColor: '#efefef',
        flexDirection:'column',
    },
    innerTop:{
        width:screen.width-28,
        height:96,
        flexDirection:'row'
    },
    innerBottom:{
        width:screen.width-28,
        height:42,
        flexDirection: 'row',
        justifyContent:'space-around'

    },
    innerTopLeft:{
        width:138,
        height:96,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',

    },
    innerTopRight:{
        width:screen.width-138-28,
        height:96,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    innerTopRightBottom:{
        flexDirection: 'row',
        marginTop: 10,
        // alignItems: 'center',
        // justifyContent:'flex-start'
    },
    leicon:{
        width:45,
        height:16,
        borderRadius: 10,
        borderWidth:1,
        borderColor: '#f89d3b',
        justifyContent:'center',
        alignItems: 'center',
        marginTop:5,
    },
    text1:{
        fontSize: 24,
        color:'#ed5742',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    text2:{
        fontSize:12,
        color:'#999',
        marginTop: 10,
    },
    text3:{
        fontSize:17,
        fontWeight:"400",
    },
    text4:{
        fontSize:9,
        color:'#f89d3b'
    },
    text5:{
        fontSize:12,
        fontWeight:"500",
        color:'#ffae75',
        marginRight: 12,
    },
    text6:{
        fontSize:12,
        color:'#666'
    },
    arrow: {
      width: 6,
      height: 8,
      marginTop:3,
    },
    fle:{
        flexDirection: 'row',
    }

})

