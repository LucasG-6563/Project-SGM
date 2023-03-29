import React from "react";
import { View, Text, Dimensions} from "react-native";
import { StatusBar } from 'expo-status-bar';
import FaltaAccordion from '../control/faltaAccordion'
import { PieChart } from 'react-native-chart-kit';

/*
const screenWidth = Dimensions.get('window').width

const data = [
    { name: 'Aulas restantes', quantity: 10 },
    { name: 'Presença', quantity: 4 },
    { name: 'Faltas', quantity: 6 },
  ];
  const chartConfig = {
    title: 'Gráfico de Pizza',
   // color: ['#a9a9a9', '#7cfc00', '#b22222'],
    legendFontSize: 18,
    decimalPlaces: 0,
    backgroundGradientFrom: "#1E2923",
    backgroundGradientTo: "#08130D",
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2 // optional, default 3
  };*/

function FaltaScreen(){
    return(
        <View>
            <Text> TESTE </Text>
            <StatusBar style="auto" />
        </View>
    )
}

export default FaltaScreen;