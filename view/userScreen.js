import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
  
  const Item = ({title}) => (
    <View>
      <Text style={{fontSize: 25, borderEndWidth: 10, borderWidth: 2, borderRadius: 20, textAlign: 'center'}}>{title}</Text>
    </View>
  )
function UserScreen(){
return(
  <View style={styles.container}>
      {/* <Button title='O "title" não pode ficar vazio' color='green'/> */}
      <View style={{borderColor: 'black', borderWidth: 2, alignItems: 'center'}}>
        <Image source={require('../assets/padrao.jpg')} style={{width: 250, height: 250}}/>
        <Text style={{fontSize: 15}}>AQUI VEM O NOME</Text>
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center', margin: 10}}>
        <Text style={{margin: 10}}>PP: {'VALOR'} - PR: {'VALOR'} - MAIOR PR: {'VALOR'}</Text>
        <Text style={{margin: 10}}>Cursado: {'VALOR'} - Máximo: {'VALOR'} - Faltam: {'VALOR'}</Text>
        <Text style={{margin: 10}}>Email Institucional FATEC: {'lucas.guimaraes5@fatec.sp.gov.br'}</Text>
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

export default UserScreen;
