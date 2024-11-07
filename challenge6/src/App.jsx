import { useFetch } from "./hook/useFetch";
import { useState, useEffect } from "react";

export function App() {

  const { data, isLoading, hasError } = useFetch(
    "https://pokeapi.co/api/v2/pokemon/"
  );

  const [theData, setTheData] = useState(data);

  useEffect(() => {
    setTheData(data);
  }, [data]);

  return (
    <>
      <h1>Data:</h1>
      <section>
        {isLoading ? (
          <span>Loading...</span>
        ) : hasError ? (
          <span>Error fetching data</span>
        ) : (
          <span>{JSON.stringify(theData)}</span>
        )}
      </section>
    </>
  );
}