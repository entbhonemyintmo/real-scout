import { Account, Avatars, Client, OAuthProvider } from 'react-native-appwrite';
import * as Linking from 'expo-linking';
import { openAuthSessionAsync } from 'expo-web-browser';
import { User } from './types';

export const config = {
    platform: 'com.entbhone.realscout',
    endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
    projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
};

const appwrite = new Client();

appwrite.setEndpoint(config.endpoint!).setProject(config.projectId!).setPlatform(config.platform!);

export const avatar = new Avatars(appwrite);
export const account = new Account(appwrite);

export async function login() {
    try {
        const redrictURL = Linking.createURL('/');

        const createAccResponse = account.createOAuth2Token(OAuthProvider.Google, redrictURL);

        if (!createAccResponse) throw new Error('Failed to create OAuth2 token');

        const result = await openAuthSessionAsync(createAccResponse.toString(), redrictURL);

        if (result.type !== 'success') throw new Error('Failed to open auth session');

        const url = new URL(result.url);
        const secret = url.searchParams.get('secret');
        const userId = url.searchParams.get('userId');

        if (!secret || !userId) throw new Error('Failed to sign in');

        const session = await account.createSession(userId, secret);

        if (!session) throw new Error('Failed to create session');

        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}

export async function logout() {
    try {
        await account.deleteSession('current');

        return true;
    } catch (error) {
        console.error(error);

        return false;
    }
}

export async function getCurrentUser() {
    try {
        const user = await account.get();

        if (user.$id) {
            const userAvater = avatar.getInitials(user.name || 'User');

            return {
                ...user,
                avatar: userAvater,
            };
        }

        return user as User;
    } catch (error) {
        console.error(error);

        return null;
    }
}
