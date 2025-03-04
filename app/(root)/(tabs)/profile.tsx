import { View, Text, TouchableOpacity, ScrollView, Image, ImageSourcePropType, Pressable, Alert } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import icons from '@/constants/icons';
import { useGlobalContext } from '@/lib/global-context-provider';
import { settings } from '@/constants/data';
import { logout } from '@/lib/appwrite';

interface SettingItemProps {
    icon: ImageSourcePropType;
    title: string;
    textStyles?: string;
    onPress: () => void;
    showArrow?: boolean;
    borderBottom?: boolean;
}

const SettingItem = ({ icon, title, textStyles, onPress, showArrow = true, borderBottom = true }: SettingItemProps) => {
    return (
        <TouchableOpacity onPress={onPress} className={`flex flex-row justify-between items-center py-4 ${borderBottom ? 'border-b border-gray-200' : ''}`}>
            <View className="flex flex-row justify-between items-center w-full">
                <View className="flex flex-row items-center">
                    <Image source={icon} className="size-5" />
                    <Text className={`ml-3 font-rubik-medium text-md text-black-300 ${textStyles}`}>{title}</Text>
                </View>
                {showArrow && <Image source={icons.rightArrow} className="size-5" />}
            </View>
        </TouchableOpacity>
    );
};

const Profile = () => {
    const router = useRouter();
    const { user, refetch } = useGlobalContext();

    const handleBackToHome = () => {
        router.push('/');
    };

    const handleLogout = async () => {
        const result = await logout();

        if (result) {
            Alert.alert('Logout', 'You have been logged out successfully');
            refetch();
        } else {
            Alert.alert('Error', 'Failed to log out');
        }
    };

    const confirmLogout = () => {
        Alert.alert(
            'Confirm Logout',
            'Are you sure you want to log out?',
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'Logout',
                    onPress: handleLogout,
                    style: 'destructive',
                },
            ],
            { cancelable: true },
        );
    };

    return (
        <SafeAreaView className="h-full bg-white">
            <ScrollView contentContainerClassName="pb-32 px-7">
                {/* Header */}
                <View className="flex flex-row justify-between items-center mt-5">
                    <Text className="text-3xl font-bold">Profile</Text>
                    <TouchableOpacity onPress={handleBackToHome}>
                        <Image source={icons.bell} className="size-6" />
                    </TouchableOpacity>
                </View>

                {/* User */}
                <View className="flex items-center mt-5">
                    <View className="position-relative">
                        <Image source={{ uri: user?.avatar?.toString() }} className="size-32 rounded-full" />
                        <TouchableOpacity className="absolute bottom-1 right-1">
                            <Image source={icons.edit} className="size-6" />
                        </TouchableOpacity>
                    </View>
                    <Text className="text-xl font-bold mt-2">{user?.name}</Text>
                </View>

                {/* Settings */}
                <View className="mt-10 px-4 bg-primary-100 rounded-2xl">
                    <SettingItem icon={icons.calendar} title="My Booking" onPress={() => router.push('/')} />
                    <SettingItem icon={icons.wallet} title="Payments" onPress={() => router.push('/')} borderBottom={false} />
                </View>

                <View className="mt-10 px-4 bg-primary-100 rounded-2xl">
                    {settings.map((setting, index) => (
                        <SettingItem key={index} icon={setting.icon} title={setting.title} onPress={() => router.push('/')} borderBottom={settings.length !== index + 1} />
                    ))}
                </View>

                {/* Logout */}
                <View className="w-full mt-10 px-20">
                    <Pressable className="flex flex-row justify-center border border-red-500 items-center py-3 rounded-full" onPress={confirmLogout}>
                        <View className="flex flex-row items-center">
                            <Text className="text-red-500 font-rubik-medium text-lg">Logout</Text>
                            <Image source={icons.logout} className="size-5 ml-2" />
                        </View>
                    </Pressable>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Profile;
