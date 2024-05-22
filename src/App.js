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
import InstructorAccountMainView from './screens/InstructorAccount/views/InstructorAccountMainView';

const Stack = createNativeStackNavigator();

export default function App() {
    const [selectedRole, setSelectedRole] = useState(null);
    const handleRoleSelection = (role) => {
        setSelectedRole(role);
    };

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="Login">
                    {(props) => <Login {...props} onSelectRole={handleRoleSelection} />}
                </Stack.Screen>

                {selectedRole === 'student' ? (
                    <>
                        <Stack.Screen name="MyStudentBottomTab" component={MyStudentBottomTab} />
                        <Stack.Screen name="HomeStack" component={HomeStack} />
                        <Stack.Screen name="LibraryStack" component={LibraryStack} />
                        <Stack.Screen name="AccountStack" component={AccountStack} />
                        <Stack.Screen name="Lesson" component={Lesson} />
                        <Stack.Screen name="Program" component={Program} />
                        <Stack.Screen name="InstructorDetailView" component={InstructorAccountMainView} />
                    </>
                ) : selectedRole === 'instructor' ? (
                    <>
                        <Stack.Screen name="MyInstructorBottomTab" component={MyInstructorBottomTab} />
                    </>
                ) : null}
            </Stack.Navigator>
        </NavigationContainer>
    );
}
