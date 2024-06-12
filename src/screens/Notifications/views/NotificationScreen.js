import React from 'react';
import { SafeAreaView, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import NotificationsList from '../component/NotificationList';
import Ionicons from 'react-native-vector-icons/Ionicons';

const notifications = [
    { id: '1', text: 'New comment on your lesson community' },
    { id: '2', text: 'New comment on your lesson community' },
    { id: '3', text: 'New comment on your lesson community' },
    { id: '4', text: 'New comment on your lesson community' },
];

const NotificationScreen = (props) => {
    const { navigation } = props;
    const handleGoBack = () => {
        navigation.goBack();
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Notifications</Text>
            </View>
            <View style={styles.separator} />
            <View style={styles.contentContainer}>
                <NotificationsList notifications={notifications} />
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        backgroundColor: '#fff',
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
        marginBottom: 10,
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',
    },
    contentContainer: {
        flex: 1,
        padding: 16,
        marginHorizontal: 10,
    },
    text: {
        fontSize: 16,
        color: 'black',
        fontWeight: '400',
        textAlign: 'justify',

    },
    separator: {
        height: 1,
        backgroundColor: 'lightgray',
        marginBottom: 10,
        elevation: 3,
    },
    textContainer: {
        flex: 1,
    },
});

export default NotificationScreen;
