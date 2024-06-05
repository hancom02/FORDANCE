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
  } = props

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { loading, error } = useSelector((state) => state.auth);

  const handleSubmit = () => {
    dispatch(registerWithEmailAndPassword({ userName, email, password, role: selectedRole}))
    .then(() => {
      // Chuyển hướng sang trang đăng nhập sau khi đăng ký thành công
      navigation.navigate('Login');
    })
    .catch((error) => {
      // Xử lý lỗi nếu có
      console.error(error);
    });

  };

  const handleNavSignIn = () => {
    navigation.navigate('Login');
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>Sign Up</Text>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            keyboardType='ascii-capable'
            value={userName}
            onChangeText={setUserName}
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
          {error && <Text style={styles.error}>{error}</Text>}
          <TouchableOpacity
            style={[styles.button, loading && styles.buttonDisabled]}
            onPress={handleSubmit}
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
    backgroundColor: '#F5FCFF',
  },
  signUpContainer: {
    flexDirection: 'row'
  },
  textSignUp: {
    color: Colors.primaryPupple,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  formContainer: {
    width: '80%',
  },
  input: {
    height: 40,
    width: Dimensions.get('window').width*0.80,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 12,
  },
  error: {
    color: 'red',
    marginBottom: 12,
  },
});

