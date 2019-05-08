import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, StatusBar, Image, ListView, TouchableOpacity, ScrollView, RefreshControl } from 'react-native'

import { screen, system } from '../../common'

import { Heading2, Heading3, Paragraph } from '../../widget/Text'
type Props = {
    onPress:Function,
    icon:any,
    title:string,

}

type State = {

}

export default class OrderMenuItem extends PureComponent<Props,State> {
  render() {
    return (
        <TouchableOpacity style={styles.container}
        onPress={this.props.onPress}>

            <Image source={this.props.icon} resizeMode='contain' style={styles.icon} />
            <Heading3>
             {this.props.title}
            </Heading3>

        </TouchableOpacity>
    )
  }
}


const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      width: screen.width / 4,
      height: screen.width / 5,
    },
    icon: {
      width: 30,
      height: 30,
      margin: 5,
    }
  })
