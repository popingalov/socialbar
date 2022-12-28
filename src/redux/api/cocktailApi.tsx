import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from '../baseQuery';
import { ICocktail } from 'types/cocktail';
import { COCKTAIL_URL, TAGS_TYPES } from 'constants/api';

export const cocktailApi = createApi({
  reducerPath: 'cocktailApi',
  baseQuery,
  tagTypes: [TAGS_TYPES.cocktails],
  endpoints: builder => ({
    fetchCocktails: builder.query<ICocktail[], void>({
      query() {
        return {
          url: `${COCKTAIL_URL}`,
        };
      },
      providesTags: result =>
        result
          ? [
              ...result.map(({ id }) => ({
                type: TAGS_TYPES.cocktails,
                id,
              })),
              { type: TAGS_TYPES.cocktails, id: 'LIST' },
            ]
          : [{ type: TAGS_TYPES.cocktails, id: 'LIST' }],
    }),

    getCocktailById: builder.query<ICocktail, string>({
      query(id) {
        return {
          url: `${COCKTAIL_URL}/${id}`,
        };
      },
      providesTags: (result, error, id) => [{ type: TAGS_TYPES.cocktails, id }],
    }),

    addCocktail: builder.mutation<ICocktail, Partial<ICocktail>>({
      query: newIngredient => ({
        url: `${COCKTAIL_URL}`,
        method: 'POST',
        body: newIngredient,
      }),
      invalidatesTags: [{ type: TAGS_TYPES.cocktails, id: 'LIST' }],
    }),

    updateCocktail: builder.mutation<
      ICocktail,
      Partial<ICocktail> & Pick<ICocktail, 'id'>
    >({
      query: ({ id, ...ingredient }) => ({
        url: `${COCKTAIL_URL}/${id}`,
        method: 'PUT',
        body: ingredient,
      }),
      invalidatesTags: (result, error, arg) => [
        { type: TAGS_TYPES.cocktails, id: arg.id },
      ],
    }),

    deleteCocktail: builder.mutation<ICocktail, string>({
      query: id => ({
        url: `${COCKTAIL_URL}/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: TAGS_TYPES.cocktails, id: 'LIST' }],
    }),
  }),
});

export const {
  useFetchCocktailsQuery,
  useGetCocktailByIdQuery,
  useAddCocktailMutation,
  useUpdateCocktailMutation,
  useDeleteCocktailMutation,
} = cocktailApi;
