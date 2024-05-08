import { Text, View } from "react-native";

//NAVIGATION
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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


const Stack = createNativeStackNavigator();
const ChildStack = createNativeStackNavigator();

const BottomTab = createBottomTabNavigator();

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

function LibraryStack() {
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
            <ChildStack.Screen name="Instructor" component={Instructor} />

        </ChildStack.Navigator>
    )
}


function AccountStack() {

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
                component={LibraryStack}
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
            </Stack.Navigator>
        </NavigationContainer>
    )
}