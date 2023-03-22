import React from 'react'
import { Text, FlatList, SafeAreaView  } from 'react-native';

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

const Materias = ({DADOS}) => (
    <View>
        <Text>{DADOS.titulo}</Text>
    </View>
);

const Lista = () => {
    return(
        <SafeAreaView>
            <FlatList data={DADOS} renderItem={({materias}) => <Materias titulo={materias.titulo}/>} keyExtractor={materias => materias.id}/>
        </SafeAreaView>
    )
}

/**
 * listNotas é um componente para listar as notas que recebe de um ?obj?
 */

export default Lista;