import React from "react";
import { View, Text, TouchableOpacity, Image, Alert } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { style } from "./styles";

export default function User() {
  const navigation = useNavigation<NavigationProp<any>>();

  const handleLogout = () => {
    Alert.alert("Saiu", "Você saiu da conta!");
    navigation.reset({ routes: [{ name: "Login" }] });
  };

  return (
    <View style={style.container}>
      {/* Foto de Perfil */}
      <View style={style.profileContainer}>
        <Image
          source={{ uri: "https://cdn-icons-png.flaticon.com/512/149/149071.png" }}
          style={style.profileImage}
        />
        <Text style={style.name}>Gustavo Ribeiro</Text>
        <Text style={style.email}>gustavo@gmail.com</Text>
      </View>

      {/* Informações extras */}
      <View style={style.infoBox}>
        <Text style={style.infoTitle}>Plano:</Text>
        <Text style={style.infoText}>Premium</Text>
      </View>

      <View style={style.infoBox}>
        <Text style={style.infoTitle}>Membro desde:</Text>
        <Text style={style.infoText}>Março de 2024</Text>
      </View>

      {/* Botão de Sair */}
      <TouchableOpacity style={style.logoutButton} onPress={handleLogout}>
        <Ionicons name="exit-outline" size={24} color="#fff" />
        <Text style={style.logoutText}>Sair da Conta</Text>
      </TouchableOpacity>
    </View>
  );
}
