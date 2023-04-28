import React from 'react';
import { List } from 'react-native-paper';
import GraficoFaltas from './graficoFaltas';
import estilos from '../assets/estilos';
import DADOS_FALTAS from '../model/dadosFaltas';

const GraficoFaltas2 = (index, item) => {
    return (
        <View>
            <PieChart
                key={index}
                data={item}
                width={Dimensions.get("window").width} // from react-native
                height={200}
                chartConfig={{
                    backgroundColor: "#e26a00",
                    backgroundGradientFrom: "#fb8c00",
                    backgroundGradientTo: "#ffa726",
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 16
                    },
                    propsForDots: {
                        r: "3",
                        strokeWidth: "2",
                        stroke: "#ffa726"
                    }
                }}
                accessor={"aulas"}
                backgroundColor={"transparent"}
            />
        </View>
    )
}


const Faltas = () => {
    return (
        <List.AccordionGroup>
            <List.Accordion title={"Trabalho de Graduação  -  Faltas:" + 6} id="1" style={estilos.accordion}>
                <List.Item title="Gráfico" description={
                    () => <GraficoFaltas />
                } style={estilos.accordionItens} />
            </List.Accordion>
            <List.Accordion title="Teste Manual" id="2" style={estilos.accordion}>
                <List.Item title="Titulo Item Teste" style={estilos.accordionItens} />
            </List.Accordion>
            {DADOS_FALTAS.map((item) => (
                <List.Accordion title={item.titulo} id={item.titulo} style={estilos.accordion} >
                    <List.Item title="Gráfico" description={
                        () => { GraficoFaltas2(index, item.dados) }
                    } />
                </List.Accordion>
            ))}
        </List.AccordionGroup>
    )
}

export default Faltas;
