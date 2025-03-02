import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const Explore = () => {
    const router = useRouter();

    const handleBackToHome = () => {
        router.push('/');
    };

    return (
        <SafeAreaView className="h-full bg-white flex items-center justify-center">
            <View>
                <Text className="text-3xl font-rubik-semibold text-primary-300">Explore 🔭</Text>
            </View>

            <TouchableOpacity className="mt-10 py-2 px-4 bg-zinc-400 rounded-full" onPress={handleBackToHome}>
                <Text className="text-white text-lg">Home ⬅️</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default Explore;
