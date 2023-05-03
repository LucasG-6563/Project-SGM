import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import Grades from '../control/gradeAccordion'

/**
 * @returns Retorna a tela de notas
 */
function NotaScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        <StatusBar style="auto" />
        <View>
          <Grades />
        </View>
      </ScrollView>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text>Made by Lucas Guimarães</Text>
      </View>
    </View>
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