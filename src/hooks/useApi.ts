import { useEffect, useState } from 'react';
import useLocalStorage from "./useLocalStorage"

export const useApi = () => {
  const [fetchData, setFetchData] = useLocalStorage('COVID_CASES_DATA', []);

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
