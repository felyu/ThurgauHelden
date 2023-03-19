import { fontScale } from 'nativewind';
import React, {useState, useRef, useEffect} from 'react';
import {Video, AVPlaybackStatus} from 'expo-av';
import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, Text, View, Image, StyleSheet } from 'react-native';


import { chivo } from '../styles/font.js';

import PressableOpacity from '../components/PressableOppacity.js';
import Header from '../components/Header.js';
import KeyboardInput from '../components/KeyboardInput.js';

export default function ChatScreen({ navigation }) {

    return (
    <View className="w-screen h-screen bg-black">
        <SafeAreaView className="bg-white flex-1 relative w-screen h-screen">

        {/* Header */}
        <Header title="Überblick"></Header>

        <View className="p-6">
            <View className="p-4 flex flex-row justify-center items-center border-etk_gray border-2 rounded">
                <View className="w-2/3"> 
                    <Text style={chivo.bold}>Anzahl der Personen, um die sich gekümmert werden muss, wenn es zu einem Unfall kommt</Text>
                </View>                
                <View className="w-1/3 items-end pr-4 justify-center">
                    <Text style={chivo.black} className="text-5xl text-etk_darkgray">3</Text>
                </View>
            </View>


            <PressableOpacity>
                <View className="border-2 border-etk_gray bg-white mt-4 h-16">
                    <Text>Jessica</Text>
                    <Text>34 Jahre alt</Text>
                    <Text>400m</Text>

                    
                </View>
            </PressableOpacity>

        </View>
 

     
        </SafeAreaView>
    </View>
    );

}