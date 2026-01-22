import React from 'react'
import {View,TextInput} from "react-native"
import {RTCView,mediaDevices,RTCPeerConnection} from "react-native-webrtc"
import {useEffect,useState} from "react"
import {io,Socket} from "socket.io-client"
import { useRef } from 'react'
export default function Videoscall() {
  const socketRef = useRef<Socket | null>(null);
  let [localstream,setlocalstream]=useState(null);
useEffect(()=>{
 socketRef.current=io("ndskn",{
  transports:["websocket"]
 }) 
 let peerconn=()=>{
  let config={
    iceServers:[{urls: "stun:stun.l.google.com:19302"}]
  }
  let peer=new RTCPeerConnection(config);
  pc.addEventListener('track', (event: any) => {
    console.log('Track received:', event.streams);
  });
  


 }
},[])
  return (

  )
}

