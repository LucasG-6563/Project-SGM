import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button } from 'react-native';
import Grades from '../control/gradeAccordion'

/**
 * AINDA EM DESENVOLVIMENTO
 * Obs: peguei algumas linhas de comando de userScreen.js
 * @returns Retorna a tela de notas
 */
function NotaScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View>
        <Grades />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignContent: 'center',
  },
  pages: {
    position: 'absolute',
    bottom: 0,

  },

});

export default NotaScreen;