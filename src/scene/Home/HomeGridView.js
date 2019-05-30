import React, { PureComponent } from 'react'
import color from '../../widget/color';
import HomeGridItem from './HomeGridItem';
import { View, Text, StyleSheet } from 'react-native'
import {screen,system} from '../../common'



type Props = {
    menuInfo:Array<Object>,
    menuonPress:Function,
}






export default class HomeGridView extends PureComponent<Props> {

  static defaultProps = {
    menuInfo: []
  }

  render() {

    return (
      <View style={styles.container}>
        {
           this.props.menuInfo.map((info,index)=>(
            <HomeGridItem 
              info={info}
              key={index}
              onPress={()=>{
                this.props.menuonPress(index)}
              }
            />
          ))
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      borderTopWidth: screen.onePixel,
      borderLeftWidth: screen.onePixel,
      borderColor: color.border
    },
  })
