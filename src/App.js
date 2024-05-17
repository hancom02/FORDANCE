import { ScrollView, StyleSheet, Text, View } from "react-native";

//NAVIGATION
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

//ICON
//import from 'ionicons';
import Ionicons from 'react-native-vector-icons/Ionicons';

//SCREENS
import Home from "./screens/Home";
import Library from "./screens/Library";
import Schedule from "./screens/Schedule";
import Account from "./screens/Account";
import Splash from "./screens/Splash";
import Colors from "./values/colors";
import Lesson from "./screens/Lesson";
import Program from "./screens/Program";
import Instructor from "./screens/Instructor";

import Community from "./screens/Community"
import Category from "./screens/Category";
import CategoryDetail from "./screens/Category/views/CategoryDetail";
import LessonsSubView from "./screens/Library/views/LessonsSubView";
import ProgramsSubView from "./screens/Library/views/ProgramsSubView";
import InstructorsSubView from "./screens/Library/views/InstructorsSubView";
import CategoriesSubView from "./screens/Library/views/CategoriesSubView";
import { SafeAreaView } from "react-native-safe-area-context";
import MyHeader from "./components/MyHeader";
import LibraryHeader2 from "./components/LibraryHeader2";
import InstructorDetailView from "./screens/Instructor/views/InstructureDetailView";
import Search from "./screens/Search";
import AccountProgressView from "./screens/Account/views/AccountProgressView";
import AccountSettingView from "./screens/Account/views/AccountSettingView";
import AccountMainView from "./screens/Account/views/AccountMainView";
import AccoutSubView from "./screens/Account/views/AccountSubView";
import DancePreference from "./screens/Account/views/DancePreference";
import IntroduceView from "./screens/Account/views/IntroduceView";
import FeedbackView from "./screens/Account/views/FeedbackView";
import SetUserNameView from "./screens/Account/views/SetUserNameView";


const Stack = createNativeStackNavigator();
const ChildStack = createNativeStackNavigator();

const BottomTab = createBottomTabNavigator();

const LibraryTopTab = createMaterialTopTabNavigator();


function HomeStack() {
    return (
        <ChildStack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false
            }}
        >
            <ChildStack.Screen
                name="Home"
                component={Home}
            />
            <ChildStack.Screen
                name="Lesson"
                component={Lesson}
                options={{

                }}
            />
            <ChildStack.Screen
                name="Program"
                component={Program}
            />
        </ChildStack.Navigator>
    )
}

function LibraryTopTabNavigator() {
    return (

        <LibraryTopTab.Navigator
            screenOptions={{
                tabBarStyle: [styles.containerStyle],
                // tabBarIndicatorStyle: styles.childIndicator,
                tabBarLabelStyle: styles.label,
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: 'black'
            }}
        >
            <LibraryTopTab.Screen
                options={{
                    tabBarIndicatorStyle: [styles.childIndicator, {
                        marginLeft: 8,
                        paddingRight: 32
                    },]
                }}
                name="Lesson"
                component={LessonsSubView}
            />
            <LibraryTopTab.Screen
                options={{
                    tabBarIndicatorStyle: [styles.childIndicator, {
                        marginLeft: 6
                    },]
                }}
                name="Program"
                component={ProgramsSubView}
            />
            <LibraryTopTab.Screen
                options={{
                    tabBarIndicatorStyle: [styles.childIndicator, {
                        marginLeft: 6
                    },]
                }}
                name="Category"
                component={CategoriesSubView}
            />
            <LibraryTopTab.Screen
                options={{
                    tabBarIndicatorStyle: [styles.childIndicator, {
                        marginLeft: 0,
                        marginRight: 16
                    }],
                }}
                name="Instructor"
                component={InstructorsSubView}
            />
        </LibraryTopTab.Navigator>
    );
}


function LibraryStack() {
    return (
        <ChildStack.Navigator
            initialRouteName="Library"
            screenOptions={{
                // headerShown: false
            }}
        >
            <ChildStack.Screen name="Category" component={Category} />
            <ChildStack.Screen name="CategoryDetail" component={CategoryDetail} />
        </ChildStack.Navigator>
    )
}


function LibraryStack2() {
    return (
        <ChildStack.Navigator
            initialRouteName="Library"
            screenOptions={{
                // headerShown: false
            }}
        >
            <ChildStack.Screen
                name="Library"
                component={LibraryTopTabNavigator}
                options={{
                    header: () => <LibraryHeader2 />
                }}
            />
        </ChildStack.Navigator>
    )
}

