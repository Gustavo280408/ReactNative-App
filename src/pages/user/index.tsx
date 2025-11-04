import React from "react";
import { View, Text, TouchableOpacity, Image, Alert, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { useAuth } from "../../context/authContext";

export default function User() {
  const navigation = useNavigation<NavigationProp<any>>();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    Alert.alert("Saiu", "Você saiu da conta!");
    logout();
    navigation.reset({ routes: [{ name: "Login" }] });
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1 }}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Ionicons name="person-circle-outline" size={36} color="#D4AF37" />
        <Text style={styles.headerTitle}>Meu Perfil</Text>
      </View>

      {/* Seção de perfil */}
      <View style={styles.profileCard}>
        <Image
          source={{ uri: "https://i.imgur.com/w1JxQ0R.png" }}
          style={styles.profileImage}
        />
        <Text style={styles.name}>{user?.name || "Usuário"}</Text>
        <Text style={styles.email}>{user?.email || "email@exemplo.com"}</Text>
      </View>

      {/* Informações do usuário */}
      <View style={styles.infoSection}>
        <View style={styles.infoItem}>
          <Ionicons name="star-outline" size={22} color="#D4AF37" />
          <View>
            <Text style={styles.infoLabel}>Plano</Text>
            <Text style={styles.infoValue}>Premium</Text>
          </View>
        </View>

        <View style={styles.infoItem}>
          <Ionicons name="calendar-outline" size={22} color="#D4AF37" />
          <View>
            <Text style={styles.infoLabel}>Membro desde</Text>
            <Text style={styles.infoValue}>Março de 2024</Text>
          </View>
        </View>

        <View style={styles.infoItem}>
          <Ionicons name="settings-outline" size={22} color="#D4AF37" />
          <View>
            <Text style={styles.infoLabel}>Configurações</Text>
            <Text style={styles.infoValue}>Notificações, segurança e mais</Text>
          </View>
        </View>
      </View>

      {/* Botão de logout */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Ionicons name="exit-outline" size={22} color="#000" />
        <Text style={styles.logoutText}>Sair da Conta</Text>
      </TouchableOpacity>

      {/* Rodapé */}
      <Text style={styles.footer}>© 2025 | MaGu Company</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 25,
    backgroundColor: "#111",
    borderBottomWidth: 1,
    borderBottomColor: "#D4AF37",
  },
  headerTitle: {
    color: "#D4AF37",
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 10,
  },
  profileCard: {
    alignItems: "center",
    marginTop: 30,
    marginBottom: 40,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 70,
    borderWidth: 3,
    borderColor: "#D4AF37",
    marginBottom: 15,
  },
  name: {
    fontSize: 22,
    color: "#fff",
    fontWeight: "bold",
  },
  email: {
    fontSize: 15,
    color: "#aaa",
    marginTop: 3,
  },
  infoSection: {
    backgroundColor: "#111",
    marginHorizontal: 25,
    borderRadius: 16,
    padding: 20,
    gap: 20,
    borderWidth: 1,
    borderColor: "#D4AF37",
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  infoLabel: {
    color: "#D4AF37",
    fontSize: 15,
    fontWeight: "600",
  },
  infoValue: {
    color: "#fff",
    fontSize: 14,
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#D4AF37",
    marginHorizontal: 25,
    marginTop: 40,
    paddingVertical: 15,
    borderRadius: 40,
    shadowColor: "#D4AF37",
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 6,
  },
  logoutText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 8,
  },
  footer: {
    textAlign: "center",
    color: "#777",
    fontSize: 12,
    marginTop: 30,
    marginBottom: 20,
  },
});
