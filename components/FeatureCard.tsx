import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import images from '@/constants/images';

const FeatureCard = () => {
    return (
        <TouchableOpacity className="flex flex-col items-start w-60 h-80 relative">
            <Image source={images.japan} className="size-full rounded-2xl" />
            <Image source={images.cardGradient} className="size-full absolute rounded-2xl" />
            <View className="flex flex-col items-start absolute bottom-5 left-5 w-4/6">
                <Text className="text-lg font-rubik-extrabold text-white" numberOfLines={1}>
                    Aung Myay Tharsi Villa
                </Text>
                <Text className="text-sm font-rubik text-white w-4/6" numberOfLines={1}>
                    Kamayut, Yangon
                </Text>
                <Text className="text-lg font-rubik-extrabold text-white w-full" numberOfLines={1}>
                    $130500
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default FeatureCard;
