import React, { createContext, useContext, useRef } from "react";
import { Dimensions, StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native";
import { MaterialIcons, AntDesign} from '@expo/vector-icons';
import { Modalize } from "react-native-modalize";

export const AuthContextList: any = createContext({});

export const AuthProviderList = (props: any): any => {

    const modalizeRef = useRef<Modalize>(null);
    const onOpen = () => {;
        modalizeRef?.current?.open();

    }
    const _container = () => {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity>
                        <MaterialIcons 
                        name="close"
                        size={30}
                        />
                    </TouchableOpacity>
                    <Text>Criar Tarefa</Text>
                    <TouchableOpacity>
                        <AntDesign 
                        name="check"
                        size={30}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    return (
        <AuthContextList.Provider value = {{ onOpen}}>
            {props.children}
            <Modalize
            ref={modalizeRef}
            //modalHeight={Dimensions.get('window').height / 1.3}
            childrenStyle= {{height: Dimensions.get('window').height / 1.3}}
            adjustToContentHeight={true}
            >
            {_container()}
            </Modalize>
        </AuthContextList.Provider>
    )
}

export const useAuth = () => useContext(AuthContextList);
export const styles = StyleSheet.create({

})