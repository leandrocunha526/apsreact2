import React, { Component } from "react";
import { StyleSheet, FlatList, SafeAreaView, ScrollView } from "react-native";
import Produto from "./src/components/produto";
import Header from "./src/components/header";
import Footer from "./src/components/footer";
import Titulo from "./src/components/titulo";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [
        {
          id: 1,
          nome: "Arroz",
          valor: "20,00",
          quantidade: 12,
          marca: "Vasconcelos",
          referencia: "001",
        },
        {
          id: 2,
          nome: "Feijão",
          valor: "10,00",
          quantidade: 10,
          marca: "Vasconcelos",
          referencia: "002",
        },
        {
          id: 3,
          nome: "Detergente",
          valor: "1,99",
          quantidade: 100,
          marca: "Ypê",
          referencia: "405",
        },
        {
          id: 4,
          nome: "Café",
          valor: "20,00",
          quantidade: 5,
          marca: "Vasconcelos",
          referencia: "401",
        },
        {
          id: 5,
          nome: "Algodão",
          valor: "8,00",
          quantidade: 3,
          marca: "Algodão do mato",
          referencia: "015",
        },
        {
          id: 6,
          nome: "Refrigerante",
          valor: "20,00",
          quantidade: 5,
          marca: "Coca cola",
          referencia: "106",
        },
      ],
    };
  }

  render() {
    return (
      <SafeAreaView styles={styles.container}>
        <ScrollView style={styles.scrollView}>
        <Header/>
        <Titulo titulo="Lista de produtos">{this.props.titulo}</Titulo>
        <FlatList
          data={this.state.feed}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Produto
              nome={item.nome}
              valor={item.valor}
              quantidade={item.quantidade}
              marca={item.marca}
              referencia={item.referencia}
            />
          )}
        />
        <Footer/>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: 'white',
  },
});

export default App;
