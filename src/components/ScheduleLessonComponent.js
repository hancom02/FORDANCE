import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DateTimePicker from '@react-native-community/datetimepicker';

const parseDate = (dateString) => {
    const [day, month, year] = dateString.split('/').map(Number);
    return new Date(year, month - 1, day);
};

const formatDate = (date) => {
    return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
};

const ScheduleLessonComponent = (props) => {
    const {
        handleSubmit,
        offlinelessons,
        handleCloseModal
    } = props;

    const [editingMode, setEditingMode] = useState(false);
    const [editedEmail, setEditedEmail] = useState(offlinelessons.instructorEmail);
    const [editedPhoneNumber, setEditedPhoneNumber] = useState(offlinelessons.instructorPhone);
    const [editedLocation, setEditedLocation] = useState(offlinelessons.location);
    const [editedStartDate, setEditedStartDate] = useState(parseDate(offlinelessons.startDate));
    const [editedEndDate, setEditedEndDate] = useState(offlinelessons.endDate ? parseDate(offlinelessons.endDate) : null);
    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [showStartDatePicker, setShowStartDatePicker] = useState(false);
    const [showEndDatePicker, setShowEndDatePicker] = useState(false);

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePhoneNumber = (number) => {
        const phoneRegex = /^\d{9,10}$/; // Check if phone number is 9 or 10 digits
        return phoneRegex.test(number);
    };

    const handleEdit = () => {
        setEditingMode(true);
    };

    const handleSave = () => {
        if (!editedEmail || !editedPhoneNumber || !editedLocation) {
            if (!editedEmail) {
                alert('Email is required.');
            }
            if (!editedPhoneNumber) {
                alert('Phone number is required.');
            }
            if (!editedLocation) {
                alert('Location is required.');
            }
            return;
        }
        if (editedStartDate >= editedEndDate) {
            alert('Start date must be earlier than end date.');
            return;
        }
        handleSubmit({
            ...offlinelessons,
            instructorEmail: editedEmail,
            instructorPhone: editedPhoneNumber,
            location: editedLocation,
            startDate: formatDate(editedStartDate),
            endDate: editedEndDate ? formatDate(editedEndDate) : null
        });
        setEditingMode(false);
    };

    const handleEmailChange = (email) => {
        setEditedEmail(email);
        if (!validateEmail(email)) {
            setEmailError('Invalid email format.');
        } else {
            setEmailError('');
        }
    };

    const handlePhoneChange = (phone) => {
        setEditedPhoneNumber(phone);
        if (!validatePhoneNumber(phone)) {
            setPhoneError('Phone number must be 9 or 10 digits.');
        } else {
            setPhoneError('');
        }
    };

    const handleLocationChange = (location) => {
        setEditedLocation(location);
    };

    const onChangeStartDate = (event, selectedDate) => {
        const currentDate = selectedDate || editedStartDate;
        if (editedEndDate && currentDate >= editedEndDate) {
            Alert.alert('Invalid Date', 'Start date must be earlier than end date.');
        } else {
            setShowStartDatePicker(false);
            setEditedStartDate(currentDate);
        }
    };

    const onChangeEndDate = (event, selectedDate) => {
        const currentDate = selectedDate || editedEndDate;
        if (currentDate && currentDate <= editedStartDate) {
            Alert.alert('Invalid Date', 'End date must be later than start date.');
        } else {
            setShowEndDatePicker(false);
            setEditedEndDate(currentDate);
        }
    };

    return (
        <SafeAreaView style={styles.popUpFormContainer}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>OFFLINE CLASS INFORMATION</Text>
                <TouchableOpacity onPress={handleCloseModal} style={styles.closeButton}>
                    <Ionicons name="close-outline" size={30} color="black" />
                </TouchableOpacity>
            </View>
            <ScrollView style={{ flexGrow: 1 }}>
                <Text style={styles.sectionTitle}>CLASS INFORMATION</Text>
                <Text style={styles.infoNameText}>{offlinelessons.title}</Text>
                <View style={styles.infoContainer}>
                    <Text style={styles.infoLabelText}>Instructor:</Text>
                    <Text style={styles.infoText}>{offlinelessons.instructor}</Text>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.infoLabelText}>Email:</Text>
                    {editingMode ? (
                        <TextInput
                            style={[styles.infoText, styles.editableInput]}
                            value={editedEmail}
                            onChangeText={handleEmailChange}
                            keyboardType="email-address"
                        />
                    ) : (
                        <Text style={styles.infoText}>{offlinelessons.instructorEmail}</Text>
                    )}
                </View>
                {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
                <View style={styles.infoContainer}>
                    <Text style={styles.infoLabelText}>Phone:</Text>
                    {editingMode ? (
                        <TextInput
                            style={[styles.infoText, styles.editableInput]}
                            value={editedPhoneNumber}
                            onChangeText={handlePhoneChange}
                            keyboardType="phone-pad"
                        />
                    ) : (
                        <Text style={styles.infoText}>{offlinelessons.instructorPhone}</Text>
                    )}
                </View>
                {phoneError ? <Text style={styles.errorText}>{phoneError}</Text> : null}
                <View style={styles.infoContainer}>
                    <Ionicons name="location-outline" size={20} color="black" />
                    {editingMode ? (
                        <TextInput
                            style={[styles.infoText, styles.editableInput]}
                            value={editedLocation}
                            onChangeText={handleLocationChange}
                        />
                    ) : (
                        <Text style={styles.infoText}>{offlinelessons.location}</Text>
                    )}
                </View>
                <View style={styles.infoContainer}>
                    <Ionicons name="calendar-outline" size={20} color="black" />
                    {editingMode ? (
                        <TouchableOpacity onPress={() => setShowStartDatePicker(true)}>
                            <Text style={styles.infoText}>{formatDate(editedStartDate)}</Text>
                        </TouchableOpacity>
                    ) : (
                        <Text style={styles.infoText}>{offlinelessons.startDate}</Text>
                    )}
                    {showStartDatePicker && (
                        <DateTimePicker
                            value={editedStartDate}
                            mode="date"
                            display="default"
                            onChange={onChangeStartDate}
                        />
                    )}
                </View>
                <View style={styles.infoContainer}>
                    <Ionicons name="calendar-outline" size={20} color="black" />
                    {editingMode ? (
                        <TouchableOpacity onPress={() => setShowEndDatePicker(true)}>
                            <Text style={styles.infoText}>{editedEndDate ? formatDate(editedEndDate) : 'Select end date'}</Text>
                        </TouchableOpacity>
                    ) : (
                        <Text style={styles.infoText}>{offlinelessons.endDate || ''}</Text>
                    )}
                    {showEndDatePicker && (
                        <DateTimePicker
                            value={editedEndDate || new Date()}
                            mode="date"
                            display="default"
                            onChange={onChangeEndDate}
                        />
                    )}
                </View>
            </ScrollView>
            <TouchableOpacity style={styles.editButton} onPress={editingMode ? handleSave : handleEdit}>
                <Text style={styles.editButtonText}>{editingMode ? 'Save' : 'Edit'}</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    popUpFormContainer: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
        borderRadius: 10,
        width: '100%',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    headerTitle: {
        flex: 1,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
    closeButton: {
        position: 'absolute',
        right: 0,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'black',
    },
    infoNameText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'black',
    },
    infoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    infoLabelText: {
        fontWeight: 'bold',
        marginRight: 5,
        color: 'black',
    },
    infoText: {
        flex: 1,
        color: 'black',
    },
    editableInput: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    editButton: {
        backgroundColor: '#007bff',
        padding: 10,
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 10,
    },
    editButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    errorText: {
        color: 'red',
        fontSize: 12,
        marginBottom: 10,
    },
});

export default ScheduleLessonComponent;
