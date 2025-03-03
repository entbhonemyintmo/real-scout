import { View, Text, ScrollView, Image, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import images from '@/constants/images';
import icons from '@/constants/icons';
import { login } from '@/lib/appwrite';
import { Redirect } from 'expo-router';
import { useGlobalContext } from '@/lib/global-context-provider';

const SignIn = () => {
    const { isLogged, loading, refetch } = useGlobalContext();

    if (!loading && isLogged) return <Redirect href="/profile" />;

    const handleSignIn = async () => {
        const result = await login();

        if (result) {
            refetch();
        } else {
            console.log('Login failed');
            Alert.alert('Error', 'Failed to sign in');
        }
    };

    return (
        <SafeAreaView className="h-full bg-white">
            <ScrollView contentContainerClassName="h-full">
                <Image source={images.onboarding} className="w-full h-4/6" resizeMode="contain" />

                <View className="px-10">
                    <Text className="text-base text-center font-rubik uppercase text-black-200">Welcome to Real Scout</Text>

                    <Text className="text-3xl text-center text-black-300 font-rubik-bold mt-2">
                        Let's get you closer to {'\n'} <Text className="text-primary-300">Your Dream Home</Text>
                    </Text>

                    <TouchableOpacity className="bg-white mt-8 py-4 shadow-md shadow-zinc-300 rounded-full w-full" onPress={handleSignIn}>
                        <View className="flex  flex-row items-center justify-center">
                            <Image source={icons.google} className="size-5 " resizeMode="contain" />
                            <Text className="text-lg text-black-200 font-rubik-medium ml-2">Sign in with Google</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SignIn;
