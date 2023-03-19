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

export default function InformationsScreen({ navigation }) {

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

        navigation.navigate('AddressScreen', {userInputs: data});
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
        <StatusBar style="dark"/>    
        <ScrollView className="flex-1 w-full flex p-6 sm:px-8 px-10">
        <PressableOpacity 
        className="-ml-2.5"
        onPress={() => navigation.goBack()}>
            <ChevronBack color="#313131" size={25}/>
        </PressableOpacity>

            {/* Container for all the elements */}
            <View className="flex w-full mt-[10%] flex-col space-y-4 justify-center items-center ">
                <Text style={chivo.black} className="text-etk_darkgray text-center text-2xl">Signup</Text>

                {/* Form */}
                <View className="w-full flex flex-col justify-center items-center">

                    {/* Error */}
                    {errorMessage !== '' && <View className=" mb-4 w-full border-red-500 rounded border-1 bg-red-50 p-2">
                        <Text className="text-red-500 w-full text-justify text-xs" style={[chivo.regular,{lineHeight: 15}]}>{errorMessage}</Text>
                    </View>}


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
                                        autoFocus
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

                    {/* Input Password */}
                    <View className="w-full flex flex-col justify-center items-start mt-3">
                        <Text className="text-etk_darkgray" style={chivo.bold}>Passwort :</Text>
                        <View className="w-full flex-row justify-between items-center p-2.5 py-3 bg-white border-etk_gray border-2 rounded mt-1">
                            <Controller
                            control={control}
                            rules={{
                                required: true,
                                minLength: 8
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    style={[chivo.regular,{lineHeight: 0}]}
                                    className='bg-white w-full flex-1 text-base leading-tight border-[#FFFFFF]  text-etk_darkgray'
                                    placeholder="Mindestens 8 Charaktere"
                                    autoCapitalize="none"
                                    autoComplete='new-password'
                                    autoCorrect="false"
                                    returnKeyType="next"
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    secureTextEntry={isPasswordVisible}
                                />
                            )}
                            name="password"
                            />

                            <PressableOpacity 
                            onPress={() => togglePasswordVisible()}
                            className="h-full w-5 flex">
                                {isPasswordVisible && <EyeOpened size="18" color="black"/>}
                                {!isPasswordVisible && <EyeClosed size="18" color="black"/>}
                            </PressableOpacity>
                        </View>
                        {errors.password && <Text className="text-red-500 text-xs mt-0.5">Bitte füllen Sie dieses Feld aus.</Text>}
                    </View>


                    {/* Input Birthday */}
                    <View className="w-full flex flex-col justify-center items-start mt-3">
                        <Text className="text-etk_darkgray" style={chivo.bold}>Geburtstag :</Text>
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
                                        mask={Masks.DATE_DDMMYYYY}
                                        placeholder="TT/MM/JJJJ"
                                        inputMode="numeric"
                                        keyboardType='number-pad'
                                        returnKeyType="next"
                                        autoCorrect="false"
                                        value={field.value}
                                        onChangeText={text => field.onChange(text)}
                                        onBlur={() => field.onBlur(field.value)}
                                    />
                                  )}
                                name="birthdayDate"
                                />
                            </View>
                            {errors.birthdayDate && <Text className="text-red-500 text-xs mt-0.5">Bitte füllen Sie dieses Feld aus.</Text>}
                    </View>

                    {/* CheckBox Consent CGU */}
                    <View className="flex-row justify-start items-center mt-4">
                        <Controller
                            control={control}
                            rules={{
                                required: true,
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
                            name="cguConsent"
                        />
                        <View className="flex-1 ml-2">
                            <Text
                                style={[chivo.regular,{lineHeight: 12}]}
                                className="text-etk_darkgray text-xs">Ich akzeptiere die <Text className="underline text-etk_darkgray text-xs">Nutzungsbedingungen</Text>
                            </Text>
                        </View>
                    </View>
                    {errors.cguConsent && <View className="w-full text-left mt-0.5"><Text className="text-red-500 text-xs">Bitte akzeptieren Sie die AGB.</Text></View>}

                    {/* Legal Text */}
                    <Text
                    style={[chivo.regular,{lineHeight: 12}]}
                    className="text-gray-500 text-justify text-xs mt-3">
                        Quo tenetur accusamus quo pariatur labore et earum accusamus aut unde natus nam atque eveniet qui sint praesentium qui voluptas minus. Est numquam laborum non eligendi sequi sed voluptas nisi qui assumenda nihil et minima vero. Eum quam autem quo dolores provident id incidunt perferendis ad quasi corrupti?
                    </Text>

                    {/* Next Step */}
                    <PressableOpacity
                    className="w-full mt-3"
                    onPress={handleSubmit(onSubmit)}
                    disabled={isLoading}
                    style={{ opacity: isLoading ? 0.7 : 1 }}
                    >
                        <View className="bg-etk_darkgray p-3.5 w-full rounded flex flex-row space-x-2 justify-center items-center">
                            {isLoading && <LoadingSpinner size="15" backColor={"#D8D8D8"} mainColor={"black"}/>}
                            <Text style={chivo.bold} className="text-base text-white">{!isLoading ? "Weiter" : "Laden"}</Text>
                        </View>
                    </PressableOpacity>

                    {/* Login Fallback */}
                    <PressableOpacity className="w-full mt-2 flex justify-center items-center">
                        <Text style={chivo.regular} className="text-sm underline text-etk_darkgray">Ich habe bereits ein Konto</Text>
                    </PressableOpacity>
                </View>
            </View>

        </ScrollView>
    </SafeAreaView>
    );
  }