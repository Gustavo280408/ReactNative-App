import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Modal, Platform, View } from "react-native";
import { style } from "./styles";

const CustomDateTimePicker = ({ type, onDateChange, show, setShow }) => {
    const [date, setDate] = useState(new Date());

    const onChange = (event, selectDate) => {
        const currentDate = selectDate || date;
        setDate(currentDate);
        setShow(false);
    }
    return (
        <Modal
        transparent={true}
        visible={show}
        onRequestClose={() => setShow(false)}
        >
            <View style={style.modalOverlay}>
                <View style={[style.container, Platform.OS === 'android' && { backgroundColor: 'transparent'}
                    
                ]}>
                    <DateTimePicker 
                    value={date}
                    mode={type}
                    display={Platform.OS === 'ios' ? 'inline' : 'default'}
                    onChange={onChange}
                    />
                </View>
            </View>
        </Modal>
    )
}

export default CustomDateTimePicker