import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

class Produto extends Component {
  render() {
    return (
      <View style={styles.item}>
        <Text style={styles.titulo}>{this.props.nome}</Text>
        <Text style={styles.texto}>Valor: R${this.props.valor}</Text>
        <Text style={styles.texto}>Quantidade: {this.props.quantidade}</Text>
        <Text style={styles.texto}>Marca: {this.props.marca}</Text>
        <Text style={styles.texto}>Ref: {this.props.referencia}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#c2c2c2",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  titulo: {
    fontSize: 32,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  texto: {
    color: "#FFFFFF",
    flex: 1,
  },
});

export default Produto;