function LibraryStack3() {
    return (
        <ChildStack.Navigator
            initialRouteName="Library"
            screenOptions={{
                headerShown: false
            }}
        >
            <ChildStack.Screen name="Library" component={Library} />
            <ChildStack.Screen name="Lesson" component={Lesson} options={{ tabBarVisible: false }} />
            <ChildStack.Screen name="Program" component={Program} />
            {/* <ChildStack.Screen name="Instructor" component={Instructor} /> */}

        </ChildStack.Navigator>
    )
}

function CategoriesStack() {
    <ChildStack.Navigator
        initialRouteName="Category"
        screenOptions={{
            headerShown: false
        }}
    >
        <ChildStack.Screen name="Category" component={Category} />
        <ChildStack.Screen name="CategoryDetail" component={CategoryDetail} />
    </ChildStack.Navigator>
}

function AccountStack() {
    return (
        <Stack.Navigator initialRouteName="Account" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Account" component={AccountMainView} />
            <Stack.Screen name="Progress" component={AccountProgressView} />
            <Stack.Screen name="AccountSetting" component={AccountSettingStack} />
        </Stack.Navigator>
    )
}

function AccountSettingStack() {
    return (
        <Stack.Navigator
            initialRouteName="AccountSetting"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="AccountSetting" component={AccountSettingView} />
            <Stack.Screen name="DancePreference" component={DancePreference} />
            <Stack.Screen name="SubView" component={AccoutSubView} />
        </Stack.Navigator>
    )
}




function MyBottomTab() {
    //console.log("IN BOTTOM TAB FUNCTION");

    return (
        <BottomTab.Navigator
            screenOptions={{ headerShown: false, tabBarShowLabel: false }}
        >
            <BottomTab.Screen
                name="HomeStack"
                component={HomeStack}
                //   options={{tabBarIcon:({focused}) => {return <Ionicons name="home-outline" size={24} color={focused ? Colors.primaryPupple : 'black'} />}}}
                options={({ route }) => ({
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name="home-outline"
                            size={24}
                            color={focused ? Colors.primaryPupple : 'black'}
                        />
                    ),
                    // tabBarVisible: route.state && route.state.index !== 0 // Ẩn thanh tab bar khi đang ở màn hình con đầu tiên của HomeStack
                })}
            />

            <BottomTab.Screen
                name="LibraryStack"
                component={LibraryStack3}
                options={{ tabBarIcon: ({ focused }) => { return <Ionicons name="albums-outline" size={24} color={focused ? Colors.primaryPupple : 'black'} /> } }}
            />

            <BottomTab.Screen
                name="Schedule"
                component={Schedule}
                options={{ tabBarIcon: ({ focused }) => { return <Ionicons name="calendar-outline" size={24} color={focused ? Colors.primaryPupple : 'black'} /> } }}
            />
            <BottomTab.Screen
                name="Account"
                component={Account}
                options={{
                    tabBarIcon: ({ focused }) => { return <Ionicons name="person-outline" size={24} color={focused ? Colors.primaryPupple : 'black'} /> }

                }}
            />
        </BottomTab.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="MyBottomTab" component={MyBottomTab} />
                <Stack.Screen name="Lesson" component={Lesson} />
                <Stack.Screen name="Community" component={Community} />
                <Stack.Screen name="Category" component={Category} />
                <Stack.Screen name="CategoryDetail" component={CategoryDetail} />
                <Stack.Screen name="Instructor" component={Instructor} />
                <Stack.Screen name="InstructorDetailView" component={InstructorDetailView} />
                <Stack.Screen name="Search" component={Search} />
                <Stack.Screen name="Account" component={AccountStack} />
                <Stack.Screen name="SubView" component={AccoutSubView} />
                <Stack.Screen name="DancePreference" component={DancePreference} />
                <Stack.Screen name="Introduce" component={IntroduceView} />
                <Stack.Screen name="Feedback" component={FeedbackView} />
                <Stack.Screen name="SetName" component={SetUserNameView} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    label: {
        fontWeight: '600'
    },
    indicator: {
        backgroundColor: Colors.primaryPupple,
        borderRadius: 6,
        //   borderWidth: 0.5,
        //   borderColor: 'grey',
        position: 'absolute',
        zIndex: -1,
        bottom: '15%',
        height: '70%',
        width: '100%'
    },
    childIndicator: {
        backgroundColor: Colors.primaryPupple,
        borderRadius: 6,
        // marginLeft: 16,
        bottom: '22%',
        height: '56%',
        width: '22%',
        // marginBottom: 4,
        // marginTop: 4,
    },
    containerStyle: {
        //   backgroundColor: 'pink',
        width: '100%',
        //   height: 80,
        alignSelf: 'center',
        //   borderRadius: 8,
        overflow: 'scroll',
        //   marginTop: 16,
        //   marginLeft: 16,
        //   paddingHorizontal: 16,
        marginHorizontal: 16,
        // paddingVertical: 8,
        // marginBottom: 16,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 10,
    },

});
