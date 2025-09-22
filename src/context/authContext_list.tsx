import React, { createContext, useContext, useRef } from "react";
import { Dimensions, Text } from "react-native";
import { Modalize } from "react-native-modalize";

export const AuthContextList: any = createContext({});

export const AuthProviderList = (props: any): any => {

    const modalizeRef = useRef<Modalize>(null);
    const onOpen = () => {;
        modalizeRef?.current?.open()
    }
    const _container = () => {
        return<Text>Ola Guys!</Text>


    }
    return (
        <AuthContextList.Provider value = {{ onOpen}}>
            {props.children}
            <Modalize
            ref={modalizeRef}
            modalHeight={Dimensions.get('window').height / 1.3}
            />
            {_container()}
        </AuthContextList.Provider>
    )
}

export const useAuth = () => useContext(AuthContextList);