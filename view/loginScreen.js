import React, { useState } from "react";
import { View, Text, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
    const navigation = useNavigation()
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    function validar() {
        if (usuario === "1234" && senha === "4321") {
            console.log('Logado')
            navigation.navigate('Principal')
        } else {
            console.log('Usuário ou senha errado')
        }
    }
    return (
        <KeyboardAvoidingView style={styles.backgroud}>
            <View style={styles.containerLogo}>
                <Image source={require('../assets/logosiga.png')} />
            </View>

            <View style={styles.container}>
                <TextInput id="txtUsuario" style={styles.input} placeholder="Usuario"
                    autoCorrect={false} onChangeText={setUsuario} value={usuario}
                />
                <TextInput id="txtSenha" style={styles.input} placeholder="Senha"
                    autoCorrect={false} onChangeText={setSenha} secureTextEntry={true}
                    value={senha}
                />

                <TouchableOpacity style={styles.btnAcessar}
                    onPress={() => {
                        validar()
                    }} >
                    <Text style={styles.AcessarText}> Acessar </Text>
                </TouchableOpacity>

            </View>

            <View style={{ alignItems: 'center', justifyContent: 'center', padding: 20 }}>
                <Text>Made by Lucas Guimarães</Text>
            </View>

            <StatusBar style="auto" />

        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    backgroud: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerLogo: {
        flex: 1,
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        alignItems: "center",
        width: '90%',
    },
    input: {
        backgroundColor: '#FFF',
        width: '90%',
        marginBottom: 15,
        color: '#222',
        fontSize: 17,
        borderRadius: 7,
        padding: 10,
    },
    btnAcessar: {
        backgroundColor: '#35AAFF',
        width: '90%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
    },
    AcessarText: {
        color: '#FFF',
        fontSize: 18,
    }
})