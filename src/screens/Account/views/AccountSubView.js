import { SafeAreaView, } from "react-native-safe-area-context";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from "../../../values/colors";

const AccoutSubView = (props) => {
    const { navigation } = props;

    const handleGoBack = () => {
        navigation.goBack();
    };

    const userName = "Username";

    const handleEditAvatar = () => {
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Manage Account</Text>
            </View>
            <View style={styles.avatarContainer}>
                <View style={styles.avatar}>
                    <TouchableOpacity onPress={handleEditAvatar} style={styles.editButton}>
                        <Ionicons name="create-outline" size={24} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.touchContainer}>
                <Text style={styles.textHeader}>Username</Text>
                <View style={styles.innerContainer}>
                    <TouchableOpacity style={styles.touchItem}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={styles.bottomText}>@{userName}</Text>
                        </View>
                        <Ionicons name="chevron-forward-outline" size={20} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.touchContainer}>
                <Text style={styles.textHeader}>Email</Text>
                <View style={styles.innerContainer}>
                    <View style={styles.touchItem}>
                        <Text style={styles.bottomText}>user@gmail.com</Text>
                    </View>
                </View>
            </View>


        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
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
    },
    avatarContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: 'grey',
        marginRight: 20,
        marginLeft: 16,
        elevation: 3,
    },
    editButton: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        backgroundColor: '#7f4ecf',
        borderRadius: 20,
        padding: 5,
        elevation: 3,
    },
    touchContainer: {
        flexDirection: 'column',
        paddingHorizontal: 16,
        marginTop: 40,
    },
    innerContainer: {
        marginHorizontal: 16,
        borderRadius: 20,
    },
    touchItem: {
        marginVertical: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    textHeader: {
        marginLeft: 16,
        marginBottom: 10,
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',
    },
    bottomText: {
        fontSize: 16,
        color: 'black',
        fontWeight: '400',
    },
});

export default AccoutSubView;
