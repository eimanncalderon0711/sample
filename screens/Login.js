import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

function Login() {
  return (
    <View>
    
    <Image style={{width:250, height: 105}} className="justify-center items-center self-center mb-14" source={require("../assets/StudyLogo.png")}/>

    {/* <View className="justify items-center mb-28">
        <Text style={{letterSpacing:6}} className="text-xl font-semibold tracking-widest">STUDYBUDDY</Text>
        <Text>CONNECT</Text>
    </View> */}
    <View className="bg-white py-6 px-10 rounded-2xl">
        <Text className="font-bold items-center self-center pb-4 text-lg">Let's get started</Text>
        <Text className="text-gray-400 font-light self-center">Login to start getting students</Text>
        <TouchableOpacity className="bg-blue-500 justify-center items-center py-4 place-content-center self-center rounded-md mt-6 px-24">
            <Text className="text-white">LOG IN</Text>
        </TouchableOpacity>
        <View className="flex-row pt-4 justify-center">
            <Text>Want to teach? </Text>
            <Text className="text-blue-500 font-extrabold">Apply</Text>
        </View>
    </View>
    </View>
  )
}

export default Login