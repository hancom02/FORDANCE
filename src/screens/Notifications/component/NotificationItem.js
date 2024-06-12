// NotificationItem.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NotificationItem = ({ text }) => (
    <View style={styles.notificationItem}>
        <Text style={styles.notificationText}>{text}</Text>
    </View>
);

const styles = StyleSheet.create({
    notificationItem: {
        backgroundColor: '#f5f5f5',
        padding: 16,
        marginVertical: 8,
        borderRadius: 8,
        elevation: 1,
    },
    notificationText: {
        fontSize: 16,
        color: 'black'
    },
});

export default NotificationItem;
