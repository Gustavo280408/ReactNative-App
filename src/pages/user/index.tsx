import React from "react";
import { View, Text, TouchableOpacity, Image, Alert, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, NavigationProp } from "@react-navigation/native";

export default function User() {
  const navigation = useNavigation<NavigationProp<any>>();

  const handleLogout = () => {
    Alert.alert("Saiu", "Você saiu da conta!");
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
          source={{ uri: "data:image/png;base64,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" }}
          style={styles.profileImage}
        />
        <Text style={styles.name}>Gustavo Ribeiro</Text>
        <Text style={styles.email}>gustavo@gmail.com</Text>
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
