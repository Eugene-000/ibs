import { useEffect, useState } from "react";

export const useFetching = (callback, deps) => {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

  useEffect(() => {
    const fetching = async () => {
        try {
            setIsLoading(true);
            const data = await callback();
            setData(data);
        } catch (e) {
            setError(e.message);
        } finally {
            setIsLoading(false);
        }
    }

   fetching();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

    return [data, isLoading, error];
}

