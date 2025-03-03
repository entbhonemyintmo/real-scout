import { useCallback, useEffect, useState } from 'react';
import { Alert } from 'react-native';

type BaseParamsType = Record<string, string | number>;

type UseFetchOptions<T, P extends BaseParamsType> = {
    fn: (params?: P) => Promise<T>;
    params?: P;
    skip?: boolean;
};

type UseFetchReturn<T, P> = { data: T | null; loading: boolean; error: string | null; refetch: (newParams?: P) => Promise<void> };

export function useFetch<T, P extends BaseParamsType>({ fn, params, skip = false }: UseFetchOptions<T, P>): UseFetchReturn<T, P> {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchData = useCallback(async () => {
        try {
            setLoading(true);
            const result = await fn(params);

            setData(result);
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'An error occurred';
            setError(errorMessage);

            Alert.alert('Error', errorMessage);
        } finally {
            setLoading(false);
        }
    }, [fn]);

    const refetch = async (newParams?: P) => await fetchData();

    useEffect(() => {
        if (!skip) {
            fetchData();
        }
    }, []);

    return { data, loading, error, refetch };
}
