// navigation/HomeStack.js
import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Lesson from "../screens/Lesson";
import Program from "../screens/Program";

const ChildStack = createNativeStackNavigator();

function HomeStack() {
    return (
        <ChildStack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
            <ChildStack.Screen name="Home" component={Home} />
            {/* <ChildStack.Screen name="Lesson" component={Lesson} /> */}
            {/* <ChildStack.Screen name="Program" component={Program} /> */}
        </ChildStack.Navigator>
    );
}

export default HomeStack;
