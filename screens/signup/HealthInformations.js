import { fontScale } from 'nativewind';
import React, {useState, useRef, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, Text, View, ScrollView, Image, ImageBackground, Pressable } from 'react-native';
import { useForm, Controller } from "react-hook-form";
import MaskInput, { Masks } from 'react-native-mask-input';

import { chivo } from '../../styles/font';


import PressableOpacity from '../../components/PressableOppacity';
import ChevronBack from '../../assets/icons/ChevronBack'
import LoadingSpinner from '../../assets/icons/LoadingSpinner'
import EyeOpened from '../../assets/icons/EyeOpened'
import EyeClosed from '../../assets/icons/EyeClosed'

import { CheckBox } from "react-native-btr";
import { TextInput } from 'react-native-gesture-handler';

// Axios
import axios from 'axios';

export default function HealthInformationsScreen({ navigation }) {

    const [birthdayDate, setBirthdayDate] = useState('');
    const [isPasswordVisible, setPasswordVisible] = useState(true);
    const [isCheckedCguCheckbox, setIsCheckedCguCheckbox] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    
    // Controls the loading state
    const [isLoading, setIsLoading] = useState(false)

    const initAcccount = (data) => {
        // setIsLoading(true);
        // const formData = new FormData();
        // formData.append('firstName', data.firstName);
        // formData.append('email', data.email);
        // formData.append('password', data.password);
        // formData.append('birthdayDate', data.birthdayDate);

        // axios.post('http://macbook-air-de-felix.local:8888/vilis-web/public/api/app/v1/account/init.php', formData, {
        //   headers: {
        //     'Content-Type': 'multipart/form-data',
        //   },
        // })
        // .then((response) => {
        //     // Success
        //     setErrorMessage('')
        //     console.log(response.data.data.uuid)
        //     navigation.navigate('EnterPhoneNumberScreen', {uuid: response.data.data.uuid});
        //     setIsLoading(false);
        // })
        // .catch((error) => {
        //     // Error
        //     console.error(error.response.data)
        //     setErrorMessage(error.response.data.message)
        //     setIsLoading(false);
        // });

        navigation.navigate('HelpersScreen', {userInputs: data});
    };

    function togglePasswordVisible() {
        setPasswordVisible(isPasswordVisible => !isPasswordVisible);
    }

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
          firstName: '',
          password: '',
          email: '',
          birthdayDate: '',
          cguConsent: '',
        }
      });
    const onSubmit = data => {
        initAcccount(data)
    };

    return (
    <SafeAreaView className="bg-white flex-1 w-screen h-screen">
        {/* Status bar */}
        <StatusBar style="light"/>    
        <ScrollView className="flex-1 w-full flex p-6 sm:px-8 px-10">
        <PressableOpacity 
        className="-ml-2.5"
        onPress={() => navigation.goBack()}>
            <ChevronBack color="#313131" size={25}/>
        </PressableOpacity>

            {/* Container for all the elements */}
            <View className="flex w-full mt-[10%] flex-col space-y-4 justify-center items-center ">
                <Text style={chivo.black} className="text-etk_darkgray text-center text-2xl">Gesundheit Infos</Text>

                {/* Form */}
                <View className="w-full flex flex-col justify-center items-center">

                    {/* Error */}
                    {errorMessage !== '' && <View className=" mb-4 w-full border-red-500 rounded border-1 bg-red-50 p-2">
                        <Text className="text-red-500 w-full text-justify text-xs" style={[chivo.regular,{lineHeight: 15}]}>{errorMessage}</Text>
                    </View>}

                    <Text className="text-base text-etk_darkgray w-full text-left mb-2" style={chivo.bold}>Wie ist Ihre aktuelle Situation? </Text>

                    <View className="w-full flex flex-col justify-center items-start space-y-2">
                        <View className="w-full flex-row justify-between items-center p-4 py-3 bg-white border-etk_gray border-2 rounded mt-1">
                            <Text className="text-base text-etk_darkgray" style={chivo.bold}>Kann sich nicht frei bewegen</Text>
                            <Controller
                            control={control}
                            rules={{
                                required: false,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <CheckBox
                                    color={"#313131"}
                                    checked={isChecked}
                                    onPress={() => {
                                    setIsChecked(!isChecked);
                                    onChange(!isChecked);
                                    }}
                                />
                            )}
                            name="mobilitySupport"
                        />
                        </View>

                        <View className="w-full flex-row justify-between items-center p-4 py-3 bg-white border-etk_gray border-2 rounded mt-1">
                            <Text className="text-base text-etk_darkgray" style={chivo.bold}>Nimmt Behandlungen</Text>
                            <Controller
                            control={control}
                            rules={{
                                required: false,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <CheckBox
                                    color={"#313131"}
                                    checked={isChecked}
                                    onPress={() => {
                                    setIsChecked(!isChecked);
                                    onChange(!isChecked);
                                    }}
                                />
                            )}
                            name="takeTreatement"
                        />
                        </View>

                        <View className="w-full flex-row justify-between items-center p-4 py-3 bg-white border-etk_gray border-2 rounded mt-1">
                            <Text className="text-base text-etk_darkgray" style={chivo.bold}>Ist schwanger</Text>
                            <Controller
                            control={control}
                            rules={{
                                required: false,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <CheckBox
                                    color={"#313131"}
                                    checked={isChecked}
                                    onPress={() => {
                                    setIsChecked(!isChecked);
                                    onChange(!isChecked);
                                    }}
                                />
                            )}
                            name="takeTreatement"
                        />
                        </View>

                        <View className="w-full flex-row justify-between items-center p-4 py-3 bg-white border-etk_gray border-2 rounded mt-1">
                            <Text className="text-base text-etk_darkgray" style={chivo.bold}>Wohnt allein</Text>
                            <Controller
                            control={control}
                            rules={{
                                required: false,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <CheckBox
                                    color={"#313131"}
                                    checked={isChecked}
                                    onPress={() => {
                                    setIsChecked(!isChecked);
                                    onChange(!isChecked);
                                    }}
                                />
                            )}
                            name="foodDelivery"
                        />
                        </View>                        
                    </View>

                    <Text className="text-base text-etk_darkgray w-full text-left mt-4" style={chivo.bold}>Bitte geben Sie eine <Text style={chivo.bold} className="underline">Kontaktperson</Text> an : </Text>

                    <View className="flex flex-row justify-between items-start w-full space-x-2">
                        {/* First Name */}
                        <View className="w-[48%] flex flex-col justify-center items-start mt-3">
                            <Text className="text-etk_darkgray" style={chivo.bold}>Vorname :</Text>
                            <View className="w-full flex-row justify-between items-center p-2.5 py-3 bg-white border-etk_gray border-2 rounded mt-1">
                                <Controller
                                control={control}
                                rules={{
                                    required: true,
                                }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <TextInput
                                        style={[chivo.regular,{lineHeight: 0}]}
                                        className='bg-white w-full flex-1 text-base leading-tight border-[#FFFFFF]  text-etk_darkgray'
                                        placeholder="Mickey"
                                        autoCapitalize="true"
                                        autoComplete=''
                                        autoCorrect="false"
                                        returnKeyType="next"
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                    />
                                )}
                                name="firstName"
                                />
                            </View>
                            {errors.firstName && <Text className="text-red-500 text-xs mt-0.5">Bitte füllen Sie dieses Feld aus.</Text>}
                        </View>

                        {/* Last Name */}
                        <View className="w-[48%] flex flex-col justify-center items-start mt-3">
                            <Text className="text-etk_darkgray" style={chivo.bold}>Name :</Text>
                            <View className="w-full flex-row justify-between items-center p-2.5 py-3 bg-white border-etk_gray border-2 rounded mt-1">
                                <Controller
                                control={control}
                                rules={{
                                    required: true,
                                }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <TextInput
                                        style={[chivo.regular,{lineHeight: 0}]}
                                        className='bg-white w-full flex-1 text-base leading-tight border-[#FFFFFF]  text-etk_darkgray'
                                        placeholder="Mouse"
                                        autoCapitalize="true"
                                        autoComplete=''
                                        autoCorrect="false"
                                        returnKeyType="next"
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                    />
                                )}
                                name="lastName"
                                />
                            </View>
                            {errors.lastName && <Text className="text-red-500 text-xs mt-0.5">Bitte füllen Sie dieses Feld aus.</Text>}
                        </View>
                    </View>

                    {/* Input Phone number */}
                    <View className="w-full flex flex-col justify-center items-start mt-3">
                        <Text className="text-etk_darkgray" style={chivo.bold}>Telefonnummer :</Text>
                        <View className="w-full flex-row justify-between items-center p-2.5 py-3 bg-white border-etk_gray border-2 rounded mt-1">

                                <Controller
                                control={control}
                                rules={{
                                    required: true,
                                }}
                                render={({ field }) => (
                                    <MaskInput
                                    style={[chivo.regular,{lineHeight: 0}]}
                                    className='bg-white w-full text-base leading-tight border-[#FFFFFF]  text-[#555555]'
                                    placeholder="+41 XX XXX XX XX"
                                    keyboardType='phone-pad'
                                    autoCapitalize="none"
                                    autoComplete="tel"
                                    returnKeyType="next"
                                    autoCorrect="false"
                                    mask={['+', /\d/, /\d/, ' ', /\d/, /\d/, ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, ' ',/\d/, /\d/]}
                                    onChangeText={text => field.onChange(text)}
                                    onBlur={() => field.onBlur(field.value)}
                                    value={field.value}
                                    />
                                  )}
                                name="phoneNumber"
                                />
                            </View>
                            {errors.phoneNumber && <Text className="text-red-500 text-xs mt-0.5">Bitte füllen Sie dieses Feld aus.</Text>}
                    </View>

                    {/* Next Step */}
                    <PressableOpacity
                    className="w-full mt-3"
                    onPress={handleSubmit(onSubmit)}
                    disabled={isLoading}
                    style={{ opacity: isLoading ? 0.7 : 1 }}
                    >
                        <View className="bg-etk_darkgray p-3.5 mb-[300px] w-full rounded flex flex-row space-x-2 justify-center items-center">
                            {isLoading && <LoadingSpinner size="15" backColor={"#D8D8D8"} mainColor={"black"}/>}
                            <Text style={chivo.bold} className="text-base text-white">{!isLoading ? "Weiter" : "Laden"}</Text>
                        </View>
                    </PressableOpacity>

                </View>
            </View>

        </ScrollView>
    </SafeAreaView>
    );
  }