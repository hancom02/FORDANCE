import React from 'react';
import { SafeAreaView, View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const PopUpModalAddClass = ({ onClose }) => {
    return (
        <SafeAreaView style={styles.modalContainer}>
            <Text style={styles.title}>How to do Plete</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>LOCATION</Text>
                <TextInput style={styles.input} placeholder="Enter location" />
            </View>
            <View style={styles.row}>
                <View style={styles.timeContainer}>
                    <Text style={styles.label}>START TIME</Text>
                    <View style={styles.timeInputContainer}>
                        <TextInput style={styles.timeInput} placeholder="HH:MM" keyboardType="numeric" />
                        <Ionicons name="time-outline" size={20} color="black" />
                    </View>
                </View>
                <View style={styles.timeContainer}>
                    <Text style={styles.label}>END TIME</Text>
                    <View style={styles.timeInputContainer}>
                        <TextInput style={styles.timeInput} placeholder="HH:MM" keyboardType="numeric" />
                        <Ionicons name="time-outline" size={20} color="black" />
                    </View>
                </View>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>START DATE</Text>
                <View style={styles.dateInputContainer}>
                    <TextInput style={styles.dateInput} placeholder="DD/MM/YYYY" keyboardType="numeric" />
                    <Ionicons name="calendar-outline" size={20} color="black" />
                </View>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>END DATE</Text>
                <View style={styles.dateInputContainer}>
                    <TextInput style={styles.dateInput} placeholder="DD/MM/YYYY" keyboardType="numeric" />
                    <Ionicons name="calendar-outline" size={20} color="black" />
                </View>
            </View>
            <TouchableOpacity style={styles.completeButton} onPress={onClose}>
                <Text style={styles.completeButtonText}>COMPLETE</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: 'black',
    },
    inputContainer: {
        marginBottom: 20,
    },
    label: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
        color: 'black'
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        fontSize: 14,
        color: 'black',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    timeContainer: {
        flex: 1,
        marginRight: 10,
    },
    timeInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
    },
    timeInput: {
        flex: 1,
        fontSize: 14,
        color: 'black',
        maxWidth: 80, // Giới hạn độ dài của TextInput thời gian
    },
    dateInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
    },
    dateInput: {
        flex: 1,
        fontSize: 14,
        color: 'black',
        maxWidth: 120, // Giới hạn độ dài của TextInput ngày tháng
    },
    completeButton: {
        backgroundColor: '#c71585',
        borderRadius: 5,
        padding: 15,
        alignItems: 'center',
        marginTop: 20,
    },
    completeButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default PopUpModalAddClass;
