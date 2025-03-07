import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import images from '@/constants/images';
import icons from '@/constants/icons';
import { Models } from 'react-native-appwrite';

interface Props {
    item: Models.Document;
    onPress?: () => void;
}

const FeatureCard = ({ item, onPress }: Props) => {
    return (
        <TouchableOpacity onPress={onPress} className="flex flex-col items-start w-60 h-80 relative">
            {/* Image Background */}
            <Image source={{ uri: item.image }} className="size-full rounded-2xl" />
            <Image source={images.cardGradient} className="size-full absolute rounded-2xl" />

            {/* Rating */}
            <View className="flex flex-row items-center absolute top-5 right-5 bg-white/80 py-1 px-2 rounded-full">
                <Image source={icons.star} className="size-4 mr-1" />
                <Text className="text-sm font-rubik-bold text-primary-300">{item.rating}</Text>
            </View>

            {/* Info */}
            <View className="flex flex-col items-start absolute bottom-5 left-5 w-4/6">
                <Text className="text-lg font-rubik-extrabold text-white" numberOfLines={1}>
                    {item.name}
                </Text>
                <Text className="text-sm font-rubik text-white w-4/6" numberOfLines={1}>
                    {item.address}
                </Text>
                <Text className="text-lg font-rubik-extrabold text-white w-full" numberOfLines={1}>
                    ${item.price}
                </Text>
            </View>

            {/* Heart Icon */}
            <TouchableOpacity className="absolute bottom-5 right-5">
                <Image source={icons.heart} className="size-6" />
            </TouchableOpacity>
        </TouchableOpacity>
    );
};

const Card = ({ item, onPress }: Props) => {
    return (
        <TouchableOpacity onPress={onPress} className="mb-5 flex p-3 rounded-2xl bg-white shadow-md shadow-black-100/30 relative">
            <View className="flex flex-row items-center absolute px-2 top-5 right-5 bg-white/90 p-1 rounded-full z-50">
                <Image source={icons.star} className="size-2.5" />
                <Text className="text-xs font-rubik-bold text-primary-300 ml-0.5">{item.rating}</Text>
            </View>

            <Image source={{ uri: item.image }} className="w-full h-40 rounded-lg" />

            <View className="flex flex-col items-start mt-3">
                <Text className="text-sm font-rubik-extrabold text-black-300" numberOfLines={1}>
                    {item.name}
                </Text>
                <Text className="text-xs font-rubik text-black-100 w-4/6" numberOfLines={1}>
                    {item.address}
                </Text>
                <Text className="text-md font-rubik-extrabold text-primary-300 w-full" numberOfLines={1}>
                    ${item.price}{' '}
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
