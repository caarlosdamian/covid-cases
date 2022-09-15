import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Irow } from '../interfaces';

// Define a service using a base URL and expected endpoints
export const useApi = createApi({
  reducerPath: 'useApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.covidtracking.com/v1/' }),
  endpoints: (builder) => ({
    getCovidData: builder.query<Irow[], void>({
      query: () => `us/daily.json`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCovidDataQuery } = useApi;
