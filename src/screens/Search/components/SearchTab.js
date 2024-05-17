import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from "../../../values/colors";

const SearchTab = (props) => {
    const { onButtonPress } = props;
    const [selectedButton, setSelectedButton] = useState('Lessons');

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

        {/* <View style={styles.pageContainer}> */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.buttonContainer}>
                    {renderButton("Lessons")}
                    {renderButton("Programs")}
                </View>
            </ScrollView>
        {/* </View> */}
        </View>

    );
};

export default SearchTab;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 30,
        marginTop: 16,
        backgroundColor: 'white',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',

        // backgroundColor: 'green'
        
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    button: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginHorizontal: 5,
        borderWidth: 0.5,
        borderRadius: 5,
        borderColor: 'grey',
    },
    buttonText: {
        color: 'black',
        textTransform: 'uppercase',
        fontWeight: '700',
        fontSize: 14,
    },
    selectedButton: {
        backgroundColor: Colors.primaryPupple,
        borderColor: 'white'
    },
    selectedButtonText: {
        color: 'white',
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
