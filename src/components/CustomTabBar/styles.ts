import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    tabArea: {
        flexDirection: 'row',
        height: 80,
        backgroundColor: '#0D0D0D', // Fundo preto profundo
        justifyContent: 'space-around',
        alignItems: 'center',
        shadowColor: '#FFD700',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 10,
    },
    tabItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabItemButton: {
        width: 75,
        height: 75,
        borderRadius: 37.5,
        backgroundColor: '#FFD700', // Contorno externo dourado
        justifyContent: 'center',
        alignItems: 'center',
        top: -25,
        shadowColor: '#FFD700',
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 10,
        zIndex: 999,
    },
    centerButton: {
        width: 55,
        height: 55,
        borderRadius: 27.5,
        backgroundColor: '#FF8C00', // Laranja queimado
        justifyContent: 'center',
        alignItems: 'center',
    },
    editIcon: {
        position: 'absolute',
        bottom: 5,
        right: 5,
    },
});
