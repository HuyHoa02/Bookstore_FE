import React, { useEffect } from "react";

function useFetch<T>(url: string) {
    const [loading, setLoading] = React.useState<boolean>(true)
    const [data, setData] = React.useState<T | null>(null)
    const [error, setError] = React.useState<Error | null>(null)


    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(url);
                const result = await response.json();
                setData(result);

            }
            catch (err) {
                setError(err as Error);
            }
            finally {
                setLoading(false);
            }
        };

        fetchData()
    }, [url])

    return { data, loading, error };
}

export default useFetch;