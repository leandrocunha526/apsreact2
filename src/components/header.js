import React, { Component } from "react";
import { StyleSheet, View} from "react-native";
import Titulo from "../components/titulo";

class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.header}></View>
      <Titulo titulo="Lista de produtos">{this.props.titulo}</Titulo>
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
  height: 46,
  width: "100%",
}
});

export default Header;