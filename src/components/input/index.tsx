import React, { forwardRef } from "react";
import { View, TextInput } from "react-native";
import { style } from "../../pages/login/styles";
import { MaterialIcons } from "@expo/vector-icons";
import { themas } from "../../global/themes";

export const Input = forwardRef(() => {
    return (
        <View style={style.boxInput}>
            <TextInput
                style={style.input}
            />
            <MaterialIcons
                name="email"
                size={20}
                color={themas.colors.gray}
            />
        </View>
    )
})
