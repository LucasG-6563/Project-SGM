import React from 'react';
import { Text, View } from 'react-native';
import { List, shadow } from 'react-native-paper';
import estilos from '../assets/estilos';

const Grades = () => {
    return (
        <List.AccordionGroup>
            <List.Accordion title={"Trabalho de Graduação  -  Média:" + 6}
                id="1" style={estilos.accordion}>
                <List.Item title="Nota 1" style={estilos.accordionItens} />
                <List.Item title="Nota 2" style={estilos.accordionItens} />
                <List.Item title="Nota 3" style={estilos.accordionItens} />
            </List.Accordion>
            <List.Accordion title="Falta algumas coisas..." id="2" style={estilos.accordion}>
                <List.Item title="Primeiro"
                    description="Preciso deixar esse Accordion em um lugar separado(Para reutilizalo)"
                    style={estilos.accordionItens} />
                <List.Item title="Segundo" description="Verificar se é possível usar CoreUI, Bootstrap e/ou Material UI com expo" style={estilos.accordionItens} />
                <List.Item title="Terceiro" description="Começar a deixar a tela notaScreen parecida com o esboço" style={estilos.accordionItens} />
            </List.Accordion>
        </List.AccordionGroup>
    )
}

export default Grades;
