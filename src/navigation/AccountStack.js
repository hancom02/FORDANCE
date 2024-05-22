// navigation/AccountStack.js
import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AccountMainView from "../screens/Account/views/AccountMainView";
import AccountProgressView from "../screens/Account/views/AccountProgressView";
import DancePreference from '../screens/Account/views/DancePreference';
import AccoutSubView from '../screens/Account/views/AccountSubView';
import IntroduceView from '../screens/Account/views/IntroduceView';
import FeedbackView from '../screens/Account/views/FeedbackView';

const ChildStack = createNativeStackNavigator();

function AccountStack() {
    return (
        <ChildStack.Navigator initialRouteName="Account" screenOptions={{ headerShown: false }}>
            <ChildStack.Screen name="Account" component={AccountMainView} />
            <ChildStack.Screen name="Progress" component={AccountProgressView} />
            <ChildStack.Screen name="DancePreference" component={DancePreference} />
            <ChildStack.Screen name="SubView" component={AccoutSubView} />
            <ChildStack.Screen name="Introduce" component={IntroduceView} />
            <ChildStack.Screen name="Feedback" component={FeedbackView} />
        </ChildStack.Navigator>
    );
}

export default AccountStack;
