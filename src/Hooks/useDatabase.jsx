import { useEffect, useCallback } from 'react';
import useSessionStorage from './useSessionStorage';

function useDatabase(url) {
    const [data, setData] = useSessionStorage('data', []);

    const fetchData = useCallback(async () => {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
    }, [url]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return data;
}

export default useDatabase;