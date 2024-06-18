import {useEffect, useState} from 'react';
import Colors from '../../../values/colors';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
// import auth from '@react-native-firebase/auth';
import {useAuth} from '../../../stores/auth.store';
import {useMutation} from 'react-query';
import signInStudentApi from '../../../api/auth/signin';

const {
  KeyboardAvoidingView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  TextInput,
  TouchableNativeFeedback,
} = require('react-native');

const LoginMainView = props => {
  const {navigation, selectedRole, validateEmail, handleSignIn} = props;

  // const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);

  const {login} = useAuth();
  const {mutate} = useMutation({
    mutationFn: signInStudentApi,
    onError: error => {
      console.log({error});
    },
    onSuccess: (data, variables) => {
      login(
        true,
        data.id,
        variables.name,
        variables.email,
        variables.googleId,
        variables.photoUrl,
        data.access_token,
      );

      navigation.navigate('MyStudentBottomTab');
    },
  });

  const handleNavSignUp = () => {
    navigation.navigate('SignUp');
  };
  const handleNavSelectRole = () => {
    navigation.navigate('ChoseRole');
  };

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '620378991871-be0lb9capn34hea790regr0cigt3nd4j.apps.googleusercontent.com',
    });
  }, []);

  async function onGoogleButtonPress() {
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    try {
      const {idToken, user} = await GoogleSignin.signIn();

      mutate({
        googleId: user.id,
        name: user.name,
        email: user.email,
        photoUrl: user.photo,
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.textLogin}>Login With {selectedRole} Account</Text>

        {selectedRole == 'instructor' ? (
          <>
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
                {emailTouched &&
                  (email.length === 0 || !validateEmail(email)) && (
                    <Text style={{fontSize: 12, color: 'red'}}>
                      Invalid Email
                    </Text>
                  )}
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
                {passwordTouched && password.length < 6 && (
                  <Text style={{fontSize: 12, color: 'red'}}>
                    Password requires at least 6 characters
                  </Text>
                )}
              </View>
            </View>

            <TouchableOpacity
              style={styles.buttonSignIn}
              onPress={() => handleSignIn(email, password)}>
              <Text style={styles.textSignIn}>Log In</Text>
            </TouchableOpacity>

            <View style={styles.signUpContainer}>
              <Text style={{color: 'black'}}>Does not have an account? </Text>
              <TouchableOpacity onPress={handleNavSignUp}>
                <Text style={styles.textSignUp}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </>
        ) : (
          <View>
            <TouchableOpacity
              onPress={() => {
                onGoogleButtonPress();
              }}>
              <View
                style={{
                  paddingHorizontal: 16,
                  paddingVertical: 12,
                  borderRadius: 12,
                  borderWidth: 0.5,
                }}>
                <Text style={{color: 'black', fontWeight: '600'}}>
                  Sign in with Google
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        )}

        <View style={styles.selectRoleContainer}>
          <Text style={{color: 'black'}}>Go back to select role account? </Text>
          <TouchableOpacity onPress={handleNavSelectRole}>
            <Text style={styles.textSignUp}>Select Role</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginMainView;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  signUpContainer: {
    marginTop: 12,
    flexDirection: 'row',
  },
  selectRoleContainer: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textLogin: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 24,
    textTransform: 'capitalize',
    color: 'black',
  },
  formContainer: {},
  inputContainer: {
    marginBottom: 12,
    // backgroundColor: 'pink'
  },
  input: {
    height: 40,
    width: Dimensions.get('window').width * 0.8,
    borderRadius: 20,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 12,
    color: 'black',
  },
  buttonSignIn: {
    backgroundColor: Colors.primaryPupple,
    width: Dimensions.get('window').width * 0.8,
    borderRadius: 24,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textSignIn: {
    color: 'white',
    fontWeight: '800',
  },
  textSignUp: {
    color: Colors.primaryPupple,
  },
});
