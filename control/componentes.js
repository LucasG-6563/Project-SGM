import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Text, FlatList, StatusBar } from 'react-native';

const DADOS = [
    {
        id: 1,
        titulo: 'Exemplo 1'
    },
    {
        id: 2,
        titulo: 'Exemplo 2'
    },
    {
        id: 3,
        titulo: 'Exemplo 3'
    }
];

const Materias = ({titulo}) => (
    <View>
        <Text>{titulo}</Text>
    </View>
);

const lista = () => {
    return(
        <SafeAreaView>
            <FlatList data={DADOS} renderItem={({materias}) => <Materias titulo={materias.titulo}/>} keyExtractor={materias => materias.id}/>
        </SafeAreaView>
    )
}

/**
 * listNotas é um componente para listar as notas que recebe de um ?obj?
 */

export default lista;