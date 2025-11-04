import React, { useContext } from "react";
import { View, TouchableOpacity } from "react-native";
import { AntDesign, FontAwesome, Entypo } from '@expo/vector-icons';
import { AuthContextList } from "../../context/authContext_list";
import { style } from "./styles";

export default ({ state, navigation }: any) => {
    const { onOpen } = useContext<any>(AuthContextList);

    const go = (screenName: string) => {
        navigation.navigate(screenName);
    }

    return (
        <View style={style.tabArea}>
            <TouchableOpacity style={style.tabItem} onPress={() => go("List")}>
               <AntDesign
                   name="bars"
                   style={{
                       opacity: state.index === 0 ? 1 : 0.6,
                       color: state.index === 0 ? '#FFD700' : '#B8860B',
                       fontSize: 30,
                   }}
               />
            </TouchableOpacity>

            <TouchableOpacity style={style.tabItemButton} onPress={() => onOpen()}>
                <View style={style.centerButton}>
                    <Entypo name="plus" size={40} color="#0D0D0D" />
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={style.tabItem} onPress={() => go("User")}>
                <FontAwesome
                    name="user"
                    style={{
                        opacity: state.index === 1 ? 1 : 0.6,
                        color: state.index === 1 ? '#FFD700' : '#B8860B',
                        fontSize: 30,
                    }}
                />
            </TouchableOpacity>
        </View>
    )
}