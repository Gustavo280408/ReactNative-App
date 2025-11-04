import { StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
    button: {
        width: 70,                // largura do botão
        height: 30,               // altura do botão
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: themas.colors.red,
        borderRadius: 4,
    },
    buttonRow: {
        flexDirection: 'row',     // organiza na horizontal
        justifyContent: 'center', // centraliza na tela
        alignItems: 'center',
        gap: 10,                  // espaço entre os botões (ou use marginHorizontal nos botões)
        marginVertical: 10,
    },
});
