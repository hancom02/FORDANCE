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
import HistoryView from '../screens/Account/views/ProgressSubview/HistoryView';
import DownloadView from '../screens/Account/views/ProgressSubview/DownloadView';
import OfflineBookingView from '../screens/Account/views/ProgressSubview/OfflineBookingView';
import FavouritesView from '../screens/Account/views/ProgressSubview/FavourtiesView';

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
            <ChildStack.Screen name="History" component={HistoryView} />
            <ChildStack.Screen name="Download" component={DownloadView} />
            <ChildStack.Screen name="Offline Booking" component={OfflineBookingView} />
            <ChildStack.Screen name="Favourites" component={FavouritesView} />
        </ChildStack.Navigator>
    );
}

export default AccountStack;
