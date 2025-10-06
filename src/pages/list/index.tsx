import React, { useContext, useRef } from "react";
import { Text, View, FlatList, TouchableOpacity } from "react-native";
import { style } from "./styles";
import { Input } from "../../components/input";
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { Ball } from "../../components/Ball";
import { Flag } from "../../components/Flag";
import { themas } from "../../global/themes";
import { AuthContextList } from "../../context/authContext_list";
import { formatDateToBR } from "../../global/functions";
import { AuthContextType, PropCard } from "../../global/Props";
import { Swipeable } from "react-native-gesture-handler";

export default function List() {

    const { taskList } = useContext<AuthContextType>(AuthContextList)
    const swipeableRefs = useRef([])
    const renderRightActions = () => {
        return (<View style={style.button}>
            <AntDesign
                name="delete"
                size={20}
                color={'#FFF'}
            />
        </View>)
    }

    const _renderCard = (item: PropCard, index) => {
        const color = item.flag == 'Opcional' ? themas.colors.blueLight : themas.colors.red
        return (
            <Swipeable
                ref={(ref) => swipeableRefs.current[index] = ref}
                key={index}
                renderRightActions={renderRightActions}
            >
                <View style={style.card}>
                    <View style={style.rowCard}>
                        <View style={style.rowCardLeft}>
                            <Ball color={color} />
                            <View>
                                <Text style={style.titleCard}>{item.title}</Text>
                                <Text style={style.descriptionCard}>{item.description}</Text>
                                <Text style={style.descriptionCard}>Até {formatDateToBR(item.timeLimit)}</Text>
                            </View>
                        </View>
                        <Flag
                            caption={item.flag}
                            color={color} />
                    </View>
                </View>
            </Swipeable>
        )
    }
    return (
        <View style={style.container}>
            <View style={style.header}>
                <Text style={style.greeting}>Bom dia,
                    <Text style={{ fontWeight: 'bold' }}> Leonardo Pires</Text></Text>
                <View style={style.boxInput}>
                    <Input
                        IconLeft={MaterialIcons}
                        IconLeftName="search"
                    />
                </View>
            </View>
            <View style={style.boxList}>
                <FlatList
                    data={taskList}
                    style={{ marginTop: 40, paddingHorizontal: 30 }}
                    keyExtractor={(item, index) => item.item.toString()}
                    renderItem={({ item, index }) => { return (_renderCard(item, index)) }}
                />
            </View>
        </View>
    )
}