import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import images from '@/constants/images';
import icons from '@/constants/icons';
import Search from '@/components/Search';
import { Card, FeatureCard } from '@/components/Cards';

const Index = () => {
    return (
        <SafeAreaView className="h-full bg-white">
            <ScrollView className="px-5">
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

                {/* Feature Section */}
                <View className="my-5 flex-row flex justify-between items-center">
                    <Text className="text-xl font-rubik-bold text-black-300">Featured</Text>
                    <TouchableOpacity>
                        <Text className="text-base font-rubik-bold text-primary-300">See All</Text>
                    </TouchableOpacity>
                </View>

                <View className="flex flex-row gap-4">
                    <FeatureCard />
                    <FeatureCard />
                    <FeatureCard />
                </View>

                {/* Recommendation Section */}
                <View className="my-5 flex-row flex justify-between items-center">
                    <Text className="text-xl font-rubik-bold text-black-300">For You</Text>
                    <TouchableOpacity>
                        <Text className="text-base font-rubik-bold text-primary-300">See All</Text>
                    </TouchableOpacity>
                </View>

                <View className="flex flex-wrap flex-row justify-between pb-32">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Index;
