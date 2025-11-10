import React, { useContext, useRef } from "react";
import { Text, View, FlatList, TouchableOpacity, Image } from "react-native";
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

    const { taskList, handleDelete, handleEdit, filter } = useContext<AuthContextType>(AuthContextList);
    const swipeableRefs = useRef<any>([]);

    const renderRightActions = () => (
        <View style={[style.button, { backgroundColor: "#8B0000" }]}>
            <AntDesign name="delete" size={20} color={'#FFD700'} />
        </View>
    );

    const renderLeftActions = () => (
        <View style={[style.button, { backgroundColor: "#333" }]}>
            <AntDesign name="edit" size={20} color={'#FFD700'} />
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
        const normalized = flag.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

        if (normalized.includes("sessao")) return themas.colors.blueLight;
        if (normalized.includes("intervalo")) return themas.colors.yellow;
        if (normalized.includes("estudo")) return themas.colors.green;
        if (normalized.includes("reuniao")) return themas.colors.red;
        return themas.colors.red;
    };

    // 🔹 Mapeamento de imagens conforme a flag
    const getFlagImage = (flag: string | undefined) => {
        if (!flag) return "https://cdn-icons-png.flaticon.com/512/566/566985.png";

        const normalized = flag.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

        if (normalized.includes("sessao"))
            return "https://cdn-icons-png.flaticon.com/512/2991/2991106.png"; // Ícone de sessão
        if (normalized.includes("intervalo"))
            return "https://cdn-icons-png.flaticon.com/512/1048/1048946.png"; // Ícone de pausa
        if (normalized.includes("estudo"))
            return "https://cdn-icons-png.flaticon.com/512/3135/3135755.png"; // Ícone de livro
        if (normalized.includes("reuniao"))
            return "https://cdn-icons-png.flaticon.com/512/747/747310.png"; // Ícone de reunião

        return "https://cdn-icons-png.flaticon.com/512/566/566985.png";
    };

    const _renderCard = (item: PropCard, index: number) => {
        const color = getFlagColor(item.flag);
        const image = getFlagImage(item.flag);

        return (
            <Swipeable
                ref={(ref) => (swipeableRefs.current[index] = ref)}
                key={index}
                renderRightActions={renderRightActions}
                renderLeftActions={renderLeftActions}
                onSwipeableOpen={(direction) => handleSwipeOpen(direction, item, index)}
            >
                <View style={style.card}>
                    <View style={style.rowCard}>
                        <View style={style.rowCardLeft}>
                            <Image source={{ uri: image }} style={style.iconImage} />
                            <View>
                                <Text style={style.titleCard}>{item.title}</Text>
                                <Text style={style.descriptionCard}>{item.description}</Text>
                                <Text style={style.dateCard}>Até {formatDateToBR(item.timeLimit)}</Text>
                            </View>
                        </View>
                        <Flag caption={item.flag} color={color} />
                    </View>
                </View>
            </Swipeable>
        );
    };

    return (
        <View style={style.container}>
            <View style={style.header}>
                <View style={style.boxInput}>
                    <Input
                        IconLeft={MaterialIcons}
                        IconLeftName="search"
                        onChangeText={(t) => filter(t)}
                        placeholder="Buscar tarefa..."
                    />
                </View>
            </View>

            <View style={style.boxList}>
                <FlatList
                    data={taskList}
                    style={{ marginTop: 30, paddingHorizontal: 20 }}
                    keyExtractor={(item) => item.item.toString()}
                    renderItem={({ item, index }) => _renderCard(item, index)}
                />
            </View>
        </View>
    );
}
