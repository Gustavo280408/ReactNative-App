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

    const { taskList, handleDelete, handleEdit, filter } = useContext<AuthContextType>(AuthContextList)
    const swipeableRefs = useRef<any>([]);

    const renderRightActions = () => (
        <View style={style.button}>
            <AntDesign
                name="delete"
                size={20}
                color={'#FFF'}
            />
        </View>
    );

    const renderLeftActions = () => (
        <View style={[style.button, { backgroundColor: themas.colors.blueLight }]}>
            <AntDesign
                name="edit"
                size={20}
                color={'#FFF'}
            />
        </View>
    );

    const handleSwipeOpen = (direction: 'right' | 'left', item: PropCard, index: number) => {
        if (direction === 'right') {
            handleDelete(item);
        } else {
            handleEdit(item);
        }
        swipeableRefs.current[index]?.close();
    };

    // 🔹 Função para pegar a cor correta de cada flag
    const getFlagColor = (flag: string | undefined) => {
        if (!flag) return themas.colors.red;

        const normalized = flag
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase();

        if (normalized.includes("audiencia")) return themas.colors.red;
        if (normalized.includes("video") || normalized.includes("videoconferencia") || normalized.includes("videoconf"))
            return themas.colors.blueLight;
        if (normalized.includes("sessao")) return themas.colors.blueLight;
        if (normalized.includes("intervalo")) return themas.colors.yellow;
        if (normalized.includes("estudo")) return themas.colors.green;

        return themas.colors.red;
    };

    const _renderCard = (item: PropCard, index: number) => {
        const color = getFlagColor(item.flag);

        return (
            <Swipeable
                ref={(ref) => swipeableRefs.current[index] = ref}
                key={index}
                renderRightActions={renderRightActions}
                renderLeftActions={renderLeftActions}
                onSwipeableOpen={(direction) => handleSwipeOpen(direction, item, index)}
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
                            color={color}
                        />
                    </View>
                </View>
            </Swipeable>
        );
    };

    return (
        <View style={style.container}>
            <View style={style.header}>
                <Text style={style.greeting}>
                    Bom dia,
                    <Text style={{ fontWeight: 'bold' }}>Gustavo Ribeiro</Text>
                </Text>
                <View style={style.boxInput}>
                    <Input
                        IconLeft={MaterialIcons}
                        IconLeftName="search"
                        onChangeText={(t) => filter(t)}
                    />
                </View>
            </View>
            <View style={style.boxList}>
                <FlatList
                    data={taskList}
                    style={{ marginTop: 40, paddingHorizontal: 30 }}
                    keyExtractor={(item) => item.item.toString()}
                    renderItem={({ item, index }) => _renderCard(item, index)}
                />
            </View>
        </View>
    );
}