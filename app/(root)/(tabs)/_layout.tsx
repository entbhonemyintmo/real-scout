import { View, Text, Image } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import icons from '@/constants/icons';

type TabIconProps = {
    title: string;
    icon: any;
    focused: boolean;
};

const TabIcon = ({ title, icon, focused }: TabIconProps) => {
    return (
        <View className="flex flex-col flex-1 items-center">
            <Image source={icon} tintColor={`${focused ? '#0061ff' : '#666876'}`} resizeMode="contain" className="size-6" />

            <Text className={`${focused ? 'text-primary-300 font-rubik-medium' : 'text-black-200 font-rubik'} text-xs w-full text-center mt-1`}>{title}</Text>
        </View>
    );
};

const TabsLayout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: 'white',
                    position: 'absolute',
                    borderTopColor: '#0061FF1A',
                    borderTopWidth: 1,
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => <TabIcon title="Home" icon={icons.home} focused={focused} />,
                }}
            />

            <Tabs.Screen
                name="explore"
                options={{
                    title: 'Explore',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => <TabIcon title="Explore" icon={icons.search} focused={focused} />,
                }}
            />

            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => <TabIcon title="Profile" icon={icons.person} focused={focused} />,
                }}
            />
        </Tabs>
    );
};

export default TabsLayout;
