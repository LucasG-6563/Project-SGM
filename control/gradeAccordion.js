import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { List, shadow } from 'react-native-paper';

const Grades = () => {
    return (
        <List.AccordionGroup>
            <List.Accordion title={"Trabalho de Graduação  -  Média:" + 6} id="1" style={estilos.acordion}>
                <List.Item title="Nota 1" />
                <List.Item title="Nota 2" />
                <List.Item title="Nota 3" />
            </List.Accordion>
            <List.Accordion title="Falta algumas coisas..." id="2" style={estilos.acordion}>
                <List.Item title="Primeiro" description="Preciso deixar esse Accordion em um lugar separado(Para reutilizalo)" />
                <List.Item title="Segundo" description="Verificar se é possível usar CoreUI, Bootstrap e/ou Material UI com expo" />
                <List.Item title="Terceiro" description="Começar a deixar a tela notaScreen parecida com o esboço" />
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

export default Grades;
