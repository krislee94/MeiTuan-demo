import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ViewPropTypes } from 'react-native'
import { Heading2, Heading3, Paragraph } from './Text'

import Separator from './Separator'
import { screen, system } from '../common'



type Props = {
    image?:any,
    title:string,
    subtitle?:string,
    onPress:Function,
    style?: ViewPropTypes.style,
}

type State = {

}


export default class DetailCell extends PureComponent<Props,State> {
  
    render() {

        let {image ,title,subtitle,style} = this.props
        let elementIcon = image && (
            <Image  style={styles.icon} source={image}/>
        )
        return (
            <View style={styles.container}>
              <TouchableOpacity onPress={this.props.onPress}>
                <View style={[styles.content, this.props.style]}>
                  {elementIcon}
                  <Heading3>{this.props.title}</Heading3>
                  <View style={{ flex: 1, backgroundColor: 'blue' }} />
                  <Paragraph style={{ color: '#999999' }}>{this.props.subtitle}</Paragraph>
                  <Image style={styles.arrow} source={require('../img/public/cell_arrow.png')} />
                </View>
      
                <Separator />
              </TouchableOpacity>
            </View>
          )
  }
}


const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
    },
    content: {
      height: 44,
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: 15,
      paddingRight: 10,
    },
    icon: {
      width: 25,
      height: 25,
      marginRight: 10,
    },
    subtitleContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    arrow: {
      width: 14,
      height: 14,
      marginLeft: 5,
    }
  })
