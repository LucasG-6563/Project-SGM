import React from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import { StatusBar } from 'expo-status-bar';
import FaltaAccordion from '../control/faltaAccordion'



function FaltaScreen() {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.container}>
                <FaltaAccordion />
            </ScrollView>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text>Made by Lucas Guimarães</Text>
            </View>
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: 20,
        alignContent: 'center',
    },
    pages: {
        position: 'absolute',
        bottom: 0,

    }

});

export default FaltaScreen;