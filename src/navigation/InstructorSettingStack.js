// navigation/LibraryStack.js
import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import InstructorSetting from '../screens/InstructorSetting';
import IntroduceView from '../screens/InstructorSetting/views/IntroduceView';
import FeedbackView from '../screens/InstructorSetting/views/FeedbackView';

const Stack = createNativeStackNavigator();

function InstructorSettingStack() {
    return (
        <Stack.Navigator initialRouteName="InstructorSettingStack" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="InstructorSetting" component={InstructorSetting} />
            <Stack.Screen name="Introduce" component={IntroduceView} />
            <Stack.Screen name="Feedback" component={FeedbackView} />
        </Stack.Navigator>
    );
}

export default InstructorSettingStack;
