// navigation/MyInstructorBottomTab.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from "../values/colors";
import InstructorManage from "../screens/InstructorManage";
import InstructorAccount from "../screens/InstructorAccount";
import InstructorSchedule from '../screens/InstructorSchedule';
import InstructorSettingStack from './InstructorSettingStack';

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
                name="InstructorSchedule"
                component={InstructorSchedule}
                options={{ tabBarIcon: ({ focused }) => (<Ionicons name="calendar-outline" size={24} color={focused ? Colors.primaryPupple : 'black'} />) }}
            />
            <BottomTab.Screen
                name="InstructorAccount"
                component={InstructorAccount}
                options={{ tabBarIcon: ({ focused }) => (<Ionicons name="person-outline" size={24} color={focused ? Colors.primaryPupple : 'black'} />) }}
            />
            <BottomTab.Screen
                name="InstructorSettingStack"
                component={InstructorSettingStack}
                options={{ tabBarIcon: ({ focused }) => (<Ionicons name="settings-outline" size={24} color={focused ? Colors.primaryPupple : 'black'} />) }}
            />
        </BottomTab.Navigator>
    );
}

export default MyInstructorBottomTab;
