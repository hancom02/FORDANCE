// import NetInfo, {useNetInfo} from '@react-native-community/netinfo';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {Provider} from 'react-redux';
import AccountStack from './navigation/AccountStack';
import HomeStack from './navigation/HomeStack';
import LibraryStack from './navigation/LibraryStack';
import MyInstructorBottomTab from './navigation/MyInstructorBottomTab';
import MyStudentBottomTab from './navigation/MyStudentBottomTab';
import store from './redux/store';
import ChoseRole from './screens/ChoseRole';
import Community from './screens/Community';
import InstructorDetailView from './screens/Instructor/views/InstructureDetailView';
import InstructorProgram from './screens/InstructorProgram';
import Lesson from './screens/Lesson';
import Login from './screens/Login';
import NotificationScreen from './screens/Notifications/views/NotificationScreen';
import Program from './screens/Program';
import Search from './screens/Search';
import SignUp from './screens/SignUp';
import Splash from './screens/Splash';
import {useNetwork} from './stores/network.store';
import {QueryClient, QueryClientProvider} from 'react-query';

const Stack = createNativeStackNavigator();

export default function App() {
  const [selectedRole, setSelectedRole] = useState(null);
  const handleRoleSelection = role => {
    setSelectedRole(role);
  };
  // const {details} = useNetInfo();
  const {setIp} = useNetwork();

  useEffect(() => {
    (async () => {
      console.log(process.env);
      // console.log({AWS_S3_SECRET_ACCESS_KEY});
    })();
  }, []);

  return (
    <QueryClientProvider client={new QueryClient()}>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="ChoseRole">
              {props => (
                <ChoseRole {...props} onSelectRole={handleRoleSelection} />
              )}
            </Stack.Screen>
            <Stack.Screen name="Login">
              {props => <Login {...props} selectedRole={selectedRole} />}
            </Stack.Screen>
            <Stack.Screen name="SignUp">
              {props => <SignUp {...props} selectedRole={selectedRole} />}
            </Stack.Screen>
            <Stack.Screen
              name="MyInstructorBottomTab"
              component={MyInstructorBottomTab}
            />
            <Stack.Screen
              name="MyStudentBottomTab"
              component={MyStudentBottomTab}
            />
            <Stack.Screen name="Lesson" component={Lesson} />
            <Stack.Screen
              name="InstructorProgram"
              component={InstructorProgram}
            />
            <Stack.Screen name="Community" component={Community} />
            <Stack.Screen name="Program" component={Program} />
            {selectedRole === 'student' ? (
              <>
                <Stack.Screen name="HomeStack" component={HomeStack} />
                <Stack.Screen name="LibraryStack" component={LibraryStack} />
                <Stack.Screen name="AccountStack" component={AccountStack} />
                <Stack.Screen name="Search" component={Search} />
                <Stack.Screen
                  name="InstructorDetailView"
                  component={InstructorDetailView}
                />
                <Stack.Screen
                  name="Notifications"
                  component={NotificationScreen}
                />
              </>
            ) : selectedRole === 'instructor' ? (
              <>
                <Stack.Screen
                  name="Notifications"
                  component={NotificationScreen}
                />
                <Stack.Screen name="Search" component={Search} />
              </>
            ) : null}
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </QueryClientProvider>
  );
}
