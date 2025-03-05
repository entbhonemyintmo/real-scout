import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import images from '@/constants/images';
import icons from '@/constants/icons';
import Search from '@/components/Search';

const Index = () => {
    return (
        <SafeAreaView className="h-full bg-white">
            <View className="px-5">
                <View className="my-5 flex flex-row justify-between items-center">
                    <View className="flex flex-row items-center">
                        <Image source={images.avatar} className="size-10" />
                        <View className="ml-2">
                            <Text className="text-xs font-rubik text-black-100">Good Morning</Text>
                            <Text className="text-base font-rubik-medium text-black-300">Edward</Text>
                        </View>
                    </View>
                    <TouchableOpacity className="flex flex-row items-center">
                        <Image source={icons.bell} className="size-6" />
                    </TouchableOpacity>
                </View>

                <Search />
            </View>
        </SafeAreaView>
    );
};

export default Index;
