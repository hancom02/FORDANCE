import React, { useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "./screens/Splash";
import Login from "./screens/Login";
import HomeStack from "./navigation/HomeStack";
import LibraryStack from "./navigation/LibraryStack";
import AccountStack from "./navigation/AccountStack";
import MyStudentBottomTab from "./navigation/MyStudentBottomTab";
import MyInstructorBottomTab from "./navigation/MyInstructorBottomTab";
import Lesson from './screens/Lesson';
import Program from './screens/Program';
import InstructorDetailView from './screens/Instructor/views/InstructureDetailView';
import { Provider } from 'react-redux';
import store from './redux/store';
import SignUp from './screens/SignUp';
import ChoseRole from './screens/ChoseRole';
import Community from './screens/Community';
import NotificationScreen from './screens/Notifications/views/NotificationScreen';
import InstructorProgram from './screens/InstructorProgram';
import Search from './screens/Search';

const Stack = createNativeStackNavigator();

export default function App() {
    const [selectedRole, setSelectedRole] = useState(null);
    const handleRoleSelection = (role) => {
        setSelectedRole(role);
    };

    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Splash" component={Splash} />
                    <Stack.Screen name="ChoseRole">
                        {(props) => <ChoseRole {...props} onSelectRole={handleRoleSelection} />}
                    </Stack.Screen>
                    <Stack.Screen name="Login">
                        {(props) => <Login {...props} selectedRole={selectedRole} />}
                    </Stack.Screen>
                    <Stack.Screen name="SignUp">
                        {(props) => <SignUp {...props} selectedRole={selectedRole} />}
                    </Stack.Screen>
                    {selectedRole === 'student' ? (
                        <>
                            <Stack.Screen name="MyStudentBottomTab" component={MyStudentBottomTab} />
                            <Stack.Screen name="HomeStack" component={HomeStack} />
                            <Stack.Screen name="LibraryStack" component={LibraryStack} />
                            <Stack.Screen name="AccountStack" component={AccountStack} />
                            <Stack.Screen name="Search" component={Search} />
                            <Stack.Screen name="Lesson" component={Lesson} />
                            <Stack.Screen name="Program" component={Program} />
                            <Stack.Screen name="Community" component={Community} />
                            <Stack.Screen name="InstructorDetailView" component={InstructorDetailView} />
                            <Stack.Screen name="Notifications" component={NotificationScreen} />
                        </>
                    ) : selectedRole === 'instructor' ? (
                        <>
                            <Stack.Screen name="MyInstructorBottomTab" component={MyInstructorBottomTab} />
                            <Stack.Screen name="Lesson" component={Lesson} />
                            <Stack.Screen name="InstructorProgram" component={InstructorProgram} />
                            <Stack.Screen name="Community" component={Community} />
                            <Stack.Screen name="Notifications" component={NotificationScreen} />
                            <Stack.Screen name="Search" component={Search} />

                        </>
                    ) : null}
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
