import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const UTApiURL: string = 'https://api.uploadthing.com';

// TODO: сделать так, чтобы токен не попадал в сборку
export const UTApi = createApi({
  reducerPath: 'UTApi',
  baseQuery: fetchBaseQuery({
    baseUrl: UTApiURL,
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json');
      headers.set('X-Uploadthing-Api-Key', process.env.UT_API_TOKEN!);
      return headers;
    },
  }),
  endpoints: () => ({}),
});