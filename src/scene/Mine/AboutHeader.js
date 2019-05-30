import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ViewPropTypes } from 'react-native'
import { screen} from '../../common'
import { color } from '../../widget'


type Props = {
    title:string,
    subtitle:string,
}

type State={

}
export default class AboutHeader extends PureComponent<Props,State> {

    
    render() {

        let {title,subtitle} = this.props;
        return (
            <View style={styles.contain}>
                <Image source={require('../../img/foundation.png')} style={styles.img}></Image>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    img:{
        width:screen.width,
        height:102,
    }
})
