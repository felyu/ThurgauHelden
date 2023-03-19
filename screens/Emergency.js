import { fontScale } from 'nativewind';
import React, {useState, useRef, useEffect} from 'react';
import {Video, AVPlaybackStatus} from 'expo-av';
import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, Text, View, Image } from 'react-native';

import { chivo } from '../styles/font.js';

import PressableOpacity from '../components/PressableOppacity.js';
import Header from '../components/Header.js';


import * as Location from 'expo-location'; 
import LoadingSpinner from '../assets/icons/LoadingSpinner.js';

export default function EmergencyScreen({ navigation }) {

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    const [isHeroActive, setIsHeroActive] = useState(true);

    const toggleHeroActive = () => {
        setIsHeroActive(prevState => !prevState);
    };
  
    useEffect(() => {
      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
  
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
      })();
    }, []);
  
    let text = 'Waiting..';
    if (errorMsg) {
      text = errorMsg;
    } else if (location) {
      text = JSON.stringify(location);
      console.log(text)
    }

    return (
    <View className="w-screen h-screen bg-white">
        <SafeAreaView className="flex-1 bg-white relative w-screen h-screen">

        {/* Header */}
        <Header title="Status"></Header>


        <View className="px-6 mt-8">
            <Text style={[chivo.bold,{lineHeight: 25}]} className="text-xl text-center text-etk_darkgray">Vergessen Sie nicht, Ihre Availability zu aktualisieren.</Text>
            <PressableOpacity onPress={toggleHeroActive} className="top-3 justify-center items-center flex w-full">
                <View className={`h-44 w-44 shadow-xl rounded-full border-[6px] ${
                        isHeroActive ? 'border-etk_darkred/0' : 'border-etk_darkred/10'
                    }`}>

                    <View className={`h-full w-full border-8 shadow-sm p-3 rounded-full justify-center items-center ${
                        isHeroActive ? 'bg-etk_darkgray/50 border-etk_darkgray' : 'bg-etk_red border-etk_darkred'
                    }`}>
                        <Text style={chivo.bold} className="text-white text-xl">{ isHeroActive ? "Deaktiviert" : "Aktivitert"}</Text>
                    </View>

                    
                </View>
            </PressableOpacity>
        </View>

         <View className="h-full mt-4 w-screen px-6 flex-col items-center justify-start">

            <Text className="mt-3 text-base text-etk_darkgray w-full" style={chivo.bold}>Dokumentationen :</Text>

            <View className="w-full justify-start items-start">

                <View className="space-x-2 w-full flex flex-row mt-2">
                    <PressableOpacity className="w-[49%]">
                        <View className="border-etk_gray bg-white py-5 border-2 rounded justify-center items-center">
                            <Text style={chivo.bold} className="text-base text-etk_darkgray">Notrufzentralen</Text>
                        </View>
                    </PressableOpacity>

                    <PressableOpacity  className="w-[49%]">
                        <View className="border-etk_gray bg-white py-5  border-2 rounded justify-center items-center">
                            <Text style={chivo.bold} className="text-base text-etk_darkgray">Erste Hilfe</Text>
                        </View>
                    </PressableOpacity>
                </View>

                <View className="space-x-2 w-full flex flex-row mt-2">
                    <PressableOpacity className="w-[49%]">
                        <View className="border-etk_gray bg-white py-5 border-2 rounded justify-center items-center">
                            <Text style={chivo.bold} className="text-base text-etk_darkgray">Lieferungen</Text>
                        </View>
                    </PressableOpacity>

                    <PressableOpacity  className="w-[49%]">
                        <View className="border-etk_gray bg-white py-5  border-2 rounded justify-center items-center">
                            <Text style={chivo.bold} className="text-base text-etk_darkgray">Medikamente</Text>
                        </View>
                    </PressableOpacity>
                </View>

                <View className="pt-2">
                    <View className="p-4 flex flex-row justify-center items-center border-etk_gray border-2 rounded">
                        <View className="w-2/3"> 
                            <Text style={chivo.bold}>Anzahl der Personen, um die sich gekümmert werden muss, wenn es zu einem Unfall kommt</Text>
                        </View>                
                        <View className="w-1/3 items-end pr-4 justify-center">
                            <Text style={chivo.black} className="text-5xl text-etk_darkgray">{isHeroActive ? 0 : 3}</Text>
                        </View>
                    </View>

                    <View>

                    <Text style={chivo.bold} className="text-xs text-etk_darkgray/30 mt-2">Letzte Aktualisierung: vor 27 Minuten</Text>

                    </View>
                </View>

                {/* <View className="space-x-2 w-full flex flex-row mt-2">
                    <PressableOpacity className="w-[49%]">
                        <View className="border-etk_gray bg-white py-5 border-2 rounded justify-center items-center">
                            <Text style={chivo.bold} className="text-base text-etk_darkgray">Notrufzentralen</Text>
                        </View>
                    </PressableOpacity>

                    <PressableOpacity  className="w-[49%]">
                        <View className="border-etk_gray bg-white py-5  border-2 rounded justify-center items-center">
                            <Text style={chivo.bold} className="text-base text-etk_darkgray">Erste Hilfe</Text>
                        </View>
                    </PressableOpacity>
                </View> */}

            </View>


        </View> 

        </SafeAreaView>
    </View>
    );
  }