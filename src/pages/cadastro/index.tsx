import React, { useState } from "react";
import {
  View,
  Text,
  Alert,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
} from "react-native";
import { MaterialIcons, Octicons, FontAwesome } from "@expo/vector-icons";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { style } from "./styles";
import Logo from "../../assets/logo.png";
import { Input } from "../../components/input";
import { Button } from "../../components/Button";
import { useAuth } from "../../context/authContext";

export default function Cadastro() {
  const navigation = useNavigation<NavigationProp<any>>();
  const { setUser } = useAuth(); // pega a função do contexto global

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [loading, setLoading] = useState(false);

  async function handleRegister() {
    try {
      setLoading(true);

      // Verifica se todos os campos foram preenchidos
      if (!name || !email || !password || !confirmPassword) {
        return Alert.alert("Atenção", "Preencha todos os campos obrigatórios!");
      }

      // Verifica se as senhas são iguais
      if (password !== confirmPassword) {
        return Alert.alert("Erro", "As senhas não coincidem!");
      }

      // Salva nome, email e senha no contexto global
      setUser({ name, email, password });

      Alert.alert("Sucesso", "Conta criada com sucesso!");
      navigation.navigate("Login"); // volta para a tela de login
    } catch (error) {
      console.log(error);
      Alert.alert("Erro", "Ocorreu um problema ao criar a conta.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ImageBackground
        source={{ uri: "https://img.freepik.com/fotos-premium/uma-balanca-de-ouro-com-as-palavras-justica_832479-6168.jpg" }}
        resizeMode="cover"
        style={style.background}
        imageStyle={{ opacity: 0.25 }}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
          showsVerticalScrollIndicator={false}
        >
          <View style={style.boxTop}>
            <Text style={style.title}>Crie sua conta</Text>
            <Text style={style.subtitle}>
              Preencha seus dados para continuar
            </Text>
          </View>

          <View style={style.boxMid}>
            <Input
              value={name}
              onChangeText={setName}
              title="NOME COMPLETO"
              IconRight={FontAwesome}
              IconRightName="user"
            />

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
              IconRightName={showPassword ? "eye-closed" : "eye"}
              secureTextEntry={showPassword}
              onIconRightPress={() => setShowPassword(!showPassword)}
            />

            <Input
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              title="CONFIRMAR SENHA"
              IconRight={Octicons}
              IconRightName={showPassword ? "eye-closed" : "eye"}
              secureTextEntry={showPassword}
              onIconRightPress={() => setShowPassword(!showPassword)}
            />
          </View>

          <View style={style.boxBottom}>
            <Button text="Cadastrar" loading={loading} onPress={handleRegister} />
          </View>

          <View style={style.footer}>
            <Text style={style.textBottom}>Já tem conta? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={style.textLink}>Fazer login</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}