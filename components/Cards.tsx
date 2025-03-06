import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import images from '@/constants/images';
import icons from '@/constants/icons';

const FeatureCard = () => {
    return (
        <TouchableOpacity className="flex flex-col items-start w-60 h-80 mr-5 relative shadow-md shadow-black-100/70">
            {/* Image Background */}
            <Image source={images.japan} className="size-full rounded-2xl" />
            <Image source={images.cardGradient} className="size-full absolute rounded-2xl" />

            {/* Rating */}
            <View className="flex flex-row items-center absolute top-5 right-5 bg-white/80 py-1 px-2 rounded-full">
                <Image source={icons.star} className="size-4 mr-1" />
                <Text className="text-sm font-rubik-bold text-primary-300">4.5</Text>
            </View>

            {/* Info */}
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

            {/* Heart Icon */}
            <TouchableOpacity className="absolute bottom-5 right-5">
                <Image source={icons.heart} className="size-6" />
            </TouchableOpacity>
        </TouchableOpacity>
    );
};

const Card = () => {
    return (
        <TouchableOpacity className="basis-[48%] mb-4 flex p-3 rounded-2xl bg-white shadow-md shadow-black-100/30 relative">
            <View className="flex flex-row items-center absolute px-2 top-5 right-5 bg-white/90 p-1 rounded-full z-50">
                <Image source={icons.star} className="size-2.5" />
                <Text className="text-xs font-rubik-bold text-primary-300 ml-0.5">4.5</Text>
            </View>

            <Image source={images.japan} className="w-full h-40 rounded-lg" />

            <View className="flex flex-col items-start mt-3">
                <Text className="text-sm font-rubik-extrabold text-black-300" numberOfLines={1}>
                    Aung Myay Tharsi Villa
                </Text>
                <Text className="text-xs font-rubik text-black-100 w-4/6" numberOfLines={1}>
                    Kamayut, Yangon
                </Text>
                <Text className="text-md font-rubik-extrabold text-primary-300 w-full" numberOfLines={1}>
                    $130500
                </Text>
            </View>

            {/* Heart Icon */}
            <TouchableOpacity className="absolute bottom-5 right-5">
                <Image source={icons.heart} className="size-6" tintColor="#191D31" />
            </TouchableOpacity>
        </TouchableOpacity>
    );
};

export { FeatureCard, Card };
