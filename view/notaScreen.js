import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Grades from '../control/gradeAccordion'

/**
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