import { useState } from "react";
import Colors from "../../../values/colors";

const { KeyboardAvoidingView, Text, StyleSheet, View, TouchableOpacity, Dimensions, TextInput } = require("react-native");

const LoginMainView = (props) => {
    const {
        navigation,
        selectedRole,
        validateEmail,
        handleSignIn,
    } = props;

    // const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [emailTouched, setEmailTouched] = useState(false);
    const [passwordTouched, setPasswordTouched] = useState(false);

    const handleNavSignUp = () => {
        navigation.navigate('SignUp');
    }

    return(
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.textLogin}>Login With {selectedRole} Account</Text>

                <View style={styles.formContainer}>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            keyboardType="email-address"
                            value={email}
                            onChangeText={setEmail}
                            onFocus={() => setEmailTouched(true)}
                        />
                        {(emailTouched && (email.length === 0 || !validateEmail(email))) && <Text style={{fontSize: 12, color: 'red'}}>Invalid Email</Text>}
                    </View>

                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            secureTextEntry
                            value={password}
                            onChangeText={setPassword}
                            onFocus={() => setPasswordTouched(true)}
                        />
                        {(passwordTouched && password.length < 6) && <Text style={{fontSize: 12, color: 'red'}}>Password requires at least 6 characters</Text>}
                    </View>
                </View>

                <TouchableOpacity style={styles.buttonSignIn} onPress={() => handleSignIn(email, password)}>
                    <Text style={styles.textSignIn}>Sign In</Text>
                </TouchableOpacity>

                <View style={styles.signUpContainer}>
                    <Text>Does not have an account? </Text>
                    <TouchableOpacity onPress={handleNavSignUp}>
                        <Text style={styles.textSignUp}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
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
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    signUpContainer: {
        flexDirection: 'row'
    },
    textLogin: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 24,
        textTransform: 'capitalize'
    },
    formContainer: {

    },
    inputContainer: {
        marginBottom: 12,
        backgroundColor: 'pink'
    },
    input: {
        height: 40,
        width: Dimensions.get('window').width*0.80,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 12,
    },
    buttonSignIn: {
        backgroundColor: Colors.primaryPupple,
        width: Dimensions.get("window").width * 0.8,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textSignIn: {
        color: 'white',
        fontWeight: '800'
    },
    textSignUp: {
        color: Colors.primaryPupple
    }
})