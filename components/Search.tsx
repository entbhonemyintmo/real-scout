import { View, Image, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import icons from '@/constants/icons';
import { router, useLocalSearchParams } from 'expo-router';
import { useDebouncedCallback } from 'use-debounce';

const Search = () => {
    const params = useLocalSearchParams<{ query?: string }>();
    const [search, setSearch] = useState(params.query);

    const debouncedSearch = useDebouncedCallback((text: string) => {
        router.setParams({ query: text });
    }, 500);

    const handleSearch = (text: string) => {
        setSearch(text);
        debouncedSearch(text);
    };

    return (
        <View className="flex flex-row items-center justify-between bg-primary-100 rounded-2xl p-3">
            <View className="flex-1 flex flex-row items-center justify-center z-50">
                <Image source={icons.search} className="size-5" />
                <TextInput value={search} onChangeText={(text) => handleSearch(text)} placeholder="Search" placeholderTextColor="#A0AEC0" className="font-rubik text-black-300 ml-2 flex-1" />
            </View>

            <TouchableOpacity>
                <Image source={icons.filter} className="size-5" />
            </TouchableOpacity>
        </View>
    );
};

export default Search;
