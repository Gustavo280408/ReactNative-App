import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    boxTop: {
        height: Dimensions.get('window').height / 3,
        width: '100%',
        backgroundColor: 'red'
    },
    boxMid: {
        height: Dimensions.get('window').height / 4,
        width: '100%',
        backgroundColor: 'green',
    },
    boxBotton: {
        height: Dimensions.get('window').height / 3,
        width: '100%',
        backgroundColor: 'blue'
    },
    logo: {
        width: 80,
        height: 80
    },
    text: {
        fontWeight: 'bold',
        marginTop: 48,
        fontSize: 18
    },
    titleInput: {
        marginLeft: 5,
        color: themas.colors.gray,
        marginTop: 20
    },
    boxInput: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderRadius: 40,
        marginTop: 10,
        flexDirection: 'row',
    },
    input: {
        height: '100%',
        width: "100%",
        backgroundColor: 'red',
    }
})