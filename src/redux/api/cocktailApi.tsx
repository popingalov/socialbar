import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from '../baseQuery';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { COCKTAIL_URL, TAGS_TYPES } from 'constants/api';
import { ICocktail } from 'types/cocktail';
import { ICocktailResponse } from 'types/response.d.';
import { IIngredient } from 'types/ingredient';

interface AllCocktailsResponse {
  all: ICocktail[];
  haveAll: ICocktail[];
  needMore: ICocktail[];
  other: ICocktail[];
  mine: { haveAll: ICocktail[]; other: ICocktail[] } | null;
}

export const cocktailApi = createApi({
  reducerPath: 'cocktailApi',
  baseQuery,
  tagTypes: [TAGS_TYPES.cocktails],
  endpoints: builder => ({
    fetchCocktails: builder.query<AllCocktailsResponse, void>({
      //TODO: Uncomment query and delete queryFn, when bug with ingredient.data===null will be fixing
      async queryFn(_arg, { getState }, _extraOptions, fetchWithBQ) {
        const { data, error } = await fetchWithBQ(`${COCKTAIL_URL}`);
        if (error)
          return {
            error: error as FetchBaseQueryError,
          };

        const newData = transformCocktailResponse(data as AllCocktailsResponse);

        return {
          data: newData,
        };
      },

      // query() {
      //   return {
      //     url: `${COCKTAIL_URL}/`,
      //   };
      // },

      providesTags: [TAGS_TYPES.cocktails],
    }),

    getCocktailById: builder.query<ICocktailResponse, string>({
      query(id) {
        return {
          url: `${COCKTAIL_URL}/${id}`,
        };
      },
      providesTags: (result, error, id) => [
        { type: TAGS_TYPES.cocktailById, id },
      ],
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

//TODO: delete these functions when bug with ingredient.data will be fixing
function transformCocktailResponse<T extends AllCocktailsResponse>(
  response: T,
) {
  let newData = {} as T;
  for (let k in response) {
    if (response[k] === null) {
      newData = { ...newData, [k]: null };
    } else if (!Array.isArray(response[k])) {
      newData = { ...newData, [k]: response[k] };
    } else {
      const newArray = (response[k] as ICocktail[]).map(changeDataNull);
      newData = { ...newData, [k]: newArray };
    }
  }
  return newData;
}

function changeDataNull(cocktail: ICocktail): ICocktail {
  const deletedIngredient = {
    description: 'Deleted ingredient',
    id: '63ab35508fef0a81b71fa8f0',
    title: 'Deleted ingredient',
    picture: 'https://cdn-icons-png.flaticon.com/512/985/985515.png',
  } as IIngredient;

  const { ingredients } = cocktail;
  const newIngredients = ingredients.map(ingredient => {
    if (!ingredient.data) {
      return { ...ingredient, data: deletedIngredient };
    }
    return ingredient;
  });

  return { ...cocktail, ingredients: [...newIngredients] };
}
