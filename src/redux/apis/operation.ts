import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICocktail } from 'types/cocktail';
import { IIngredient } from 'types/ingredient';

export const startTest = createApi({
  reducerPath: 'api',
  refetchOnFocus: true,
  tagTypes: ['api'],
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  keepUnusedDataFor: Infinity,
  endpoints: builder => ({
    takeIngredients: builder.query({
      query: limit => ({
        url: '/ingredients',
        params: {
          _limit: limit,
        },
      }),
      providesTags: ['api'],
      transformResponse: (response: IIngredient[]) => response,
    }),
    takeCocktails: builder.query({
      query: limit => ({
        url: '/cocktail',
        params: {
          _limit: limit,
        },
      }),
      providesTags: ['api'],
      transformResponse: (response: ICocktail[]) => response,
    }),
  }),
});

export const { useTakeIngredientsQuery, useTakeCocktailsQuery } = startTest;
