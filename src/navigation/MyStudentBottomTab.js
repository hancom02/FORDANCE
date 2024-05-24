// navigation/MyStudentBottomTab.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from "../values/colors";
import HomeStack from "./HomeStack";
import LibraryStack from "./LibraryStack";
import Schedule from "../screens/Schedule";
import Account from "../screens/Account";
import AccountStack from './AccountStack';

const BottomTab = createBottomTabNavigator();

function MyStudentBottomTab() {
    return (
        <BottomTab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
            <BottomTab.Screen
                name="HomeStack"
                component={HomeStack}
                options={({ route }) => ({
                    tabBarIcon: ({ focused }) => (
                        <Ionicons name="home-outline" size={24} color={focused ? Colors.primaryPupple : 'black'} />
                    ),
                })}
            />
            <BottomTab.Screen
                name="LibraryStack"
                component={LibraryStack}
                options={{ tabBarIcon: ({ focused }) => (<Ionicons name="albums-outline" size={24} color={focused ? Colors.primaryPupple : 'black'} />) }}
            />
            <BottomTab.Screen
                name="Schedule"
                component={Schedule}
                options={{ tabBarIcon: ({ focused }) => (<Ionicons name="calendar-outline" size={24} color={focused ? Colors.primaryPupple : 'black'} />) }}
            />
            <BottomTab.Screen
                name="AccountStack"
                component={AccountStack}
                options={{ tabBarIcon: ({ focused }) => (<Ionicons name="person-outline" size={24} color={focused ? Colors.primaryPupple : 'black'} />) }}
            />
        </BottomTab.Navigator>
    );
}

export default MyStudentBottomTab;
