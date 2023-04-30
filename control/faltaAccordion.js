import React from 'react';
import { List } from 'react-native-paper';
import { View, Dimensions, Text } from 'react-native';
import { PieChart } from "react-native-chart-kit";
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
            {DADOS_FALTAS.map((item, index) => (
                <List.Accordion title={item.sigla + " - Faltas: " + item.dados[0].aulas}
                    id={item.sigla}
                    key={item.sigla + index.toString}
                    description={item.titulo}
                    style={estilos.accordion} >
                    <List.Item title="Gráfico" description={
                        item.dados[2].aulas > 0 ? () => GraficoFaltas2(index, item.dados)
                            : <Text>Essa matérias não possui aulas...</Text>
                    } />
                </List.Accordion>
            ))}
        </List.AccordionGroup>
    )
}

export default Faltas;
