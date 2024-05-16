import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

import AccountProgressView from './AccountProgressView';
import AccountSettingView from './AccountSettingView';
import AccountTopTabs from './AccountTopTab';

import Colors from "../../../values/colors"

const AccountMainView = (props) => {
    const {
        navigation,
        user,
        categories,
    } = props;

    // console.log("Data: ", categories);
    const UserName = "Username";

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.userContainer}>
                <View style={styles.userInfoContainer}>
                    <View style={styles.circle}></View>
                    <Text style={styles.userName}>{UserName}</Text>
                </View>
                <TouchableOpacity style={styles.icon}>
                    <Ionicons name="settings-outline" size={30} color="black" />
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }}>
                <AccountTopTabs />
            </View>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: 'white',
    },
    screenContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    userContainer: {
        flexDirection: 'row',
        marginTop: 10,
        paddingBottom: 16,
        borderColor: 'grey',
        borderBottomWidth: 0.5,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    userInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    circle: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: 'grey',
        marginRight: 20,
        marginLeft: 16,
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: 'black',
    },
    icon: {
        marginRight: 16,
    },
    classInfoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        marginTop: 20,
    },
    classInfoItem: {
        flex: 1,
        alignItems: 'center',
    },
    boldText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    normalText: {
        fontSize: 14,
    },
});



export default AccountMainView;
