import { useEffect, useState } from "react";

export const useFetch = (apiPath, queryTerm = "") => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const key = import.meta.env.VITE_API_KEY;

  // Skip fetch if no apiPath
  if (!apiPath) return { data, error };

  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${key}&query=${encodeURIComponent(queryTerm)}`;

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("Network response was not ok");
        const json = await res.json();
        if (isMounted) setData(json.results || []);
      } catch (err) {
        if (isMounted) setError(err.message);
      }
    };

    fetchData();

    return () => { isMounted = false; };
  }, [url]);

  return { data, error };
};
