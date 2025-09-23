import React from 'react'
import {View,Button, TextInput} from "react-native"
export default function Login(){
    let ssubmit=()=>{
  
    }
  return(
<View>
    <TextInput placeholder='enter the name'></TextInput>
    <TextInput placeholder='enter the password'></TextInput>
    <Button title="submit" onPress={ssubmit}></Button>
</View>

  )
}
