import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

class Footer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.texto}>{this.props.texto}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#606060",
    height: 46,
  },
  texto: {
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlignVertical: "center",
    textAlign: "center",
    flex: 1,
  },
});

export default Footer;
