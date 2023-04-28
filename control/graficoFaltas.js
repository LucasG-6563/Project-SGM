import React from "react";
import { View, Dimensions } from "react-native";
import { PieChart } from "react-native-chart-kit";
import DADOS_FALTAS from "../model/dadosFaltas";

const GraficoFaltas = () => {
  return (
    <View>
      {DADOS_FALTAS.map((item, index) => (
        <PieChart
          key={index}
          data={item.dados}
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
      ))}
    </View>
  )
}

export default GraficoFaltas;