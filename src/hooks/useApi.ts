/* eslint-disable */
import { useEffect, useState } from 'react';
import fetch from 'node-fetch';

export const useApi = () => {
  const [fetchData, setFetchData] = useState([]);

  const getData = async () => {
    const getter = await fetch(
      'https://api.covidtracking.com/v1/us/daily.json'
    );
    const data = await getter.json();
    setFetchData(data);
    window.localStorage.setItem('COVID_CASES_DATA', JSON.stringify(data));
  };

  useEffect(() => {
    window.localStorage.getItem('COVID_CASES_DATA')
      ? setFetchData(
          JSON.parse(window.localStorage.getItem('COVID_CASES_DATA') || '{}')
        )
      : getData();
  }, []);

  return { fetchData };
};
