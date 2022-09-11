import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { IFormInputs } from '../interfaces';

export const authApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    getAuthToken: builder.mutation<string, IFormInputs>({
      query: ({ ...bodly }) => ({
        url: `/api/auth/login`,
        method: 'POST',
        body: bodly,
        providesTags: ['User'],
      }),
    }),
  }),
});

export const { useGetAuthTokenMutation } = authApi;
