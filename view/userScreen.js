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
      {/* <Button title='O "title" não pode ficar vazio' color='green'/> */}
      <View style={{ borderColor: 'black', borderWidth: 2, alignItems: 'center' }}>
        <Image source={require('../assets/padrao.jpg')} style={{ width: 250, height: 250 }} />
        <Text style={{ fontSize: 15 }}>AQUI VEM O NOME</Text>
      </View>
      <View style={{ alignItems: 'center', justifyContent: 'center', margin: 10 }}>
        <Text style={{ margin: 10 }}>PP: {'VALOR'} - PR: {'VALOR'} - MAIOR PR: {'VALOR'}</Text>
        <Text style={{ margin: 10 }}>Cursado: {'VALOR'} - Máximo: {'VALOR'} - Faltam: {'VALOR'}</Text>
        <Text style={{ margin: 10 }}>Email Institucional FATEC: {'lucas.guimaraes5@fatec.sp.gov.br'}</Text>
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
  }
});

export default UserScreen;
