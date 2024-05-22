// navigation/AccountStack.js
import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AccountMainView from "../screens/Account/views/AccountMainView";
import AccountProgressView from "../screens/Account/views/AccountProgressView";
import DancePreference from '../screens/Account/views/SettingSubview/DancePreference';
import AccoutSubView from '../screens/Account/views/SettingSubview/AccountSubView';
import IntroduceView from '../screens/Account/views/SettingSubview/IntroduceView';
import FeedbackView from '../screens/Account/views/SettingSubview/FeedbackView';
import PurchasedLessonsView from '../screens/Account/views/ProgressSubview/PurchasedLessonsView';

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
            <ChildStack.Screen name="PurchasedLessons" component={PurchasedLessonsView} />
        </ChildStack.Navigator>
    );
}

export default AccountStack;
