import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { StatusBar } from 'expo-status-bar';
import FaltaAccordion from '../control/faltaAccordion'



function FaltaScreen() {
    return (
        <View style={styles.container}>
            <ScrollView>
                <FaltaAccordion />
            </ScrollView>
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: 20,
        justifyContent: 'center',
        alignContent: 'center',
    },
    pages: {
        position: 'absolute',
        bottom: 0,

    }

});

export default FaltaScreen;