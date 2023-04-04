import React from 'react';
import { Text, View } from 'react-native';
import { List } from 'react-native-paper';
import GraficoFaltas from './graficoFaltas';

const Faltas = () => {
    return(
    <List.AccordionGroup>
        <List.Accordion title={"Trabalho de Graduação  -  Faltas:"+6} id="1">
                <List.Item title="Gráfico" />
                <View>
                    <GraficoFaltas />
                </View>
                <List.Item title="Exemplo" id="2"/>
            </List.Accordion>
            <List.Accordion title="Teste Manual" id="2">
                <List.Item title="Titulo Item Teste" />
            </List.Accordion>
    </List.AccordionGroup>
    )
}

export default Faltas;
