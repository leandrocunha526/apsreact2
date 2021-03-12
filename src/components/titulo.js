import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class Titulo extends Component {
  render() {
    return (
      <View>
        <Text style={style.titulo}>{this.props.titulo}</Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  titulo: {
    fontWeight: "60",
    fontSize: 25,
    color: "blue",
    padding: 15,
    fontWeight: "bold",
  },
});

export default Titulo;
