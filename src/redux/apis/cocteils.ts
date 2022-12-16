import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from '../baseQuery';

interface IAddCoc {
  date: Date;
}

interface Date {
  name: string;
  id: string;
  cocType: string[];
  ingredients: string[];
  size: Size;
  cocMetod: string;
  description: string;
}

interface Size {
  rom: string;
  cola: string;
}

export const cocApi = createApi({
  reducerPath: 'coc',
  refetchOnFocus: true,
  tagTypes: ['coc'],
  baseQuery,
  // keepUnusedDataFor: Infinity,
  endpoints: builder => ({
    takeCocktails: builder.query({
      query: () => ({
        url: '/coc',
      }),
      providesTags: ['coc'],
      transformResponse: (response: ICocktail[]) => response,
    }),
    addNewCoctail: builder.query<ICocktail[], IAddCoc>({
      query: obj => ({
        url: '/coc',
        body: obj,
        method: 'POST',
      }),
      providesTags: ['coc'],
      transformResponse: (response: ICocktail[]) => response,
    }),
  }),
});

export const { useTakeCocktailsQuery, useAddNewCoctailQuery } = cocApi;
