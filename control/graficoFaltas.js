import React from "react";
import { Text, View, Dimensions} from "react-native";
import { PieChart } from "react-native-chart-kit";

const data = [
  {
    name: "Faltas",
    aulas: 6,
    color: "red",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  },
  {
    name: "Presenças",
    aulas: 2,
    color: "blue",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  },
  {
    name: "Aulas",
    aulas: 12,
    color: "gray",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  }
  
];

const GraficoFaltas = () => {
    return(
        <View>
  <PieChart
    data={data}
    width={Dimensions.get("window").width} // from react-native
    height={300}
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
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
    accessor={"aulas"}
    backgroundColor={"transparent"}
    paddingLeft={"20"}
  />
</View>
    )
}

export default GraficoFaltas;