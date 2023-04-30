import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
import Grades from '../control/gradeAccordion'

/**
 * @returns Retorna a tela de notas
 */
function NotaScreen() {
  return (
    <ScrollView style={styles.container}>
      <StatusBar style="auto" />
      <View>
        <Grades />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    backgroundColor: '#FFF',
    alignContent: 'center',
  },
  justifyContent: {
    justifyContent: 'center',

  },

});

export default NotaScreen;