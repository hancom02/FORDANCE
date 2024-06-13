import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, FlatList, TextInput, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DateTimePicker from '@react-native-community/datetimepicker';

const RegisterList = (props) => {
    const { navigation, route } = props;
    const { lesson } = route.params;

    const [isEditing, setIsEditing] = useState(false);
    const [location, setLocation] = useState(lesson.location);
    const [startDate, setStartDate] = useState(new Date(lesson.startDate));
    const [endDate, setEndDate] = useState(lesson.endDate ? new Date(lesson.endDate) : null);
    const [showStartDatePicker, setShowStartDatePicker] = useState(false);
    const [showEndDatePicker, setShowEndDatePicker] = useState(false);
    const [shouldNavigate, setShouldNavigate] = useState(false);

    const handleGoBack = () => {
        if (shouldNavigate) {
            navigation.navigate('InstructorSchedule', {
                updatedLesson: {
                    ...lesson,
                    location,
                    startDate: startDate.toISOString().split('T')[0],
                    endDate: endDate ? endDate.toISOString().split('T')[0] : null,
                }
            });
        } else {
            navigation.goBack();
        }
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        setIsEditing(false);
        setShouldNavigate(true);
    };

    const handlePress = () => {
        if (isEditing) {
            handleSave();
        } else {
            handleEdit();
        }
    };

    const onChangeStartDate = (event, selectedDate) => {
        setShowStartDatePicker(false);
        if (selectedDate && selectedDate <= endDate) {
            setStartDate(selectedDate);
        } else {
            Alert.alert("Invalid Date", "Start date must be before the end date.");
        }
    };

    const onChangeEndDate = (event, selectedDate) => {
        setShowEndDatePicker(false);
        if (selectedDate && selectedDate >= startDate) {
            setEndDate(selectedDate);
        } else if (selectedDate === null) {
            setEndDate(null);
        } else {
            Alert.alert("Invalid Date", "End date must be after the start date.");
        }
    };

    const students = [
        {
            studentName: "Hanxinkiu",
            studentEmail: "Hanxinkiu@gmail.com",
            studentPhone: "(+84) 9823538471",
        },
        {
            studentName: "Khoahandsome",
            studentEmail: "Khoahandsome@gmail.com",
            studentPhone: "(+84) 9823538471",
        },
        {
            studentName: "Hanxinkiu",
            studentEmail: "Hanxinkiu@gmail.com",
            studentPhone: "(+84) 9823538471",
        },
        {
            studentName: "Hanxinkiu",
            studentEmail: "Hanxinkiu@gmail.com",
            studentPhone: "(+84) 9823538471",
        },
        {
            studentName: "Hanxinkiu",
            studentEmail: "Hanxinkiu@gmail.com",
            studentPhone: "(+84) 9823538471",
        },
        {
            studentName: "Hanxinkiu",
            studentEmail: "Hanxinkiu@gmail.com",
            studentPhone: "(+84) 9823538471",
        },
    ];

    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Text style={styles.name}>{item.studentName}</Text>
            <Text style={styles.email}>{item.studentEmail}</Text>
            <Text style={styles.phone}>{item.studentPhone}</Text>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Registration List</Text>
                <TouchableOpacity onPress={handlePress}>
                    <Ionicons name={isEditing ? "save-outline" : "create-outline"} size={24} color="black" />
                </TouchableOpacity>
            </View>
            <View style={styles.separator} />
            <View style={styles.contentContainer}>
                <Text style={styles.lessonNameText}>{lesson.lessonName}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={styles.rowContainer}>
                        <Ionicons name="location" size={20} color="black" />
                        {isEditing ? (
                            <TextInput
                                style={styles.infoTextInput}
                                value={location}
                                onChangeText={setLocation}
                            />
                        ) : (
                            <Text style={styles.infoText}>{location}</Text>
                        )}
                    </View>
                </View>
                <View style={styles.rowContainer}>
                    <Ionicons name="calendar-number-outline" size={20} color="black" />
                    {isEditing ? (
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity onPress={() => setShowStartDatePicker(true)}>
                                <Text style={styles.infoTextInput}>
                                    {startDate.toLocaleDateString()}
                                </Text>
                            </TouchableOpacity>
                            {showStartDatePicker && (
                                <DateTimePicker
                                    testID="startDatePicker"
                                    value={startDate}
                                    mode="date"
                                    display="default"
                                    onChange={onChangeStartDate}
                                />
                            )}
                            <Text> - </Text>
                            <TouchableOpacity onPress={() => setShowEndDatePicker(true)}>
                                <Text style={styles.infoTextInput}>
                                    {endDate ? endDate.toLocaleDateString() : 'No end date'}
                                </Text>
                            </TouchableOpacity>
                            {showEndDatePicker && (
                                <DateTimePicker
                                    testID="endDatePicker"
                                    value={endDate || new Date()} // Đảm bảo không truyền vào null cho DateTimePicker
                                    mode="date"
                                    display="default"
                                    onChange={onChangeEndDate}
                                />
                            )}
                        </View>
                    ) : (
                        <Text style={styles.infoText}>
                            {startDate.toLocaleDateString()} {endDate ? `- ${endDate.toLocaleDateString()}` : ''}
                        </Text>
                    )}
                </View>
                <FlatList
                    data={students}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    backButton: {
        padding: 5,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        textTransform: 'uppercase',
    },
    separator: {
        height: 1,
        backgroundColor: '#ccc',
    },
    contentContainer: {
        flex: 1,
        padding: 16,
    },
    lessonNameText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 10,
        textAlign: 'center',
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    infoText: {
        fontSize: 14,
        color: 'black',
        marginLeft: 5,
    },
    infoTextInput: {
        fontSize: 14,
        color: 'black',
        marginLeft: 5,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        padding: 2,
    },
    itemContainer: {
        backgroundColor: 'white',
        padding: 20,
        marginVertical: 8,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 5,
    },
    email: {
        fontSize: 14,
        color: 'black',
        marginBottom: 5,
    },
    phone: {
        fontSize: 14,
        color: 'black',
        marginBottom: 5,
    },
});

export default RegisterList;
