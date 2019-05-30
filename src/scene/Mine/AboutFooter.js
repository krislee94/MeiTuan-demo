import React from 'react';
import { View, Text, StyleSheet} from 'react-native'
import { screen, system } from '../../common'


export default function AboutFooter() {
    return (
        <View style={styles.contain}>
            <View style={styles.icon}><Text style={styles.text3}>李</Text></View>
            <Text style={styles.text1}>免责声明: 收益率数据仅供参考，过往业绩不预视未来表现，产品排序不分先后，不构成投资建议。投资者根据此操作，后果自负。</Text>
            <Text style={styles.text2}>市场有风险，投资需谨慎</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    contain:{
        width:screen.width,
        height:135,
        backgroundColor: '#f7f6f8',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        paddingLeft: 20,
        paddingRight: 20,
        flexWrap: 'wrap',
    },
    text1:{
        fontSize: 10,
        color:'#c7c7c8',
    },
    text2:{
        fontSize: 10,
        color:'#c7c7c8',
        marginTop: 30,
    },
    text3:{
        fontSize:12,
        color:'#fff'
    },
    icon:{
        width:40,
        height:40,
        borderRadius: 50,
        backgroundColor:'#ff9828',
        justifyContent: 'center',
        alignItems: 'center',
        position:'absolute',
        right:2,
        bottom:44,
        shadowColor: '#000',
        shadowOffset: { width: 4, height: 4 }, 
        shadowOpacity: 0.8, 
        shadowRadius: 6, 
        elevation: 10 
    }
})
