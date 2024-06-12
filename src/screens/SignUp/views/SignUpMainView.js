import { useState } from "react";
import { Button, Dimensions, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import { register, registerWithEmailAndPassword } from "../../../redux/slices/authSlice";
import Colors from "../../../values/colors";

const SignUpMainView = (props) => {
  const {
    navigation,
    dispatch,
    selectedRole,
    // errorInput,
    validateEmail,
    handleSubmitForm,
  } = props

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [userNameTouched, setUserNameTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);

  const { loading, error } = useSelector((state) => state.auth);

  const handleNavSignIn = () => {
    navigation.navigate('Login');
  }

  const handleNavSelectRole = () => {
    navigation.navigate('ChoseRole');
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>Sign Up With {selectedRole} Account</Text>

        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Username"
              keyboardType='ascii-capable'
              value={userName}
              onChangeText={setUserName}
              onFocus={() => setUserNameTouched(true)}
            />
            {(userNameTouched && userName.length === 0) && <Text style={{fontSize: 12, color: 'red'}}>Invalid Name</Text>}
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
              onFocus={() => setEmailTouched(true)}
            />
            {(emailTouched && (email.length === 0 || !validateEmail(email))) && (<Text style={{fontSize: 12, color: 'red'}}>Invalid Email</Text>)}
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Password"
              keyboardType='default'
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              onFocus={() => setPasswordTouched(true)}
            />
            {(passwordTouched && password.length < 6) && <Text style={{fontSize: 12, color: 'red'}}>Password requires at least 6 characters</Text>}
          </View>          

          {error && <Text style={styles.error}>{error}</Text>}

          <TouchableOpacity
            style={[styles.button, loading && styles.buttonDisabled]}
            onPress={() => handleSubmitForm(userName, email, password)}
            disabled={loading}
          >
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.signUpContainer}>
          <Text>Does not have an account? </Text>
          <TouchableOpacity onPress={handleNavSignIn}>
              <Text style={styles.textSignUp}>Log In</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.selectRoleContainer}>
            <Text>Go back to select role account? </Text>
            <TouchableOpacity onPress={handleNavSelectRole}>
                <Text style={styles.textSignUp}>Select Role</Text>
            </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}

export default SignUpMainView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  signUpContainer: {
    flexDirection: 'row'
  },
  selectRoleContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  textSignUp: {
    color: Colors.primaryPupple,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 24,
    textTransform: 'capitalize',
    // color: 'black'
  },
  formContainer: {
    width: '80%',
    // backgroundColor: 'green'
  },
  inputContainer: {
    marginBottom: 12,
    // backgroundColor: 'pink'
  },
  input: {
    height: 40,
    width: Dimensions.get('window').width*0.80,
    borderRadius: 20,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 12,
  },
  button: {
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primaryPupple,
    borderRadius: 24,

  },
  buttonText: {
    fontSize: 16,
    fontWeight: '800',
    color: 'white',
  },
  error: {
    color: 'red',
    marginBottom: 12,
  },
});

