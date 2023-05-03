import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

/**
 * 
 * @returns retorna a tela de dados do usuário
 */
function UserScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        {/* <Button title='O "title" não pode ficar vazio' color='green'/> */}
        <View style={{ borderColor: 'black', borderWidth: 2, alignItems: 'center' }}>
          <Image source={require('../assets/padrao.jpg')} style={{ width: 250, height: 250 }} />
          <Text style={{ fontSize: 16 }}>Gustavo Pereira Torres</Text>
        </View>
        <View style={{ alignItems: 'center', justifyContent: 'center', margin: 10 }}>
          <Text style={styles.label}>PP: {<Text style={styles.texto}>67%</Text>} - PR: {
            <Text style={styles.texto}>7.5</Text>
          } - MAIOR PR: {<Text style={styles.texto}>0.00</Text>}</Text>
          <Text style={styles.label}>Cursado: {
            <Text style={styles.texto}>5</Text>
          } - Máximo: {
              <Text style={styles.texto}>6</Text>
            } - Faltam: {<Text style={styles.texto}>1</Text>}</Text>
          <Text style={styles.label}>Email Institucional FATEC:</Text>
          <Text style={styles.texto}>gustavo.p.torres@fatec.sp.gov.br</Text>
        </View>
      </View>
      <View style={{ alignItems: 'center', justifyContent: 'center', padding: 20 }}>
        <Text>Made by Lucas Guimarães</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  )
}

/**
 * Aqui tem um estilo para essa tela seguir
 * Obs: Esse não será o foco no momento, apenas fiz o básico para ter uma noção de como vai ficar
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: 'blue',
    margin: 10,
    fontSize: 16,
  },
  texto: {
    color: 'black',
    paddingHorizontal: 10,
    fontSize: 16,
  }
});

export default UserScreen;
