import { useState, useEffect } from "react";

export function useFetch(URL) {
  const [obj, setObj] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });

  async function getData(URL) {
    if (!obj.isLoading) {
      setTimeout(async () => {}, 1000);
    }

    try {
      const res = await fetch(URL);
      const data = await res.json();

      const newObj = { data: data, isLoading: false, hasError: false };

      setObj(newObj);
    } catch (err) {
      console.error(err);

      const newObj = { data: null, isLoading: false, hasError: true };
      setObj(newObj);
    }
  }

  useEffect(() => {
    getData(URL);
  }, [URL]);

  return { ...obj };
}