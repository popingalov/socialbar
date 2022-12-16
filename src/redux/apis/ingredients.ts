import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from '../baseQuery';

interface IResponseIng {
  ingList: IIngredient[];
  status: string;
}
interface Date {
  name: string;
  category: string;
  description: string;
}

export const ingApi = createApi({
  reducerPath: 'ing',
  refetchOnFocus: true,
  tagTypes: ['ing'],
  baseQuery,
  // keepUnusedDataFor: Infinity,
  endpoints: builder => ({
    takeIngredients: builder.query({
      query: () => ({
        url: '/ing',
        method: 'GET',
      }),
      providesTags: ['ing'],
      transformResponse: (response: IResponseIng) => response.ingList,
    }),

    addIngredient: builder.query<IIngredient[], { date: Date }>({
      query: ing => ({
        url: '/ing',
        method: 'POST',
        body: ing,
      }),
      providesTags: ['ing'],
      transformResponse: (response: IIngredient[]) => response,
    }),
  }),
});

export const { useTakeIngredientsQuery, useAddIngredientQuery } = ingApi;
