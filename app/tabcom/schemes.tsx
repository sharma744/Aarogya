import React from 'react'
import {View,StyleSheet, ScrollView,TouchableHighlight, TouchableOpacity} from "react-native"
export default function Schemes() {
    let schemes=[{
     name:"pm1"   
    },{
        name:"pm2"
    },{
name:"pm3"
}]
  return (
 <ScrollView style={{backgroundColor:"white"}}>
    {
        schemes.map((obj)=>(
           <TouchableOpacity>
            <View style={styles.cont}>{obj.name}</View>
            </TouchableOpacity>
        ))
    }
</ScrollView>
  )

}
let styles=StyleSheet.create({
cont:{
    width:"90%",
    height:300,
    borderWidth:1,
    marginLeft:15,
    marginTop:10
}
})

