import { StyleSheet, Dimensions } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0D0D0D', // Preto profundo
    },
    header: {
        width: '100%',
        height: Dimensions.get('window').height / 6,
        backgroundColor: '#1A1A1A',
        paddingHorizontal: 20,
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderColor: '#B8860B',
        shadowColor: '#FFD700',
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 6,
    },
    greeting: {
        fontSize: 20,
        color: '#FFD700',
        marginBottom: 10,
    },
    boxInput: {
        width: '85%',
    },
    boxList: {
        flex: 1,
        width: '100%',
    },
    card: {
        width: '100%',
        backgroundColor: '#1A1A1A',
        marginVertical: 6,
        borderRadius: 14,
        justifyContent: 'center',
        padding: 12,
        borderWidth: 1,
        borderColor: '#B8860B',
        shadowColor: '#FFD700',
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
    },
    rowCard: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    rowCardLeft: {
        width: '75%',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    iconImage: {
        width: 40,
        height: 40,
        tintColor: '#FFD700',
        resizeMode: 'contain',
    },
    titleCard: {
        fontSize: 16,
        fontWeight: '700',
        color: '#FFD700',
    },
    descriptionCard: {
        color: '#E0E0E0',
        fontSize: 13,
    },
    dateCard: {
        color: '#B8860B',
        fontSize: 12,
        marginTop: 4,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        marginVertical: 10,
        borderRadius: 10,
    },
});
