import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { List } from 'react-native-paper';
/**
 * AINDA EM DESENVOLVIMENTO
 * Obs: peguei algumas linhas de comando de userScreen.js
 * @returns Retorna a tela de notas
 */
function NotaScreen(){
return(
  <View style={styles.container}>
    <Text>Olá mundo</Text>
        <View>
          <List.AccordionGroup>
            <List.Accordion title={"Trabalho de Graduação  -  Média:"+6} id="1">
              <List.Item title="Nota 1" />
              <List.Item title="Nota 2" />
              <List.Item title="Nota 3" />
            </List.Accordion>
            <List.Accordion title="Teste Manual" id="2">
              <List.Item title="Titulo Item Teste" />
            </List.Accordion>
            <View>
              <Text>
                List.Accordion can be wrapped because implementation uses React.Context.
              </Text>
              <List.Accordion title="Falta algumas coisas..." id="3">
                <List.Item title="Primeiro" description="Preciso deixar esse Accordion em um lugar separado(Para reutilizalo)"/>
                <List.Item title="Segundo" description="Verificar se é possível usar CoreUI, Bootstrap e/ou Material UI com expo" />
                <List.Item title="Terceiro" description="Começar a deixar a tela notaScreen parecida com o esboço"/>
              </List.Accordion>
            </View>
          </List.AccordionGroup>
        </View>
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