// navigation/LibraryStack.js
import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Library from "../screens/Library";
import Category from "../screens/Category";
import CategoryDetail from "../screens/Category/views/CategoryDetail";
import Community from '../screens/Community';
import Filter from '../screens/Filter/views/Filter';
import Search from '../screens/Search';

const ChildStack = createNativeStackNavigator();

function LibraryStack() {
    return (
        <ChildStack.Navigator initialRouteName="Library" screenOptions={{ headerShown: false }}>
            <ChildStack.Screen name="Library" component={Library} />
            <ChildStack.Screen name="Category" component={Category} />
            <ChildStack.Screen name="CategoryDetail" component={CategoryDetail} />
            <ChildStack.Screen name="Filter" component={Filter} />
            <ChildStack.Screen name="Search" component={Search} />
        </ChildStack.Navigator>
    );
}

export default LibraryStack;
