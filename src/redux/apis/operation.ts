import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const startTest = createApi({
  reducerPath: 'api',
  refetchOnFocus: true,
  tagTypes: ['api'],
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  keepUnusedDataFor: Infinity,
  endpoints: builder => ({
    takeIngredients: builder.query({
      query: (limit) => ({
        url: '/ingredients',
        params: {
        _limit:limit,
        }
      }),
      providesTags: ['api'],
      transformResponse: (response: Response) => response
    }),
    takeCocktails: builder.query({
      query: (limit) => ({
        url: '/ingredients',
        params: {
        // _limit:limit,
        }
      }),
      providesTags: ['api'],
      transformResponse: (response: Response) => response,
      
    })
  })
})


export const { useTakeIngredientsQuery,useTakeCocktailsQuery } = startTest