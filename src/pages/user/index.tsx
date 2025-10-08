import React from "react";
import { style } from "./styles";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "@react-native-vector-icons/ionicons";

export default function User() {
    const navigation = useNavigation<NavigationProp<any>>();

    const handleLogout = () => {
        Alert.alert("Saiu", "Você saiu da conta!");
        return navigation.reset({ routes: [{ name: 'Login' }] })
    };

    return (
        <View style={style.container}>
            <Text style={style.name}>NOME DO USUARIO</Text>
            <TouchableOpacity style={style.logoutButton} onPress={handleLogout}>
                <Ionicons
                    name="exit"
                    style={{ color: 'gray' }}
                    size={40}
                />
            </TouchableOpacity>
        </View>
    )

}