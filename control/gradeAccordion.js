import React from 'react';
import { List } from 'react-native-paper';
import estilos from '../assets/estilos';
import DADOS from '../model/dadosNotas';

const Grades = () => {
    return (
        <List.AccordionGroup>
            {DADOS.map((item, index) => (
                <List.Accordion title={item.sigla + " - Média: " +
                    item.media} id={item.sigla}
                    key={item.sigla + index.toString}
                    style={estilos.accordion}
                    description={item.titulo}>
                    {item.notas ? item.notas.map((n) => (
                        <List.Item title={n.desc + " - " + n.n}
                            style={estilos.accordionItens} key={n.desc} />
                    )) : <List.Item title={"Medía - " + item.media}
                        style={estilos.accordionItens} key={item.sigla + item.media} />}
                </List.Accordion>
            ))}
        </List.AccordionGroup>
    )
}

export default Grades;
