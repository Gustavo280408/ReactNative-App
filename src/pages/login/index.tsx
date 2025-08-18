import React from 'react';
import { Text, View} from "react-native";
import { style } from "./styles";

export default function Login() {
    return (
    < View style = {style.container} >
        <View style={style.boxTop}>
            <Text>Top</Text>
        </View>
        <View style={style.boxMid}>
            <Text>Mid</Text>
            <View style={style.boxBotton}>
                <Text>Botton</Text>
            </View>
        </View>
    </View>
    )
}