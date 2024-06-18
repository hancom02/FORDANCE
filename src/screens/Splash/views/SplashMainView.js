import {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from '../../../values/colors';
import {useAuth} from '../../../stores/auth.store';

const SplashMainView = props => {
  const {navigation} = props;

  const {isLogin, isStudent} = useAuth();

  useEffect(() => {
    const timer = setTimeout(() => {
      // Chuyển hướng đến màn hình HOME
      if (isLogin === false) navigation.navigate('ChoseRole');
      else if (isStudent) navigation.navigate('MyStudentBottomTab');
      else navigation.navigate('MyInstructorBottomTab');
    }, 3000); // 3000 milliseconds = 3 giây

    return () => clearTimeout(timer); // Xóa timer khi component unmounts
  }, [isLogin]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>WELCOME TO FORDANCE!</Text>
      <Text>Ở đây 3 giây nó tự sang trang Home</Text>
    </View>
  );
};

export default SplashMainView;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primaryPupple,
  },
});
