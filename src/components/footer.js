import React, { Component } from "react";
import { StyleSheet, View, Text} from "react-native";

class Footer extends Component {
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.texto}>Products Bela Vista - 2021</Text>
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
    height: "10em",
    display: "flex",
    alignItems: "center",
    justifyContent: "center" 
}

});

export default Footer;