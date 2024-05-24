// navigation/MyInstructorBottomTab.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from "../values/colors";
import InstructorManage from "../screens/InstructorManage";
import InstructorAccount from "../screens/InstructorAccount";

const BottomTab = createBottomTabNavigator();

function MyInstructorBottomTab() {
    return (
        <BottomTab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
            <BottomTab.Screen
                name="InstructorManage"
                component={InstructorManage}
                options={({ route }) => ({
                    tabBarIcon: ({ focused }) => (
                        <Ionicons name="home-outline" size={24} color={focused ? Colors.primaryPupple : 'black'} />
                    ),
                })}
            />
            <BottomTab.Screen
                name="InstructorAccount"
                component={InstructorAccount}
                options={{ tabBarIcon: ({ focused }) => (<Ionicons name="person-outline" size={24} color={focused ? Colors.primaryPupple : 'black'} />) }}
            />
        </BottomTab.Navigator>
    );
}

export default MyInstructorBottomTab;
