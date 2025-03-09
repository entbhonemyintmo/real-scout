import { Account, Avatars, Client, Databases, OAuthProvider, Query } from 'react-native-appwrite';
import * as Linking from 'expo-linking';
import { openAuthSessionAsync } from 'expo-web-browser';
import { User } from './types';

export const config = {
    platform: 'com.entbhone.realscout',
    endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
    projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
    databaseId: process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID,
    agentsCollectionId: process.env.EXPO_PUBLIC_APPWRITE_AGENTS_COLLECTION_ID,
    galleriesCollectionId: process.env.EXPO_PUBLIC_APPWRITE_GALLERIES_COLLECTION_ID,
    reviewsCollectionId: process.env.EXPO_PUBLIC_APPWRITE_REVIEWS_COLLECTION_ID,
    propertiesCollectionId: process.env.EXPO_PUBLIC_APPWRITE_PROPERTIES_COLLECTION_ID,
};

const appwrite = new Client();

appwrite.setEndpoint(config.endpoint!).setProject(config.projectId!).setPlatform(config.platform!);

export const avatar = new Avatars(appwrite);
export const account = new Account(appwrite);
export const databases = new Databases(appwrite);

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

export async function getLatestProperties() {
    try {
        const result = await databases.listDocuments(config.databaseId!, config.propertiesCollectionId!, [Query.orderAsc('$createdAt'), Query.limit(5)]);

        return result.documents;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function getProperties({ filter, query, limit }: { filter: string; query: string; limit?: number }) {
    try {
        const buildQuery = [Query.orderDesc('$createdAt')];

        if (filter && filter !== 'All') buildQuery.push(Query.equal('type', filter));

        if (query) buildQuery.push(Query.or([Query.search('name', query), Query.search('address', query), Query.search('type', query)]));

        if (limit) buildQuery.push(Query.limit(limit));

        const result = await databases.listDocuments(config.databaseId!, config.propertiesCollectionId!, buildQuery);

        // console.log({ filter, query, limit });
        // console.log(result.documents.map((doc) => doc.name));

        return result.documents;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function getPropertyById({ id }: { id: string }) {
    try {
        const result = await databases.getDocument(config.databaseId!, config.propertiesCollectionId!, id);
        return result;
    } catch (error) {
        console.error(error);
        return null;
    }
}
