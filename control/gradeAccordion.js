import React from 'react';
import { List } from 'react-native-paper';
import estilos from '../assets/estilos';
import DADOS from '../model/dadosNotas';

const Grades = () => {
    return (
        <List.AccordionGroup>
            {DADOS.map((item) => (
                <List.Accordion title={item.titulo + " - Média: " +
                    item.media} id={item.titulo}
                    style={estilos.accordion}>
                    {item.notas.map((n, index) => (
                        <List.Item title={n.desc + " - " + n.n}
                            style={estilos.accordionItens} key={n.desc} />
                    ))}
                </List.Accordion>
            ))}
        </List.AccordionGroup>
    )
}

export default Grades;
