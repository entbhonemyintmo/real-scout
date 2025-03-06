import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { categories } from '@/constants/data';
import { router, useLocalSearchParams } from 'expo-router';

const Filter = () => {
    const params = useLocalSearchParams<{ filter?: string }>();
    const [selected, setSelected] = React.useState(params.filter ?? 'All');

    const handleOnPress = (category: string) => {
        if (category === selected) {
            setSelected('');
            router.setParams({ filter: '' });
            return;
        }

        setSelected(category);
        router.setParams({ filter: category });
    };

    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-5">
            {categories.map((item, index) => (
                <TouchableOpacity
                    key={index}
                    onPress={() => handleOnPress(item.category)}
                    className={`min-w-14 mr-4 py-1.5 px-3 rounded-full flex-row items-center justify-center ${selected === item.category ? 'bg-primary-300' : 'bg-primary-100 border border-zinc-100'}`}
                >
                    <Text className={`text-base ${selected === item.category ? 'text-white font-rubik-bold' : 'text-black-200 font-rubik-medium'}`}>{item.title}</Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
};

export default Filter;
