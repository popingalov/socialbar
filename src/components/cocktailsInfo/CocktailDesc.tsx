import { useMemo } from 'react';
import {
  useGetFavoritesQuery,
  useAddFavoriteMutation,
  useDeleteFavoriteMutation,
} from 'redux/api/favoriteApi';
import Box from 'components/box/Box';
import { HiPencil, HiStar } from 'react-icons/hi';
import {
  EditBtn,
  FavoriteBtn,
  Decs,
  Image,
  Title,
} from './CocktailDesc.styled';
import { ICocktailResponse } from 'types/response.d.';
import RecipeList from './recipeList';
import Loader from 'components/loader';

interface IProps {
  cocktailId: string;
  cocktail: ICocktailResponse;
}

const CocktailDescription: React.FC<IProps> = ({ cocktailId, cocktail }) => {
  const { data: favorites } = useGetFavoritesQuery();
  const [addFavorite, { isLoading: isAddingFavorite }] =
    useAddFavoriteMutation();
  const [deleteFavorite, { isLoading: isDeletingFavorite }] =
    useDeleteFavoriteMutation();

  const favorite: boolean = useMemo(() => {
    if (!favorites) {
      return false;
    }

    const matches = favorites.find(item => item.id === cocktailId);

    return !!matches;
  }, [favorites, cocktailId]);

  const stepsForRecipe = useMemo(() => {
    if (cocktail) {
      const result = cocktail.recipe.split('.');
      result.pop();
      return result;
    } else {
      return null;
    }
  }, [cocktail]);

  const onClickEdit = () => {
    console.log('edit cocktail');
  };

  const onClickFavorite = (id: string) => {
    if (favorite) {
      deleteFavorite(id);
    } else {
      addFavorite(id);
    }
  };

  return (
    <>
      <Loader isLoading={isAddingFavorite || isDeletingFavorite} />
      <Box backgroundColor="mainBackgroundColor">
        {cocktail && (
          <Box px={3} py={3}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mb={3}
            >
              <Title>{cocktail.title}</Title>
              <Box as={'ul'} display="flex" flexWrap="nowrap" gridGap={1}>
                <li>
                  <EditBtn onClick={onClickEdit}>
                    <HiPencil size={24} />
                  </EditBtn>
                </li>
                <li>
                  <FavoriteBtn
                    onClick={() => onClickFavorite(cocktail.id)}
                    favorite={favorite}
                  >
                    <HiStar size={24} />
                  </FavoriteBtn>
                </li>
              </Box>
            </Box>
            <Image src={cocktail.picture} />
            <Decs>{cocktail.description}</Decs>

            {stepsForRecipe && (
              <RecipeList
                stepsForRecipe={stepsForRecipe}
                ingredients={cocktail.ingredients}
              />
            )}
          </Box>
        )}
      </Box>
    </>
  );
};

export default CocktailDescription;
