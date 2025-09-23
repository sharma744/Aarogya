import { Text, View } from "react-native";
import { NavigationContainer, NavigationIndependentTree } from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Login from "./login";
import Signup from "./signup";
import Intropage from "./intropage";
import Home from "./tabcom/home";
export default function Index() {
  let Stack=createNativeStackNavigator();
  return (
    <NavigationIndependentTree>
      <Stack.Navigator  screenOptions={{headerShown:false}}>
        <Stack.Screen name="welcome" component={Intropage}></Stack.Screen>
        <Stack.Screen name="home" component={Home}></Stack.Screen>
      </Stack.Navigator>
      </NavigationIndependentTree>
    
  )
}
