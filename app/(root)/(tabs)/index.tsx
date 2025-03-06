import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import React from 'react';
import images from '@/constants/images';
import icons from '@/constants/icons';
import Search from '@/components/Search';
import { Card, FeatureCard } from '@/components/Cards';
import Filter from '@/components/Filter';

const Index = () => {
    return (
        <SafeAreaView className="h-full bg-white">
            <FlatList
                data={[1, 2, 3]}
                keyExtractor={(item) => item.toString()}
                renderItem={({ item }) => <Card />}
                numColumns={2}
                columnWrapperClassName="flex gap-5 px-5"
                contentContainerClassName="pb-32"
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={() => (
                    <>
                        <View className="my-5 px-5 flex flex-row justify-between items-center">
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

                        <View className="px-5">
                            <Search />
                        </View>

                        {/* Feature Section */}
                        <View className="px-5 my-5 flex-row flex justify-between items-center">
                            <Text className="text-xl font-rubik-bold text-black-300">Featured</Text>
                            <TouchableOpacity>
                                <Text className="text-base font-rubik-bold text-primary-300">See All</Text>
                            </TouchableOpacity>
                        </View>

                        <FlatList
                            horizontal
                            data={[1, 2, 3, 4, 5]}
                            keyExtractor={(item) => item.toString()}
                            renderItem={({ item }) => <FeatureCard />}
                            showsHorizontalScrollIndicator={false}
                            contentContainerClassName="flex gap-5 px-5"
                        />

                        {/* Recommendation Section */}
                        <View className="px-5 mt-6 mb-2 flex-row flex justify-between items-center">
                            <Text className="text-xl font-rubik-bold text-black-300">Our Recommendation</Text>
                            <TouchableOpacity>
                                <Text className="text-base font-rubik-bold text-primary-300">See All</Text>
                            </TouchableOpacity>
                        </View>

                        <View className="ps-5">
                            <Filter />
                        </View>
                    </>
                )}
            />
        </SafeAreaView>
    );
};

export default Index;
