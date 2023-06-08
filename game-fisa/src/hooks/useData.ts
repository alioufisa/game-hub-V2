import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig } from "axios";

export interface Genre {
    id: number;
    name: string;
}

interface FetchResponse <T> {
  count: number;
  results: T[];
}
const useData = <T>(endpoint : string, requestConfige?: AxiosRequestConfig, deps? : any[]) => {

    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false)
  
    useEffect(() => {
      const controller = new AbortController();
  
      setLoading(true);
      apiClient
        .get<FetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfige })
        .then((res) => {
          setData(res.data.results);
          setLoading(false)
        })
        .catch((err) => {
          if (err.name === 'AbortError') {
              setError('Failed to fetch games. Please try again later.');
              setLoading(false)
            }
        });
  
      return () => {
        controller.abort();
      };
    }, deps ? [...deps] : []);
  
    return { data, error, isLoading };

}

export default useData 