import {useCallback, useState} from 'react';
import SignUpMainView from './views/SignUpMainView';
import {registerWithEmailAndPassword} from '../../redux/slices/authSlice';
import Toast from 'react-native-simple-toast';
import {useMutation} from 'react-query';
import registerInstructor from '../../api/instructor/register';

const SignUpContainer = props => {
  const {navigation, dispatch, selectedRole} = props;

  // const [errorInput, setErrorInput] = useState<errorInputRegister>({
  //     name: false,
  //     email: false,
  //     password: false,
  // });

  const {mutate} = useMutation({
    mutationFn: registerInstructor,
    onSuccess: () => {
      Toast.showWithGravity(
        'Sign up successsfully! \nPlease verify your Email before Login!',
        Toast.LONG,
        Toast.TOP,
      );
      navigation.navigate('Login');
    },
    onError: () => {
      Toast.showWithGravity('Sign up failed!', Toast.LONG, Toast.TOP);
    },
  });

  const validateEmail = useCallback(email => {
    console.log('IN VALIDATE EMAIL: ', email);

    const regexp = new RegExp(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
    return regexp.test(email);
  }, []);

  const handleSubmitForm = (userName, email, password) => {
    // const { password, email, userName } = values;
    let isValid = true;

    if (password.length === 0) {
      // setErrorInput(prev => ({ ...prev, password: true }));
      isValid = false;
    }
    if (email.length === 0 || !validateEmail(email)) {
      // setErrorInput(prev => ({ ...prev, email: true }));
      isValid = false;
    }
    if (userName.length === 0) {
      // setErrorInput(prev => ({ ...prev, name: true }));
      isValid = false;
    }

    if (isValid) {
      mutate({name: userName, username: email, email, password});

      //   dispatch(
      //     registerWithEmailAndPassword({
      //       userName,
      //       email,
      //       password,
      //       role: selectedRole,
      //     }),
      //   )
      //     .then(res => {
      //       // console.log("RES: ", res);
      //       // console.log("RES PAYLOAD: ", res.payload);

      //       // const { success, message, user } = res.payload || { success: false, message: 'registerFailMessage', user: null };
      //       // // console.log(success, message, user)
      //       // console.log("RESIGTER SUCCESS!");

      //       Toast.showWithGravity(
      //         'Sign up successsfully! \nPlease verify your Email before Login!',
      //         Toast.LONG,
      //         Toast.TOP,
      //       );
      //       navigation.navigate('Login');
      //     })
      //     .catch(error => {
      //       Toast.showWithGravity('Sign up failed!', Toast.LONG, Toast.TOP);
      //     });
    }
  };

  const propsMainView = {
    navigation,
    dispatch,
    selectedRole,
    // errorInput,
    validateEmail,
    handleSubmitForm,
  };

  return <SignUpMainView {...propsMainView} />;
};

export default SignUpContainer;
