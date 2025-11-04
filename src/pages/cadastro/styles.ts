import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 24,
    },
    boxTop: {
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 30,
    },
    logo: {
        width: 90,
        height: 90,
        tintColor: "#D4AF37", // dourado
    },
    title: {
        fontSize: 22,
        color: "#D4AF37",
        fontWeight: "bold",
        marginTop: 18,
    },
    subtitle: {
        fontSize: 14,
        color: "#bbb",
        marginTop: 6,
        textAlign: "center",
    },
    boxMid: {
        width: "100%",
        marginTop: 10,
        marginBottom: 40,
        gap: 18,
    },
    boxBottom: {
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        width: 250,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#D4AF37",
        borderRadius: 40,
        shadowColor: "#D4AF37",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.6,
        shadowRadius: 10,
        elevation: 10,
    },
    textBottom: {
        fontSize: 15,
        color: "#aaa",
    },
    textLink: {
        color: "#D4AF37",
        fontWeight: "bold",
    },
});
