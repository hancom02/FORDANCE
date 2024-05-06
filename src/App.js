import { Text, View } from "react-native";

//NAVIGATION
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native"
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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


const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

function MyBottomTab() {
  //console.log("IN BOTTOM TAB FUNCTION");

  return (
      <BottomTab.Navigator 
          screenOptions={{headerShown: false, tabBarShowLabel: false}}
      >
          <BottomTab.Screen 
              name="Home" 
              component={Home} 
              options={{tabBarIcon:({focused}) => {return <Ionicons name="home-outline" size={24} color={focused ? Colors.primaryPupple : 'black'} />}}}
          />
          <BottomTab.Screen 
              name="Library" 
              component={Library} 
              options={{tabBarIcon:({focused}) => {return <Ionicons name="albums-outline" size={24} color={focused ? Colors.primaryPupple : 'black'} />}}}
          />
          <BottomTab.Screen 
              name="Schedule" 
              component={Schedule} 
              options={{tabBarIcon:({focused}) => {return <Ionicons name="calendar-outline" size={24} color={focused ? Colors.primaryPupple : 'black'} />}}}
          />    
          <BottomTab.Screen 
              name="Account" 
              component={Account} 
              options={{tabBarIcon:({focused}) => {return <Ionicons name="person-outline" size={24} color={focused ? Colors.primaryPupple : 'black'} />}}}
          />                      
      </BottomTab.Navigator>
  );
}

export default function App() {
  return (
      <NavigationContainer>            
          <Stack.Navigator screenOptions={{headerShown: false}}>
              <Stack.Screen name="Splash" component={Splash}/>
              <Stack.Screen name="MyBottomTab" component={MyBottomTab}/>
          </Stack.Navigator>
      </NavigationContainer>        
      
      // <View>
      //   <Text>Home</Text>
      // </View>
  )
}