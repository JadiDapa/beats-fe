import axios from "axios";
import { useState } from "react";

const jwt =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiaWF0IjoxNzIxNDYzNDg1LCJleHAiOjE3MjE1NDk4ODV9.LOsPlpFAqgKeaMZy0enYEiBZ8-wNthRG5PSYXXqIk7U";

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: jwt ? { Authorization: `Bearer ${jwt}` } : {},
});

export const fetcher = (url: string) =>
  apiClient.get(url).then((res) => res.data);

export const useApiRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const apiRequest = async (
    method: "post" | "put" | "delete",
    url: string,
    data: object | FormData = {},
  ) => {
    setIsLoading(true);
    setError(null);
    const headers =
      data instanceof FormData
        ? {
            "Content-Type": "multipart/form-data",
          }
        : {};
    try {
      const result = await apiClient({
        method,
        url,
        data,
        headers,
      });
      return result.data;
    } catch (error) {
      setError(error as Error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { apiRequest, isLoading, error };
};
