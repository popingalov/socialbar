import { createApi } from '@reduxjs/toolkit/query/react';
import { IFavoriteResponse } from 'types/response.d.';
import { ICocktail } from 'types/cocktail';
import baseQuery from 'redux/baseQuery';
import { FAVORITE_URL, TAGS_TYPES } from 'constants/api';

export const favoriteApi = createApi({
  reducerPath: 'favoriteApi',
  baseQuery,
  tagTypes: [TAGS_TYPES.favorites],
  endpoints: builder => ({
    getFavorites: builder.query<ICocktail[], void>({
      query() {
        return {
          url: `${FAVORITE_URL}`,
        };
      },
      transformResponse: (result: IFavoriteResponse) => result.cocktails,
      providesTags: [TAGS_TYPES.favorites],
    }),

    addFavorite: builder.mutation<ICocktail[], string>({
      query: cocktailId => ({
        url: `${FAVORITE_URL}`,
        method: 'POST',
        body: { id: cocktailId },
      }),
      invalidatesTags: [TAGS_TYPES.favorites],
    }),

    deleteFavorite: builder.mutation<IFavoriteResponse, string>({
      query: cocktailId => ({
        url: `${FAVORITE_URL}/${cocktailId}`,
        method: 'DELETE',
      }),
      invalidatesTags: [TAGS_TYPES.favorites],
    }),
  }),
});

export const {
  useGetFavoritesQuery,
  useAddFavoriteMutation,
  useDeleteFavoriteMutation,
} = favoriteApi;
