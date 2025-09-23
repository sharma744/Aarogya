import React from 'react'
import {View,Button, TextInput,StyleSheet,Image} from "react-native"
import { useEffect } from 'react'
export default function Intropage(props:any){
    useEffect(()=>{
    let timer=setTimeout(()=>{
     props.navigation.navigate("home")
    },3000)
    return ()=>clearTimeout(timer)
},[])
    return(
        <View style={styles.main}>
        <View style={styles.container}>
            <Image  style={styles.img} source={require("../assets/images/icon.png")
}></Image>
        </View>
        </View>
    )
}
let styles=StyleSheet.create({
    main:{
   backgroundColor:"white",
   width:"100%",
   height:"100%"
    },
   container:{
    height:"60%",
    width:"80%",
    alignContent:"center",
    justifyContent:"center",
    borderWidth:1,
    marginTop:140,
    marginLeft:40,
    color:"white"
   },
   img:{
      height:"100%",
      width:"100%"
   }
})


