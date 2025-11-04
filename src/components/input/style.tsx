import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  titleInput: {
    color: "#D4AF37", // título dourado
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 6,
    textTransform: "uppercase",
  },
  boxInput: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "#D4AF37", // borda dourada ✨
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: "rgba(0,0,0,0.3)", // leve transparência de fundo
  },
  input: {
    fontSize: 16,
    color: "#D4AF37", // texto dourado
  },
  Button: {
    padding: 5,
  },
  Icon: {
    marginHorizontal: 5,
  },
});
