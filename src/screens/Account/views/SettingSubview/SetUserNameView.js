import React, { useState } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from "../../../../values/colors";

const SetUserNameView = (props) => {
    const { navigation } = props;
    const [name, setName] = useState('');
    const [buttonColor, setButtonColor] = useState('#DADADA');
    const [buttonTextColor, setButtonTextColor] = useState('#828282');
    const [errorMessage, setErrorMessage] = useState('');
    const isButtonDisabled = !name.trim() && !errorMessage;

    const handleGoBack = () => {
        navigation.goBack();
    };

    const handleNameChange = (text) => {
        if (text.length <= 24) {
            if (/^[a-zA-Z0-9_]*$/.test(text)) {
                setName(text);
                setErrorMessage('');
                setButtonColor(text.length > 0 ? Colors.primaryPupple : '#DADADA');
                setButtonTextColor(text.length > 0 ? 'white' : '#828282');
            } else {
                setErrorMessage('Username can only contain letters, numbers, and underscores.');
                setButtonColor(Colors.primaryPupple);
                setButtonTextColor('white');
            }
        }
    };

    const handleSetUsername = () => {
        // Handle set username logic here
        console.log("Username set:", name);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>username</Text>
            </View>
            <View style={styles.separator} />
            <View style={styles.contentContainer}>
                <Text style={styles.textHeader}>Set a username</Text>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Your username is visible publicly.</Text>
                    <Text style={styles.text}>Username can contain only letters, numbers, and underscores.</Text>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter username"
                        placeholderTextColor={'grey'}
                        value={name}
                        onChangeText={handleNameChange}
                        multiline={true}
                        textAlignVertical="top"
                        autoCapitalize="none"
                    />
                </View>
                {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
                <Text style={{ color: 'grey', fontSize: 14, alignSelf: 'flex-end', paddingRight: 5, paddingTop: 5, }}>
                    {`${name.length}/24`}
                </Text>
                <TouchableOpacity
                    style={[styles.joinClassContainer, { backgroundColor: buttonColor }]}
                    onPress={handleSetUsername}
                    disabled={isButtonDisabled}
                >
                    <Text style={[styles.textJoinLesson, { color: buttonTextColor }]}>Set username</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    textContainer: {},
    input: {
        height: 40,
        color: 'black',
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginTop: 10,
    },
    joinClassContainer: {
        height: 50,
        marginHorizontal: 10,
        marginTop: 20,
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textJoinLesson: {
        fontWeight: 'bold',
        fontSize: 16,
        letterSpacing: 2,
        textTransform: 'uppercase',
    },
    errorMessage: {
        color: 'red',
        fontSize: 14,
        marginTop: 5,
    },
});

export default SetUserNameView;
