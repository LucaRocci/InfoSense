import { useState, useEffect } from 'react';

export type dataResponse = {
    anno: number,
    mese?: number,
    valore: number,
    arrivoPresenza: string
}

const useFetch = (url: string) => {
    const [apiData, setData] = useState<dataResponse[] | string[] | null>(null);
    const [loading, setLoading] = useState<boolean | null>(null);
    const [error, setError] = useState<boolean | null>(null);

    useEffect(() => {
        setLoading(true)
        setError(null);

        fetch(url , {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
              }
            })
            .then(async res => {
                const resJson = await res.json();
                setLoading(false);
                setData(resJson);
            })
            .catch(err => {
                setLoading(false)
                setError(true)
            })

    }, [url])

    return [ apiData, loading, error ]
}

export default useFetch;