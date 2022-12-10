import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface IIngredient {
  name: string;
  des: string;
  type: string;
}

interface ICocktail {
  name: string;
  des: string;
  recipe: string[];
  type: string[];
  ingredients: string[];
}

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
        url: '/ingredients',
        params: {
          // _limit:limit,
        },
      }),
      providesTags: ['api'],
      transformResponse: (response: ICocktail[]) => response,
    }),
  }),
});

export const { useTakeIngredientsQuery, useTakeCocktailsQuery } = startTest;
