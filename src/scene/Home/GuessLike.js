import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { Heading2, Heading3, Paragraph } from '../../widget/Text'
import {screen} from '../../common'
import color from '../../widget/color'

type Props = {
    title :string
}


export default class GuessLike extends PureComponent<Props> {


  render() {
    return (
        <View style={styles.container}>
        <Heading3>猜你喜欢</Heading3>
      </View>
    )
  }
}


const styles = StyleSheet.create({
    container:{
        height: 35,
        justifyContent: 'center',
        borderWidth: screen.onePixel,
        borderColor: color.border,
        paddingVertical: 8,
        paddingLeft: 20,
        backgroundColor: 'white'
    },
    text:{
        color:'#333',
        fontSize:16
    }
})
