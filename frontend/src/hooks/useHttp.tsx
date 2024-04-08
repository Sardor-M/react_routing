import { useCallback, useEffect, useState } from "react";

interface ConfigProps {
  method?: string;
  body?: any;
}

// helper function to fetch the details
async function sendHttpRequest(url: string, config: ConfigProps) {
  const response = await fetch(url, config);
  const resData = await response.json();

  if (!response.ok) {
    throw new Error(
      resData.message || "Encountered an error and failed to make a request"
    );
  }
  return resData;
}

export default function useHttp(
  url: string,
  config: ConfigProps,
  initialData: any
) {
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // this is used to clear the data in the state
  function clearData() {
    setData(initialData);
  }

  const sendRequest = useCallback(
      // now the sendRequest can be used such that it can be called with the url and the config
    async function sendRequest() {
      setIsLoading(true);

      try {
        // merging the data with the config
        const resData = await sendHttpRequest(url, { ...config, body: data });
        setData(data);
      } catch (error: any) {
        setError(error.message || "Something went wrong");
      }
      setIsLoading(false);
    },
    [url, config]
  );

  useEffect(() => {
    if (config && (config.method === "GET" || !config?.method)) {
      sendRequest().then((r) => console.log(r));
    }
  }, [sendRequest, config]);

  return {
    data,
    isLoading,
    error,
    setIsLoading,
    clearData,
  };
}
