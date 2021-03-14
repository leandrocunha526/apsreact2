import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#3d8af7",
    height: 50,
    width: "100%",
  },
});

export default Header;
