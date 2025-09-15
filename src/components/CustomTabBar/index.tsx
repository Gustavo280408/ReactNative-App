import React from "react";
import { Text, Touchable, TouchableOpacity, View } from "react-native";
import { style } from "./styles";

export default ({ state, navigation }: any) => {
    return (
        <View style={style.tabArea}>
            <TouchableOpacity>
                <Text>Esquerda</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Centro</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Direita</Text>
            </TouchableOpacity>
        </View>
    )
}