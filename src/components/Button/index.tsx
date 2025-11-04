import React from "react";
import { TouchableOpacity, Text, ActivityIndicator, StyleSheet } from "react-native";

interface ButtonProps {
    text: string;
    onPress: () => void;
    loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ text, onPress, loading = false }) => {
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={onPress}
            disabled={loading}
        >
            {loading ? (
                <ActivityIndicator size="small" color="#000" />
            ) : (
                <Text style={styles.text}>{text}</Text>
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        width: "100%",
        paddingVertical: 14,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#D4AF37", // botão dourado
        borderWidth: 2,
        borderColor: "#000",       // borda preta
        shadowColor: "#000",
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
    },
    text: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#000", // texto preto dentro do botão
    },
});
