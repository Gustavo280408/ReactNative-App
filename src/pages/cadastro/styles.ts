import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: "#000",
        paddingHorizontal: 24,
        justifyContent: "center",
    },
    boxTop: {
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 40,
    },
    logo: {
        width: 100,
        height: 100,
        tintColor: "#D4AF37",
    },
    title: {
        fontSize: 26,
        color: "#D4AF37",
        fontWeight: "bold",
        textTransform: "uppercase",
        marginTop: 16,
        textShadowColor: "#000",
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 5,
    },
    subtitle: {
        fontSize: 15,
        color: "#ccc",
        marginTop: 6,
        textAlign: "center",
        fontStyle: "italic",
    },
    boxMid: {
        width: "100%",
        marginTop: 10,
        marginBottom: 40,
        gap: 18,
        backgroundColor: "rgba(0,0,0,0.6)",
        borderRadius: 20,
        padding: 20,
        borderWidth: 1,
        borderColor: "#D4AF37",
        shadowColor: "#D4AF37",
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.4,
        shadowRadius: 10,
        elevation: 10,
    },
    boxBottom: {
        alignItems: "center",
        justifyContent: "center",
    },
    footer: {
        flexDirection: "row",
        marginTop: 24,
        justifyContent: "center",
        marginBottom: 40,
    },
    textBottom: {
        fontSize: 15,
        color: "#ccc",
    },
    textLink: {
        color: "#D4AF37",
        fontWeight: "bold",
        textDecorationLine: "underline",
    },
});