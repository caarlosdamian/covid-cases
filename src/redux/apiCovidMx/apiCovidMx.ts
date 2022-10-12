import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { covidMexData } from '../../interfaces';

export const serviceURL = 'https://covid-19-statistics.p.rapidapi.com/';

export const covidMex = createApi({
  reducerPath: 'covidMex',
  baseQuery: fetchBaseQuery({
    baseUrl: serviceURL,
    prepareHeaders: (headers) => {
      headers.set(
        'X-RapidAPI-Key',
        `${import.meta.env.VITE_APP_X_RapidAPI_Key}`
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCovidMxData: builder.query<covidMexData[], void>({
      query: () => `reports?iso=MEX`,
    }),
  }),
});

export const { useGetCovidMxDataQuery } = covidMex;
