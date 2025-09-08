import React, { useState } from "react";

import {
    Text, View, Image, TextInput, TouchableOpacity,
    Alert, ActivityIndicator
} from "react-native";
import { style } from "./styles";
import Logo from "../../assets/logo.png";
import { MaterialIcons, Octicons } from '@expo/vector-icons'
import { themas } from "../../global/themes"
import { Input } from "../../components/input";
import { Button } from "../../components/Button";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(true);
    const [loading, setLoading] = useState(false);

    async function getLogin() {
        try {
            setLoading(true)
            if (!email || !password) {
                return Alert.alert('Atenção', 'Informe os campos obrigatórios!');
            }

            setTimeout(() => {
                if (email == 'gustavo@gmail.com' && password == '12345678') {
                    Alert.alert('Logado com sucesso!');
                } else {
                    Alert.alert('Usuário não encontrado!');
                }
                setLoading(false)
            }, 3000)
        } catch (error) {
            console.log(error);
        }
    }
    return (
        < View style={style.container} >
            <View style={style.boxTop}>
                <Image
                    source={Logo}
                    style={style.logo}
                    resizeMode="contain"
                />
                <Text style={style.text}>Bem vindo de volta!</Text>
            </View>
            <View style={style.boxMid}>
                <Input 
                value={email}
                onChangeText={setEmail}
                title="ENDEREÇO E-MAIL"
                IconRight={MaterialIcons}
                IconRightName="email"
                />
                <Input 
                value={password}
                onChangeText={setPassword}
                title="SENHA"
                IconRight={Octicons}
                IconRightName={showPassword ? "eye-closed" : "eye"} //logica do olho aberto ao ver
                secureTextEntry={showPassword}
                onIconRightPress={() => setShowPassword(!showPassword)}
                />
                {/* <Text style={style.titleInput}>ENDEREÇO DE E-MAIL</Text> */}

                {/* <View style={style.boxInput}>
                    <TextInput
                        style={style.input}
                        value={email}
                        onChangeText={setEmail}
                    />
                    <MaterialIcons
                        name="email"
                        size={20}
                        color={themas.colors.gray}
                    />
                </View>
                <Text style={style.titleInput}>SENHA</Text>
                <View style={style.boxInput}>
                    <TextInput
                        style={style.input}
                        value={password}
                        onChangeText={setPassword}
                    />
                    <MaterialIcons
                        name="remove-red-eye"
                        size={20}
                        color={themas.colors.gray}
                    />
                </View> */}
            </View>
            <View style={style.boxBotton}>
                <TouchableOpacity style={style.button} onPress={() => getLogin()}>
                    {
                        loading ? <ActivityIndicator color={'#ffff'} size={"small"} /> :
                            <Text style={style.textButton}>Entrar</Text>
                    }
                </TouchableOpacity>
            </View>
            <View style={style.boxBotton}>
                <Button text="Entrar" loading={loading} onPress={() => getLogin} />
            </View>
            <Text style={style.textBotton}>Não tem conta?
                <Text style={{ color: themas.colors.primary }}> Crie agora!</Text></Text>
        </View >
    )
}