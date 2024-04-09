import { useEffect, useState } from "react";

interface FetchState<T> {
  data: T | null;
  isLoading: boolean;
  error: string | null;
}
const useHttpNew = <T,>(url: string, options?: RequestInit): FetchState<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }

        const resData = await response.json();
        setData(resData);
        setIsLoading(false);
      } catch (error: any) {
        setError(error.message);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [url, options]);

  return {
    data,
    isLoading,
    error,
  };
};

export default useHttpNew;
