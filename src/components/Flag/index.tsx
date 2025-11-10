import React from "react";
import { View, Text, StyleSheet } from "react-native";

type Props = {
    caption?: string;
    color?: string;
};

export function Flag({ caption }: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{caption?.toUpperCase()}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFD700",
        paddingHorizontal: 9,
        paddingVertical: 2,
        borderRadius: 8,
        borderWidth: 1.5,
        borderColor: "#B8860B",
        shadowColor: "#FFD700",
        shadowOpacity: 0.6,
        shadowRadius: 6,
        elevation: 6,
        alignSelf: "flex-end", // 🔹 se adapta à largura do texto
        maxWidth: "100%", // 🔹 evita sobreposição
        marginLeft: 10,
    },
    text: {
        color: "#000",
        fontWeight: "700",
        fontSize: 11,
    },
});
