import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

class Produto extends Component {
  render() {
    return (
      <View style={styles.produto}>
        <Text style={styles.titulo}>{this.props.nome}</Text>
        <View style={styles.data}>
          <View style={{ marginRight: 15 }}>
            <Text style={styles.textoProduto}>Valor: R${this.props.valor}</Text>
            <Text style={styles.textoProduto}>
              Qtdade: {this.props.quantidade}
            </Text>
            <View style={styles.desconto}>
              <Text style={styles.textoDesconto}>
                {this.props.desconto}% de desconto
              </Text>
            </View>
          </View>
          <View>
            <Text style={styles.textoProduto}>Marca: {this.props.marca}</Text>
            <Text style={styles.textoProduto}>
              Ref: {this.props.referencia}
            </Text>
            <View style={styles.promo}>
              <Text style={styles.TextoPromo}>{this.props.promo}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  produto: {
    backgroundColor: "#C2C2C2",
    padding: 15,
    marginVertical: 8,
    margin: 20,
  },
  titulo: {
    color: "white",
    fontSize: 26,
    fontWeight: "bold",
  },
  data: {
    flex: 1,
    flexDirection: "row",
  },
  textoProduto: {
    color: "white",
    fontWeight: "bold",
    margin: 3,
  },
  desconto: {
    backgroundColor: "#72BB53",
    maxWidth: 120,
    padding: 5,
  },
  textoDesconto: {
    color: "white",
    textAlign: "center",
  },
  promo: {
    backgroundColor: "#FF8351",
    maxWidth: 120,
    padding: 5,
  },
  TextoPromo: {
    color: "white",
    textAlign: "center",
  },
});

export default Produto;
