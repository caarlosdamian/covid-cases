import { useEffect, useState } from 'react';

export const useApi = () => {
  const [fetchData, setFetchData] = useState([]);

  const getData = async () => {
    const getter = await fetch(
      'https://api.covidtracking.com/v1/us/daily.json'
    );
    const data = await getter.json();
    setFetchData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return { fetchData };
};
