import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Irow } from '../interfaces';

export const useApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.covidtracking.com/v1/' }),
  tagTypes: [],
  endpoints: (builder) => ({
    getCovidData: builder.query<Irow[], string>({
      query: () => `us/daily.json`,
    }),
  }),
});

export const { useGetCovidDataQuery } = useApi;
