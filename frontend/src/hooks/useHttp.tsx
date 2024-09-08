import { useCallback, useState } from "react";

interface FetchState<T> {
  data: T | null;
  isLoading: boolean;
  error: string | null;
}
const useHttp = <T,>(
  url: string,
  initialOptions?: RequestInit
): [FetchState<T>, (options?: RequestInit) => Promise<void>] => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(
    async (options?: RequestInit) => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(url, { ...initialOptions, ...options });
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }

        const resData = await response.json();
        setData(resData);
        // setIsLoading(false);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    },
    [url, initialOptions]
  );

  return [
    {
      data,
      isLoading,
      error,
    },
    fetchData,
  ];
};

export default useHttp;
