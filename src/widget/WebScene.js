import React, { PureComponent } from 'react';

import { View, Text, StyleSheet, WebView, InteractionManager } from 'react-native';

  type Props = {
    navigation: any,
 }
  type State = {
    source: Object,
 }

export default class WebScene extends PureComponent<Props,State> {


  render() {
    return (
      <View>
          <Text>111111Web</Text>
      </View>
    )
  }
}

