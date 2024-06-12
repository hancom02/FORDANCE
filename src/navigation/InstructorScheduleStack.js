// navigation/LibraryStack.js
import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import InstructorSchedule from '../screens/InstructorSchedule';
import RegisterList from '../screens/InstructorSchedule/component/RegisterList';
import AddNewOfflineClass from '../screens/InstructorSchedule/component/AddNewOfflineClass';

const Stack = createNativeStackNavigator();

function InstructorScheduleStack() {
    return (
        <Stack.Navigator initialRouteName="InstructorScheduleStack" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="InstructorSchedule" component={InstructorSchedule} />
            <Stack.Screen name="RegisterList" component={RegisterList} />
            <Stack.Screen name="AddNewClass" component={AddNewOfflineClass} />
        </Stack.Navigator>
    );
}

export default InstructorScheduleStack;
