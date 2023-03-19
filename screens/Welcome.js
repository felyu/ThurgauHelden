import { fontScale } from 'nativewind';
import React, {useState, useRef, useEffect} from 'react';
import {Video, AVPlaybackStatus} from 'expo-av';
import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, Text, View, Image } from 'react-native';

import { chivo } from '../styles/font.js';

import PressableOpacity from '../components/PressableOppacity.js';
import NetInfo from '@react-native-community/netinfo';


export default function WelcomeScreen({ navigation }) {

    return (
    <View className="w-screen h-screen bg-black">
        <SafeAreaView className="bg-white flex-1 absolute w-screen h-screen">
            <StatusBar style="dark"/>

            <View className="flex-1 flex justify-center space-y-5 items-center p-6 sm:px-8 px-10">

                <View className="flex mt-[10%] flex-col space-y-4 justify-center items-center ">
                    <Image className="h-24 w-24" source={require('./../assets/images/th-logo.png')} />
                    <Text style={[chivo.black,{lineHeight: 30}]} className="text-etk_darkgray text-center text-2xl">ThurgauHelden</Text>
                </View>

                <View className="w-full space-y-2">
                    <PressableOpacity
                    onPress={() => navigation.navigate('InformationsScreen')}
                    className="w-full">
                        <View className="bg-etk_darkgray p-3.5 w-full rounded flex justify-center items-center">
                            <Text style={chivo.bold} className="text-base text-white">Signup</Text>
                        </View>
                    </PressableOpacity>
                    <PressableOpacity
                    onPress={() => navigation.navigate('InformationsScreen')}
                    className="w-full">
                        <View className="bg-etk_darkgray p-3.5 w-full rounded flex justify-center items-center">
                            <Text style={chivo.bold} className="text-base text-white">Login</Text>
                        </View>
                    </PressableOpacity>
                </View>
            </View>
        </SafeAreaView>
    </View>
    );
  }