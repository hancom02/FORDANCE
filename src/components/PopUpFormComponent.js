import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const PopUpFormComponent = (props) => {
    const { handleSubmit, offlinelessons } = props;
    const [instructorName, setInstructorName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [location, setLocation] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');

    return (
        <View style={styles.popUpFormContainer}>
            <Text style={styles.popUpFormTitle}>Đặt Lớp Học Trực Tiếp</Text>
            <TextInput
                style={styles.popUpFormInput}
                placeholder="Tên Giáo Viên"
                value={instructorName}
                onChangeText={setInstructorName}
            />
            <TextInput
                style={styles.popUpFormInput}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.popUpFormInput}
                placeholder="Số Điện Thoại"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
            />
            <TextInput
                style={styles.popUpFormInput}
                placeholder="Địa Điểm"
                value={location}
                onChangeText={setLocation}
            />
            <TextInput
                style={styles.popUpFormInput}
                placeholder="Thời Gian Bắt Đầu"
                value={startTime}
                onChangeText={setStartTime}
            />
            <TextInput
                style={styles.popUpFormInput}
                placeholder="Thời Gian Kết Thúc"
                value={endTime}
                onChangeText={setEndTime}
            />
            <Button title="Gửi" onPress={handleSubmit} />
        </View>
    );
};

export default PopUpFormComponent;


const styles = StyleSheet.create({
    popUpFormContainer: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
    },

    popUpFormTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 15,
    },

    popUpFormInput: {
        height: 40,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 10,
    },

    popUpFormButton: {
        backgroundColor: '#007bff',
        color: '#fff',
        padding: 10,
        borderRadius: 5,
    },
});