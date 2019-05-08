/**
 * 创建团购cell
 */

import React, { PureComponent } from 'react'
import {Text,View,StyleSheet,TouchableOpacity,Image,FlatList} from 'react-native';
import { Heading2, Heading3, Paragraph } from '../../widget/Text'
import { screen } from '../../common'
import  color  from '../../widget/color'


type Props = {
    info:Object,
    onPress:Function
}

type State = {

}


export default class GroupCell extends PureComponent<Props,State> {

  render() {

    let {info} = this.props

    return (
        <TouchableOpacity style={styles.container} onPress={() => this.props.onPress(info)}>
            <Image source={{uri:`${info.imgUrl}`}} style={styles.icon} />
            <View style={styles.rightContainer}>
                <Heading2>{info.title}</Heading2>
                <Paragraph numberOfLines={0} style={{ marginTop: 8 }}>{info.subTitle}</Paragraph>
                 <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                    <Heading2 style={styles.price}>{info.price}元</Heading2>
                 </View>

                </View>
        </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      padding: 10,
      borderBottomWidth: screen.onePixel,
      borderColor: color.border,
      backgroundColor: 'white',
    },
    icon: {
      width: 80,
      height: 80,
      borderRadius: 5,
    },
    rightContainer: {
      flex: 1,
      paddingLeft: 20,
      paddingRight: 10,
    },
    price: {
      color: color.primary
    }
  })
