import React, { PureComponent } from "react";

import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import { Heading3 } from "../../widget/Text";
import { screen, system } from "../../common";

type Props = {
  title: string,
  icon: any,
  onPress: Function
};

export default class HomeMenuItem extends PureComponent<Props> {
  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
        <Image
          source={this.props.icon}
          resizeMode="contain"
          style={styles.icon}
        />
        <Heading3>{this.props.title}</Heading3>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: screen.width / 5,
    height: screen.width / 5
  },
  icon: {
    width: screen.width / 9,
    height: screen.width / 9,
    margin: 5
  }
});
