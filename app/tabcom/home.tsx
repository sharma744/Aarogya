import React from 'react'
import {View,TextInput,Button,Image,StyleSheet} from "react-native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Chatbot from './chatbot'
import Medicine from './medicine'
import Schemes from './schemes'
import Videoscall from './videoscall'
export default function Home() {
    let Tab=createBottomTabNavigator()
  return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="schemes" component={Schemes} options={{tabBarIcon:()=>(
                <Image style={styles.img} source={require("../../assets/images/icon.png")}></Image>
            )}}></Tab.Screen>
            <Tab.Screen options={{headerRight:()=><Button title="heelo"></Button>
            ,
            tabBarIcon:()=>(<Image source={require('../../assets/images/icon.png')
            } style={styles.img}></Image>),
        
        }} name="cahtbot" component={Chatbot} ></Tab.Screen>
            <Tab.Screen options={{tabBarIcon:()=>(
                <Image style={styles.img} source={require("../../assets/images/icon.png")}></Image>
            )}} name="medicine" component={Medicine}></Tab.Screen>
            <Tab.Screen name="videocall" component={Videoscall} options={{tabBarIcon:()=>(
                <Image style={styles.img} source={require("../../assets/images/icon.png")}></Image>
            )}}></Tab.Screen>
        </Tab.Navigator>
    </NavigationContainer>
  )
}
let styles=StyleSheet.create({
    img:{
        width:20,
        height:20
    },
    btn:{
        marginRight:6
    }
})
