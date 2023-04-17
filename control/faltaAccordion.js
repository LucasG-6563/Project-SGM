import React from 'react';
import { Text, View } from 'react-native';
import { List } from 'react-native-paper';
import GraficoFaltas from './graficoFaltas';
import estilos from '../assets/estilos';

const Faltas = () => {
    return (
        <List.AccordionGroup>
            <List.Accordion title={"Trabalho de Graduação  -  Faltas:" + 6} id="1" style={estilos.accordion}>
                <List.Item title="Gráfico" description={
                    <GraficoFaltas />
                } style={estilos.accordionItens} />
                <List.Item title="Exemplo" id="2" />
            </List.Accordion>
            <List.Accordion title="Teste Manual" id="2" style={estilos.accordion}>
                <List.Item title="Titulo Item Teste" style={estilos.accordionItens} />
            </List.Accordion>
        </List.AccordionGroup>
    )
}

export default Faltas;
