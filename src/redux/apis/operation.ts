import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICocktail } from 'types/cocktail';
import { IIngredient } from 'types/ingredient';
// import testMi from 'redux-persist/lib/storage/';
// let token: string = 'My token';
const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:5000',
  // prepareHeaders: headers => {
  //   headers.set('authorization', `Bearer ${token}`);
  // },
});

export const startTest = createApi({
  reducerPath: 'api',
  refetchOnFocus: true,
  tagTypes: ['api'],
  baseQuery,
  keepUnusedDataFor: Infinity,

  endpoints: builder => ({
    takeIngredients: builder.query<IIngredient[], number>({
      query: limit => ({
        url: '/ingredients',
        params: {
          _limit: limit,
        },
      }),
      providesTags: ['api'],
      transformResponse: (response: IIngredient[]) => {
        // token = 'Now new token';

        return response;
      },
    }),

    takeCocktails: builder.query<ICocktail[], number>({
      query: limit => ({
        url: '/cocktail',
        params: {
          _limit: limit,
        },
      }),
      providesTags: ['api'],
      transformResponse: (response: ICocktail[]) => {
        return response;
      },
    }),
  }),
});

export const { useTakeIngredientsQuery, useTakeCocktailsQuery } = startTest;
