import React from 'react';
import { Text, View } from 'react-native';
import { List } from 'react-native-paper';
import GraficoFaltas from './graficoFaltas';

const Faltas = () => {
    return (
        <List.AccordionGroup>
            <List.Accordion title={"Trabalho de Graduação  -  Faltas:" + 6} id="1" style={estilos.Accordion}>
                <List.Item title="Gráfico" />
                <View>
                    <GraficoFaltas />
                </View>
                <List.Item title="Exemplo" id="2" />
            </List.Accordion>
            <List.Accordion title="Teste Manual" id="2" style={estilos.Accordion}>
                <List.Item title="Titulo Item Teste" />
            </List.Accordion>
        </List.AccordionGroup>
    )
}

const estilos = StyleSheet.create({
    acordion: {
        backgroundColor: '#b0c4de',
        borderRadius: 30,
        marginEnd: 5,
        marginStart: 5,
        marginTop: 2,
        marginBottom: 2,
        borderWidth: 0.5,
    }
})

export default Faltas;
