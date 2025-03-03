import React, { ReactNode } from 'react';
import { useFetch } from './use-fetch';
import { getCurrentUser } from './appwrite';
import { Models } from 'react-native-appwrite';

interface GlobalContextType {
    user: Models.User<Models.Preferences> | null;
    isLogged: boolean;
    loading: boolean;
    refetch: (newParams?: Record<string, any>) => Promise<void>;
}

const GlobalContext = React.createContext<GlobalContextType | null>(null);

export const GlobalContextProvider = ({ children }: { children: ReactNode }) => {
    const { data, loading, refetch } = useFetch({ fn: getCurrentUser });

    const isLogged = !!data;

    return <GlobalContext.Provider value={{ user: data, isLogged, refetch, loading }}>{children}</GlobalContext.Provider>;
};

export const useGlobalContext = () => {
    const context = React.useContext(GlobalContext);

    if (!context) {
        throw new Error('useGlobalContext must be used within a GlobalContextProvider');
    }

    return context;
};
