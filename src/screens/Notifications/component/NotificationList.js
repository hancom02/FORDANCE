// NotificationsList.js
import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import NotificationItem from './NotificationItem';

const NotificationsList = ({ notifications }) => (
    <View style={styles.container}>
        <FlatList
            data={notifications}
            renderItem={({ item }) => <NotificationItem text={item.text} />}
            keyExtractor={item => item.id}
        />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
});

export default NotificationsList;
