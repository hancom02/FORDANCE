import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

const InstructorLessontab = (props) => {
    const { onButtonPress } = props;
    const [selectedButton, setSelectedButton] = useState('Community');

    const renderButton = (buttonName) => {
        const isSelected = selectedButton === buttonName;
        return (
            <TouchableOpacity
                key={buttonName}
                style={[styles.button, isSelected && styles.selectedButton]}
                onPress={() => {
                    setSelectedButton(buttonName);
                    onButtonPress(buttonName);
                }}
            >
                <Text style={[styles.buttonText, isSelected && styles.selectedButtonText]}>{buttonName}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.pageContainer}>
                <View style={styles.buttonContainer}>
                    {renderButton("Community")}
                    {renderButton("Participants")}
                </View>
            </View>
        </View>
    );
};

export default InstructorLessontab;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 40,
        // marginTop: 200,
        backgroundColor: 'white',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        // paddingHorizontal: 16,
        borderColor: 'grey',
    },
    pageContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    buttonContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',

        // backgroundColor: 'green'
    },
    button: {
        // paddingHorizontal: 10,
        width: '50%',
        paddingVertical: 5,
        marginHorizontal: 5,
        alignItems: 'center'

        // backgroundColor: 'orange'
    },
    buttonText: {
        color: 'grey',
        // textTransform: 'uppercase',
        fontWeight: '700',
        fontSize: 16,
    },
    selectedButton: {
        // backgroundColor: 'white',
        borderBottomWidth: 1.5,
        borderColor: 'black',
    },
    selectedButtonText: {
        color: 'black',
    },
    iconContainer: {
        flexDirection: 'row',
    },
    text: {
        fontSize: 20,
        fontWeight: '700',
        color: 'black',
    }
});
