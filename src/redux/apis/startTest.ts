import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const startTest = createApi({
  reducerPath: 'api',
  refetchOnFocus: true,
  tagTypes: ['api'],
  baseQuery: fetchBaseQuery({baseUrl: 'http://www.api.com/'}),
  endpoints: builder => ({
    searchMovie: builder.query({
      query: (title) => ({
        url: '/',
        params: {}
      }),
      providesTags: ['api'],
      transformResponse: (response: Response) => response
    })
  })
})

export const { useSearchMovieQuery } = startTest