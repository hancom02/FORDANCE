import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const RegisterList = (props) => {
    const { navigation, route } = props;
    const { lesson } = route.params;

    const handleGoBack = () => {
        navigation.goBack();
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
            <View style={styles.header} >
                <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Registration List</Text>
            </View>
            <View style={styles.separator} />
            <View style={styles.contentContainer}>
                <Text style={styles.lessonNameText}>{lesson.lessonName}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={styles.rowContainer}>
                        <Ionicons name="location" size={20} color="black" />
                        <Text style={styles.infoText}>{lesson.location}</Text>
                    </View>
                </View>
                <View style={styles.rowContainer}>
                    <Ionicons name="time-outline" size={20} color="black" />
                    <Text style={styles.infoText}>9:00 - 10:00</Text>
                </View>
                <View style={styles.rowContainer}>
                    <Ionicons name="calendar-number-outline" size={20} color="black" />
                    <Text style={styles.infoText}>
                        {lesson.startDate}{lesson.endDate ? ` - ${lesson.endDate}` : ''}
                    </Text>
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
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 20,
        marginVertical: 10,
        height: 30,
    },
    headerTitle: {
        flex: 1,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        textTransform: 'uppercase',
        alignSelf: 'center',
    },
    textHeader: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',
    },
    contentContainer: {
        flex: 1,
        padding: 16,
    },
    lessonNameText: {
        alignSelf: 'center',
        fontSize: 18,
        color: 'black',
        marginBottom: 10,
        fontWeight: 'bold',
    },
    infoText: {
        fontSize: 14,
        color: 'black',
        marginLeft: 5,
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        marginHorizontal: 10,
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
        marginBottom: 10,
        color: 'black',
    },
    email: {
        fontSize: 14,
        color: 'black',
        marginBottom: 10,
    },
    phone: {
        fontSize: 14,
        color: 'black',
        marginBottom: 10,
    },
    separator: {
        height: 1,
        backgroundColor: '#ccc',
    },
})

export default RegisterList;
