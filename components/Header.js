import React from "react";
import { View, Text } from "react-native";
import { chivo } from "../styles/font";
import PressableOpacity from "./PressableOppacity";
import { StatusBar } from 'expo-status-bar';

const Header = ({title}) => {

  return (
    <View className="bg-white">
        <View className="w-full py-3 px-5 flex-row justify-between border-b border-etk_gray items-center">
        <View>
            <View className="rounded-full border-etk_darkgray/10 border-2 justify-center items-center h-[35px] w-[35px] bg-etk_gray">
                <Text style={chivo.bold} className="text-base text-etk_darkgray/70">FY</Text>
            </View>
        </View>

        <Text className="text-xl text-etk_darkgray" style={chivo.black}>{title}</Text>

            <PressableOpacity>
                <View className="rounded opacity-0 h-8 w-8 bg-[#64A100] justify-center items-center"><Text className="text-xl text-white" style={chivo.bold}>H</Text></View>
            </PressableOpacity>

        </View>
        <StatusBar style="dark"/> 
    </View>
  );
};

export default Header;
