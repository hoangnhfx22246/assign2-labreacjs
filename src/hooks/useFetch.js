import { useCallback, useState } from "react";

export function useFetch() {
  // TODO các trạng thái của useFetch hook
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState();

  // TODO hàm đọc và lấy dữ liệu qua httpRequest
  const requestData = useCallback(async (url, callback) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      callback(data);
    } catch (err) {
      setError(err.message || "Failed to fetch data");
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { isLoading, error, requestData };
}
