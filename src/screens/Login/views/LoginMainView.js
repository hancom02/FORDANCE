import { useState } from "react";
import Colors from "../../../values/colors";

const { KeyboardAvoidingView, Text, StyleSheet, View, TouchableOpacity, Dimensions, TextInput } = require("react-native");

const LoginMainView = (props) => {
    const {
        navigation,
        selectedRole,

    } = props;

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleNavSignUp = () => {
        navigation.navigate('SignUp');
    }

    return(
        <KeyboardAvoidingView style={styles.container}>
            <Text>Login Main View With Role {selectedRole}</Text>
            <View style={styles.formContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    keyboardType="email-address"
                    value={userName}
                    onChangeText={setEmail}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
            </View>
            <View style={styles.signUpContainer}>
                <Text>Does not have an account? </Text>
                <TouchableOpacity onPress={handleNavSignUp}>
                    <Text style={styles.textSignUp}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default LoginMainView

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    signUpContainer: {
        flexDirection: 'row'
    },
    formContainer: {

    },
    input: {
        height: 40,
        width: Dimensions.get('window').width*0.80,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 12,
    },
    textSignUp: {
        color: Colors.primaryPupple
    }
})