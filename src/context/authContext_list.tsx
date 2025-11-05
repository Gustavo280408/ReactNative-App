import React, { createContext, useContext, useRef, useEffect, useState } from "react";
import {
    Alert,
    Dimensions, KeyboardAvoidingView, Platform, StyleSheet, Text, TouchableOpacity,
    View
} from "react-native";
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import { Modalize } from "react-native-modalize";
import { Input } from "../components/input";
import { themas } from "../global/themes";
import { Flag } from "../components/Flag";
import CustomDateTimePicker from "../components/CustomDateTimePicker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { PropCard } from "../global/Props";

export const AuthContextList: any = createContext({});

const flags = [
    { caption: 'Reunião', color: themas.colors.red },
    { caption: 'Sessão', color: themas.colors.blueLight },
    { caption: 'Intervalo', color: themas.colors.yellow },
    { caption: 'Estudos', color: themas.colors.green },
];


export const AuthProviderList = (props: any): any => {

    const modalizeRef = useRef<Modalize>(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [selectedFlag, setSelectedFlag] = useState('Audiência');
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showTimePicker, setShowTimePicker] = useState(false);
    const [item, setItem] = useState(0);
    const [taskList, setTaskList] = useState<Array<PropCard>>([]);
    const [taskListBackup, setTaskListBackup] = useState([]);


    const onOpen = () => {
        modalizeRef?.current?.open();

    }
    const onClose = () => {
        modalizeRef?.current?.close();
    }

    useEffect(() => {
        get_taskList()
    }, []);

    const _renderFlags = () => {
        return flags.map((item, index) => (
            <TouchableOpacity
                key={index}
                onPress={() => setSelectedFlag(item.caption)}
                style={{
                    flex: 1, // Faz cada botão ocupar o mesmo espaço
                    marginHorizontal: 5, // Pequeno espaçamento entre os botões
                    borderWidth: 2,
                    borderColor: item.caption === selectedFlag ? '#FFD700' : '#B8860B',
                    borderRadius: 12,
                    paddingVertical: 6,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: item.caption === selectedFlag ? '#1A1A1A' : '#0D0D0D',
                }}
            >
                <Text style={{
                    color: '#FFD700',
                    fontWeight: item.caption === selectedFlag ? '700' : '600',
                    fontSize: 13,
                    textAlign: 'center',
                }}>
                    {item.caption}
                </Text>
            </TouchableOpacity>
        ));
    };


    const handleDateChange = (date) => {
        setSelectedDate(date);
    }
    const handleTimeChange = (date) => {
        setSelectedTime(date);
    }

    const handleSave = async () => {
        if (!title || !description || !selectedFlag) {
            return Alert.alert('Atenção', 'Preencha os campos corretamente!');
        }
        try {
            const newItem = {
                item: item !== 0 ? item : Date.now(),
                title,
                description,
                flag: selectedFlag,
                timeLimit: new Date(
                    selectedDate.getFullYear(),
                    selectedDate.getMonth(),
                    selectedDate.getDate(),
                    selectedTime.getHours(),
                    selectedTime.getMinutes()
                ).toISOString(),
            }
            const storageData = await AsyncStorage.getItem('taskList');
            //console.log(storageData)
            let taskList: Array<any> = storageData ? JSON.parse(storageData) : [];

            const itemIndex = taskList.findIndex((task) => task.item === newItem.item)

            if (itemIndex >= 0) {
                taskList[itemIndex] = newItem
            } else {
                taskList.push(newItem)
            }

            await AsyncStorage.setItem('taskList', JSON.stringify(taskList))

            setTaskList(taskList)
            setTaskListBackup(taskList)
            setData()
            onClose()

        } catch (error) {
            console.log("Erro ao salvar o item", error)
        }

    }
    const setData = () => {
        setTitle('')
        setDescription(''),
            setSelectedFlag('Urgente'),
            setItem(0)
        setSelectedDate(new Date())
        setSelectedTime(new Date())
    }

    async function get_taskList() {
        try {
            const storageData = await AsyncStorage.getItem('taskList');
            const taskList = storageData ? JSON.parse(storageData) : []
            setTaskList(taskList)
            setTaskListBackup(taskList)

        } catch (error) {
            console.log(error)
        }

    }

    const handleDelete = async (itemToDelete) => {
        try {
            const StorageData = await AsyncStorage.getItem('taskList')
            const taskList: Array<any> = StorageData ? JSON.parse(StorageData) : []

            const updatedTaskList = taskList.filter(item => item.item !== itemToDelete.item)

            await AsyncStorage.setItem('taskList', JSON.stringify(updatedTaskList))
            setTaskList(updatedTaskList)
            setTaskListBackup(updatedTaskList)

        } catch (error) {
            console.log("Erro ao excluir o item", error)
        }
    }

    const handleEdit = async (itemToEdit: PropCard) => {
        try {
            setTitle(itemToEdit.title)
            setDescription(itemToEdit.description)
            setItem(itemToEdit.item)
            setSelectedFlag(itemToEdit.flag)

            const timeLimit = new Date(itemToEdit.timeLimit);
            setSelectedDate(timeLimit)
            setSelectedTime(timeLimit)

            onOpen()

        } catch (error) {
            console.log('Erro ao editar')
        }
    }

    const filter = (t: string) => {
        const array = taskListBackup
        const campos = ['title', 'description']

        if (t) {
            // Limpar espacos e letra maiuscula ignorada na hora de procurar
            const searchTerm = t.trim().toLowerCase();
            const FilteredArray = array.filter((item) => {
                for (let i = 0; i < campos.length; i++) {
                    // Ele busca como é digitado e acha ignorando uppercase e espacos,
                    // Busca exatamente como esta
                    if (item[campos[i]].trim().toLowerCase().includes(searchTerm))
                        return true
                }
            })

            setTaskList(FilteredArray)
        } else {
            setTaskList(array)
        }
    }

    const _container = () => {
        return (
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >

                <View style={styles.header}>
                    <TouchableOpacity onPress={() => onClose()}>
                        <MaterialIcons
                            name="close"
                            size={30}
                            color="#B8860B" // Dourado escuro - para o botão de fechar
                        />
                    </TouchableOpacity>

                    <Text style={styles.title}>Criar Tarefa</Text>

                    <TouchableOpacity onPress={() => handleSave()}>
                        <AntDesign
                            name="check"
                            size={30}
                            color="#FFD700" // Dourado claro - para o botão de confirmar
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.content}>
                    <Input
                        title="Titulo"
                        labelStyle={styles.label}
                        value={title}
                        onChangeText={setTitle}
                    />
                    <Input
                        title="Descrição"
                        labelStyle={styles.label}
                        height={100}
                        multiline
                        numberOfLines={5}
                        value={description}
                        onChangeText={setDescription}
                        textAlignVertical="top"
                    />
                </View>
                <View style={{ width: '40%' }}>
                    {/* <Input
                        title="Tempo limite:"
                        labelStyle={styles.label}
                    /> */}
                    <View style={{ flexDirection: 'row', gap: 10, width: '100%' }}>
                        <TouchableOpacity onPress={() => setShowDatePicker(true)} style={{ width: 200 }}>
                            <Input
                                title="Data Limite"
                                labelStyle={styles.label}
                                editable={false}
                                value={selectedDate.toLocaleDateString('pt-BR')}
                                onPress={() => setShowDatePicker(true)}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: 120 }} onPress={() => setShowTimePicker(true)}>
                            <Input
                                title="Hora Limite"
                                labelStyle={styles.label}
                                editable={false}
                                value={selectedTime.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                                onPress={() => setShowTimePicker(true)}
                            />
                        </TouchableOpacity>
                    </View>
                    <CustomDateTimePicker
                        onDateChange={handleDateChange}
                        setShow={setShowDatePicker}
                        show={showDatePicker}
                        type={'date'}
                    />
                    <CustomDateTimePicker
                        onDateChange={handleTimeChange}
                        setShow={setShowTimePicker}
                        show={showTimePicker}
                        type={'time'}
                    />
                </View>
                <View style={styles.containerFlag}>
                    <Text style={styles.label}>Flags:</Text>
                    <View style={styles.rowFlags}>
                        {_renderFlags()}
                    </View>
                </View>
            </KeyboardAvoidingView>
        )
    }
    return (
        <AuthContextList.Provider value={{ onOpen, taskList, handleDelete, handleEdit, filter }}>
            {props.children}
            <Modalize
                ref={modalizeRef}
                adjustToContentHeight={true}
                modalStyle={{
                    backgroundColor: '#0D0D0D', // Preto profundo
                    borderTopLeftRadius: 25,
                    borderTopRightRadius: 25,
                }}
                childrenStyle={{
                    backgroundColor: '#0D0D0D', // Preto também no conteúdo
                    height: Dimensions.get('window').height / 1.3,
                }}
            >
                {_container()}
            </Modalize>

        </AuthContextList.Provider>
    )
}

