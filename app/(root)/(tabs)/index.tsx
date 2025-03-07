import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView, FlatList, Button, ActivityIndicator } from 'react-native';
import React, { useEffect } from 'react';
import images from '@/constants/images';
import icons from '@/constants/icons';
import Search from '@/components/Search';
import { Card, FeatureCard } from '@/components/Cards';
import Filter from '@/components/Filter';
import { useGlobalContext } from '@/lib/global-context-provider';
import { router, useLocalSearchParams } from 'expo-router';
import { useFetch } from '@/lib/use-fetch';
import { getLatestProperties, getProperties } from '@/lib/appwrite';
import NoResults from '@/components/NoResults';

const Index = () => {
    const { user } = useGlobalContext();

    const params = useLocalSearchParams<{ query?: string; filter?: string }>();

    const { data: latestProperties, loading: latestPropertiesLoading } = useFetch({
        fn: getLatestProperties,
    });

    const {
        data: properties,
        refetch,
        loading,
    } = useFetch({
        fn: getProperties,
        params: {
            filter: params.filter!,
            query: params.query!,
            limit: 6,
        },
        skip: true,
    });

    useEffect(() => {
        refetch({
            filter: params.filter!,
            query: params.query!,
            limit: 6,
        });
    }, [params.filter, params.query]);

    const handleCardPress = (id: string) => router.push(`/properties/${id}`);

    return (
        <SafeAreaView className="h-full bg-white">
            <FlatList
                data={latestProperties}
                keyExtractor={(item) => item.$id}
                renderItem={({ item }) => <Card item={item} onPress={() => handleCardPress(item.$id)} />}
                numColumns={2}
                columnWrapperClassName="flex gap-5 px-5"
                contentContainerClassName="pb-32"
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={loading ? <ActivityIndicator size="large" className="text-primary-300 mt-5" /> : <NoResults />}
                ListHeaderComponent={() => (
                    <>
                        <View className="my-5 px-5 flex flex-row justify-between items-center">
                            <View className="flex flex-row items-center">
                                <Image source={{ uri: user?.avatar.toString() }} className="size-10 rounded-full" />
                                <View className="ml-2">
                                    <Text className="text-xs font-rubik text-black-100">Good Morning</Text>
                                    <Text className="text-base font-rubik-medium text-black-300">{user?.name}</Text>
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

                        {latestPropertiesLoading ? (
                            <ActivityIndicator size="large" className="text-primary-300" />
                        ) : !latestProperties || latestProperties.length === 0 ? (
                            <NoResults />
                        ) : (
                            <FlatList
                                horizontal
                                numColumns={2}
                                data={properties}
                                keyExtractor={(item) => item.$id}
                                renderItem={({ item }) => <FeatureCard item={item} onPress={() => handleCardPress(item.$id)} />}
                                showsHorizontalScrollIndicator={false}
                                contentContainerClassName="flex gap-5 px-5"
                            />
                        )}

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
