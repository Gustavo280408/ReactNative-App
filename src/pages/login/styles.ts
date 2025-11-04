import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    background: {
        flex: 1,
        width: "100%",
        height: "100%",
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 30,
    },
    headerContainer: {
        width: "100%",
        alignItems: "center",
        marginBottom: 40,
    },
    title: {
        color: "#ffffffff",
        fontSize: 24,
        fontWeight: "bold",
        textTransform: "uppercase",
        textAlign: "center",
        textShadowColor: "#000000",
        textShadowOffset: { width: 5, height: 2 },
        textShadowRadius: 2,
    },
    form: {
        width: "100%",
        gap: 20,
        marginBottom: 50,
        color: "#D4AF37"
    },
    footer: {
        alignItems: "center",
        width: "100%",
    },
    textBotton: {
        color: "#ffffff",
        marginTop: 16,
        fontSize: 14,
        textShadowColor: "#000000",
        textShadowOffset: { width: 2, height: 1 },
        textShadowRadius: 2,
    },
    linkText: {
        color: "#D4AF37",
        fontWeight: "bold",
    },
});
