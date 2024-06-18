import {useCallback} from 'react';
import {loginWithEmailAndPassword} from '../../redux/slices/authSlice';
import Toast from 'react-native-simple-toast';
import {useSelector} from 'react-redux';
import {useAuth} from '../../stores/auth.store';
import {useMutation} from 'react-query';
import signInStudentApi, {signInInstructorApi} from '../../api/auth/signin';

const {default: LoginMainView} = require('./views/LoginMainView');

const LoginContainer = props => {
  const {navigation, selectedRole, dispatch} = props;

  const {loading, error} = useSelector(state => state.auth);

  const {login} = useAuth();
  const {mutate} = useMutation({
    mutationFn: signInInstructorApi,
    onError: error => {
      console.log({error});
      Toast.showWithGravity(
        'Sign In Failed! \nEmail or Password is not correct!',
        Toast.LONG,
        Toast.TOP,
      );
    },
    onSuccess: (data, variables) => {
      login(
        false,
        data.id,
        data.name,
        '',
        data.email,
        data.photoUrl,
        data.access_token,
      );
      Toast.showWithGravity('Sign In successsfully!', Toast.LONG, Toast.TOP);

      navigation.navigate('MyInstructorBottomTab');
    },
  });

  const validateEmail = useCallback(email => {
    console.log('IN VALIDATE EMAIL: ', email);

    const regexp = new RegExp(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
    return regexp.test(email);
  }, []);

  const handleSignIn = (email, password) => {
    let isValid = true;
    if (email.length === 0 || !validateEmail(email)) {
      isValid = false;
    }
    if (password.length < 6) {
      isValid = false;
    }

    if (isValid) {
      mutate({username: email, password});
      //   dispatch(loginWithEmailAndPassword({email, password}))
      //     .then(res => {
      //       console.log('RES OF LOGIN REQUEST: ', res);
      //       if (!res.error) {
      //         Toast.showWithGravity(
      //           'Sign In successsfully!',
      //           Toast.LONG,
      //           Toast.TOP,
      //         );
      //         if (selectedRole === 'student') {
      //           navigation.navigate('MyStudentBottomTab');
      //         } else if (selectedRole === 'instructor') {
      //           navigation.navigate('MyInstructorBottomTab');
      //         }
      //       } else {
      //         Toast.showWithGravity(
      //           'Sign In Failed! \nEmail or Password is not correct!',
      //           Toast.LONG,
      //           Toast.TOP,
      //         );
      //       }
      //     })
      //     .catch(error => {
      //       Toast.showWithGravity('Sign In failed!', Toast.LONG, Toast.TOP);
      //     });
    }
    // if (!loading && error == null) {
    //     Toast.showWithGravity(
    //         "Sign In successsfully!",
    //         Toast.LONG,
    //         Toast.TOP
    //     );
    //     if (selectedRole === "student") {
    //         navigation.navigate('MyStudentBottomTab');
    //     } else if (selectedRole === "instructor") {
    //         navigation.navigate('MyInstructorBottomTab');
    //     }
    // }
  };

  const propsMainView = {
    navigation,
    selectedRole,
    validateEmail,
    handleSignIn,
  };

  return <LoginMainView {...propsMainView} />;
};

export default LoginContainer;
