// navigation/LibraryStack.js
import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Library from "../screens/Library";
import Category from "../screens/Category";
import CategoryDetail from "../screens/Category/views/CategoryDetail";
import Community from '../screens/Community';

const ChildStack = createNativeStackNavigator();

function LibraryStack() {
    return (
        <ChildStack.Navigator initialRouteName="Library" screenOptions={{ headerShown: false }}>
            <ChildStack.Screen name="Library" component={Library} />
            <ChildStack.Screen name="Category" component={Category} />
            <ChildStack.Screen name="CategoryDetail" component={CategoryDetail} />
        </ChildStack.Navigator>
    );
}

export default LibraryStack;
