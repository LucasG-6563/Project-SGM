import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Lista from './control/componentes.js';
  
/**
 * AINDA EM DESENVOLVIMENTO
 * Obs: peguei algumas linhas de comando de userScreen.js
 * @returns Retorna a tela de notas
 */
function NotaScreen(){
return(
  <View style={styles.container}>
      {/* O ideal seria criar um componente/função que monta certinho as listas. Assim mantém um padrão.
      Obs: Usar FlatList??*/}
      <Lista />
      <StatusBar style="auto" />
    </View>
)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pages: {
    position: 'absolute',
    bottom: 0,

  }

});

export default NotaScreen;