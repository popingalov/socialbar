import { createApi } from '@reduxjs/toolkit/query/react';
import { IFavoriteResponse } from 'types/response.d.';
import { ICocktail } from 'types/cocktail';
import baseQuery from 'redux/baseQuery';
import { FAVORITE_URL, TAGS_TYPES } from 'constants/api';
import { cocktailApi } from './cocktailApi';

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
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        console.log('starting!');
        try {
          await queryFulfilled;
          dispatch(cocktailApi.util.invalidateTags([TAGS_TYPES.cocktails]));
        } catch (err) {
          console.log('error... ', err);
        }
      },
    }),

    deleteFavorite: builder.mutation<IFavoriteResponse, string>({
      query: cocktailId => ({
        url: `${FAVORITE_URL}/${cocktailId}`,
        method: 'DELETE',
      }),
      invalidatesTags: [TAGS_TYPES.favorites],
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        console.log('starting!');
        try {
          await queryFulfilled;
          dispatch(cocktailApi.util.invalidateTags([TAGS_TYPES.cocktails]));
        } catch (err) {
          console.log('error... ', err);
        }
      },
    }),
  }),
});

export const {
  useGetFavoritesQuery,
  useAddFavoriteMutation,
  useDeleteFavoriteMutation,
} = favoriteApi;
