import React, { useState } from "react";
import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from "react-native";

import { style } from "./styles";
import { MaterialIcons, Octicons } from "@expo/vector-icons";
import { Input } from "../../components/input";
import { Button } from "../../components/Button";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { useAuth } from "../../context/authContext";

export default function Login() {
  const navigation = useNavigation<NavigationProp<any>>();
  const { user } = useAuth(); // pega o usuário cadastrado

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [loading, setLoading] = useState(false);

  async function getLogin() {
    try {
      setLoading(true);

      if (!email || !password) {
        return Alert.alert("Atenção", "Informe os campos obrigatórios!");
      }

      if (!user) {
        return Alert.alert("Erro", "Nenhum usuário cadastrado!");
      }

      if (email === user.email && password === user.password) {
        navigation.reset({ routes: [{ name: "BottomRoutes" }] });
      } else {
        Alert.alert("Atenção!", "Senha ou e-mail inválidos!");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <ImageBackground
      source={{
        uri: "https://img.freepik.com/fotos-premium/uma-balanca-de-ouro-com-as-palavras-justica_832479-6168.jpg",
      }}
      style={style.background}
    >
      <View style={style.container}>
        <View style={style.headerContainer}>
          <Text style={style.title}>Bem-vindo de volta</Text>
        </View>

        <View style={style.form}>
          <Input
            value={email}
            onChangeText={setEmail}
            title="E-MAIL"
            IconRight={MaterialIcons}
            IconRightName="email"
            titleStyle={{ color: "#D4AF37" }}
          />
          <Input
            value={password}
            onChangeText={setPassword}
            title="SENHA"
            IconRight={Octicons}
            IconRightName={showPassword ? "eye-closed" : "eye"}
            secureTextEntry={showPassword}
            onIconRightPress={() => setShowPassword(!showPassword)}
            titleStyle={{ color: "#D4AF37" }}
          />
        </View>

        <View style={style.footer}>
          <Button text="Entrar" loading={loading} onPress={getLogin} />

          <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
            <Text style={style.textBottom}>
              Não tem conta?<Text style={style.textLink}> Crie agora</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}
