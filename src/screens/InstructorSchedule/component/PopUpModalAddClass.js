import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const PopUpModalAddClass = ({ onClose }) => {
    const [showStartDatePicker, setShowStartDatePicker] = useState(false);
    const [showEndDatePicker, setShowEndDatePicker] = useState(false);
    const [showStartTimePicker, setShowStartTimePicker] = useState(false);
    const [showEndTimePicker, setShowEndTimePicker] = useState(false);
    const [selectedStartDate, setSelectedStartDate] = useState(new Date());
    const [selectedEndDate, setSelectedEndDate] = useState(new Date());
    const [selectedStartTime, setSelectedStartTime] = useState(new Date());
    const [selectedEndTime, setSelectedEndTime] = useState(new Date());

    const onChangeStartDate = (event, selectedDate) => {
        setShowStartDatePicker(false);
        if (selectedDate && selectedDate <= selectedEndDate) {
            setSelectedStartDate(selectedDate);
        } else {
            Alert.alert("Invalid Date", "Start date must be before the end date.");
        }
    };

    const onChangeEndDate = (event, selectedDate) => {
        setShowEndDatePicker(false);
        if (selectedDate && selectedDate >= selectedStartDate) {
            setSelectedEndDate(selectedDate);
        } else {
            Alert.alert("Invalid Date", "End date must be after the start date.");
        }
    };

    const onChangeStartTime = (event, selectedTime) => {
        setShowStartTimePicker(false);
        if (selectedTime && selectedTime <= selectedEndTime) {
            setSelectedStartTime(selectedTime);
        } else {
            Alert.alert("Invalid Time", "Start time must be before the end time.");
        }
    };

    const onChangeEndTime = (event, selectedTime) => {
        setShowEndTimePicker(false);
        if (selectedTime && selectedTime >= selectedStartTime) {
            setSelectedEndTime(selectedTime);
        } else {
            Alert.alert("Invalid Time", "End time must be after the start time.");
        }
    };

    const formatTime = (date) => {
        return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
    };

    return (
        <SafeAreaView style={styles.modalContainer}>
            <Text style={styles.title}>How to do Plete</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>LOCATION</Text>
                <TextInput style={styles.input} placeholder="Enter location" />
            </View>

            <TouchableOpacity style={styles.inputContainer} onPress={() => setShowStartDatePicker(true)}>
                <Text style={styles.label}>START DATE</Text>
                <Text style={styles.inputText}>{selectedStartDate.toLocaleDateString()}</Text>
            </TouchableOpacity>
            {showStartDatePicker && (
                <DateTimePicker
                    testID="startDatePicker"
                    value={selectedStartDate}
                    mode="date"
                    display="default"
                    onChange={onChangeStartDate}
                />
            )}

            <TouchableOpacity style={styles.inputContainer} onPress={() => setShowEndDatePicker(true)}>
                <Text style={styles.label}>END DATE</Text>
                <Text style={styles.inputText}>{selectedEndDate.toLocaleDateString()}</Text>
            </TouchableOpacity>
            {showEndDatePicker && (
                <DateTimePicker
                    testID="endDatePicker"
                    value={selectedEndDate}
                    mode="date"
                    display="default"
                    onChange={onChangeEndDate}
                />
            )}

            <TouchableOpacity style={styles.inputContainer} onPress={() => setShowStartTimePicker(true)}>
                <Text style={styles.label}>START TIME</Text>
                <Text style={styles.inputText}>{formatTime(selectedStartTime)}</Text>
            </TouchableOpacity>
            {showStartTimePicker && (
                <DateTimePicker
                    testID="startTimePicker"
                    value={selectedStartTime}
                    mode="time"
                    display="default"
                    is24Hour={true}
                    onChange={onChangeStartTime}
                />
            )}

            <TouchableOpacity style={styles.inputContainer} onPress={() => setShowEndTimePicker(true)}>
                <Text style={styles.label}>END TIME</Text>
                <Text style={styles.inputText}>{formatTime(selectedEndTime)}</Text>
            </TouchableOpacity>
            {showEndTimePicker && (
                <DateTimePicker
                    testID="endTimePicker"
                    value={selectedEndTime}
                    mode="time"
                    display="default"
                    is24Hour={true}
                    onChange={onChangeEndTime}
                />
            )}

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
        color: 'black',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        fontSize: 14,
        color: 'black',
    },
    inputText: {
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
