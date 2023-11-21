
import { useState, useEffect } from 'react';

export const Fetch=(url)=> {

  const [data, setData] = useState([]);

  async function fetchUrl() {
    const response = await fetch(url);
    const json = await response.json();

    setData(json);
  }

  useEffect(() => {
    fetchUrl();
  }, []);

  return [data];

}

//export { useFetch };