export const useAuth = () => useContext(AuthContextList);
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0D0D0D', // Preto profundo
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderColor: '#B8860B', // dourado suave
        marginBottom: 16,
    },
    title: {
        fontSize: 22,
        fontWeight: '700',
        color: '#FFD700', // dourado brilhante
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
    content: {
        width: '100%',
        backgroundColor: '#1A1A1A', // Preto médio
        borderRadius: 16,
        padding: 18,
        shadowColor: '#FFD700',
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
        marginBottom: 20,
    },
    label: {
        fontWeight: '600',
        color: '#FFD700',
        fontSize: 15,
        marginBottom: 6,
    },
    containerFlag: {
        width: '100%',
        backgroundColor: '#1A1A1A',
        borderRadius: 16,
        padding: 18,
        marginTop: 20,
        shadowColor: '#FFD700',
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
    },
    rowFlags: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 12,
        marginTop: 10,
    },
    inputContainer: {
        backgroundColor: '#0D0D0D',
        borderWidth: 1,
        borderColor: '#FFD700',
        borderRadius: 12,
        padding: 12,
        marginBottom: 12,
    },
    dateTimeRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 10,
        marginTop: 10,
    },
    buttonPrimary: {
        backgroundColor: '#FFD700',
        paddingVertical: 12,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        shadowColor: '#FFD700',
        shadowOpacity: 0.4,
        shadowRadius: 10,
        elevation: 5,
    },
    buttonPrimaryText: {
        color: '#0D0D0D',
        fontWeight: '700',
        fontSize: 16,
        letterSpacing: 0.5,
    },
    separator: {
        width: '100%',
        height: 1,
        backgroundColor: '#B8860B',
        marginVertical: 10,
    },
});