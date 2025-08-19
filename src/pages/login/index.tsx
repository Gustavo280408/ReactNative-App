import React from 'react';
import { Text, View, Image, TextInput } from 'react-native';
import { style } from './styles';
import Logo from "../../assets/logo.png";

export default function Login() {
  return (
    <View style={style.container}>
      <View style={style.boxTop}>
        <Image
          source={Logo}
          style={style.logo}
          resizeMode="contain"
        />
        <Text style={style.text}>Bem-Vindo de Volta</Text>
      </View>
      <View style={style.boxMid}>
        <Text style={style.titleInput}>Endereço de E-mail</Text>
        <View style={style.boxInput}>
          <TextInput
            style={style.input}
          />
        </View>
        <Text style={style.titleInput}>Senha</Text>
        <TextInput />
      </View>
      <View style={style.boxBotton}>
      </View>
    </View>
  );
}