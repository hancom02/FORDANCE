// navigation/LibraryStack.js
import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import InstructorManage from '../screens/InstructorManage';
import PostLessonFirstView from '../screens/InstructorManage/views/Lessons/PostFirstLessonView';
import PostLessonSecondView from '../screens/InstructorManage/views/Lessons/PostSecondLessonView';


const Stack = createNativeStackNavigator();

function InstructorManageStack() {
    return (
        <Stack.Navigator initialRouteName="InstructorManageStack" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="InstructorManage" component={InstructorManage} />
            <Stack.Screen name="PostClassFirst" component={PostLessonFirstView} />
            <Stack.Screen name="PostClassSecond" component={PostLessonSecondView} />
        </Stack.Navigator>
    );
}

export default InstructorManageStack;
