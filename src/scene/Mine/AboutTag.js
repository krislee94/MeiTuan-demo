import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native'




type Props ={
    text:string,
}

export default class AboutTag extends PureComponent<Props> {
    render() {
        return (
     
          <View style={styles.leicon}><Text style={styles.text4}>{this.props.text}</Text></View>
          
        )
    }
}
const styles = StyleSheet.create({
    leicon:{
        width:45,
        height:16,
        borderRadius: 10,
        borderWidth:1,
        borderColor: '#f89d3b',
        justifyContent:'center',
        alignItems: 'center',
        marginTop:5,
        marginRight:5,
    },
    text4:{
        fontSize:9,
        color:'#f89d3b'
    }
})

