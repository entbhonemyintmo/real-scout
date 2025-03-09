import { ActivityIndicator, FlatList, Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { useEffect } from 'react';
import { router, useLocalSearchParams } from 'expo-router';

import icons from '@/constants/icons';
import Search from '@/components/Search';
import { Card } from '@/components/Cards';
import NoResults from '@/components/NoResults';

import { getProperties } from '@/lib/appwrite';
import { useFetch } from '@/lib/use-fetch';
import Filter from '@/components/Filter';

const Explore = () => {
    const params = useLocalSearchParams<{ query?: string; filter?: string }>();

    const {
        data: properties,
        refetch,
        loading,
    } = useFetch({
        fn: getProperties,
        params: {
            filter: params.filter!,
            query: params.query!,
        },
        skip: true,
    });

    useEffect(() => {
        refetch({
            filter: params.filter!,
            query: params.query!,
        });
    }, [params.filter, params.query]);

    const handleCardPress = (id: string) => router.push(`/properties/${id}`);

    return (
        <SafeAreaView className="h-full bg-white">
            <FlatList
                data={properties}
                numColumns={2}
                renderItem={({ item }) => <Card item={item} onPress={() => handleCardPress(item.$id)} />}
                keyExtractor={(item) => item.$id}
                contentContainerClassName="pb-32"
                columnWrapperClassName="flex gap-5 px-5"
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={loading ? <ActivityIndicator size="large" className="text-primary-300 mt-5" /> : <NoResults />}
                ListHeaderComponent={() => (
                    <>
                        <View className="flex flex-row items-center justify-between mb-5 px-5">
                            <TouchableOpacity onPress={() => router.back()} className="flex flex-row bg-primary-200 rounded-full size-11 items-center justify-center">
                                <Image source={icons.backArrow} className="size-5" />
                            </TouchableOpacity>

                            <Text className="text-base mr-2 text-center font-rubik-medium text-black-300">Search for Your Ideal Home</Text>
                            <Image source={icons.bell} className="w-6 h-6" />
                        </View>

                        <View className="px-5">
                            <Search />
                        </View>

                        <View className="mt-5 ps-5">
                            <Filter />

                            <Text className="text-xl font-rubik-bold text-black-300 mb-5">Found {properties?.length} Properties</Text>
                        </View>
                    </>
                )}
            />
        </SafeAreaView>
    );
};

export default Explore;
