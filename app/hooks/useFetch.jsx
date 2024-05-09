import { useEffect, useState } from "react";

export function useFetch(fetchFn, initialValue) {
  const [error, setError] = useState();
  const [fetchedData, setFetchedData] = useState(initialValue);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchFn();
        setFetchedData(data);
      } catch (error) {
        setError({ message: error.message || "Failed to fetch data." });
      }
    }

    fetchData();
  }, [fetchFn]);

  return {
    fetchedData,
    setFetchedData,
    error,
  };
}
