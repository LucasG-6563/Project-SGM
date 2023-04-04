import React from "react";
import { View, Text, Dimensions} from "react-native";
import { StatusBar } from 'expo-status-bar';
import FaltaAccordion from '../control/faltaAccordion'



function FaltaScreen(){
    return(
        <View>
            <Text> TESTE </Text>
            <FaltaAccordion />
            <StatusBar style="auto" />
        </View>
    )
}

export default FaltaScreen;