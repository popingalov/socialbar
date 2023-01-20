import React, { useState, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetCocktailByIdQuery } from 'redux/api/cocktailApi';
import {
  useGetFavoritesQuery,
  useAddFavoriteMutation,
  useDeleteFavoriteMutation,
} from 'redux/api/favoriteApi';
import Box from 'components/box/Box';
import { HiPencil, HiStar } from 'react-icons/hi';
import { BiCheck } from 'react-icons/bi';
import RecipeItem from './RecipeItem';
import AdditionalInfo from './AdditionalInfo';
import Loader from 'components/loader/Loader';
import defaultIngredientPicture from 'assets/images/default-ingredient.jpg';

import {
  EditBtn,
  FavoriteBtn,
  Decs,
  Image,
  Title,
  RecipeList,
  IngredientItem,
  IngredientImage,
  IngredientName,
  IngredientQuantity,
} from './CocktailDesc.styled';

const CocktailDescription = () => {
  const { cocktailId } = useParams();

  const { data: cocktail, isFetching } = useGetCocktailByIdQuery(
    cocktailId as string,
    {
      skip: cocktailId === undefined,
    },
  );

  const { data: favorites } = useGetFavoritesQuery();
  const [addFavorite] = useAddFavoriteMutation();
  const [deleteFavorite] = useDeleteFavoriteMutation();

  const navigate = useNavigate();
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

  const onClickIngredient = (id: string) => {
    navigate(`/ingredients/${id}`);
  };

  if (isFetching) {
    return <Loader isLoading={isFetching} />;
  }

  return (
    <Box>
      {cocktail && (
        <>
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

            <RecipeList>
              {stepsForRecipe &&
                stepsForRecipe.map((item, index) => (
                  <RecipeItem
                    item={item}
                    key={index}
                    ingredients={cocktail.ingredients}
                  />
                ))}
            </RecipeList>
          </Box>
          <Box as="ul" borderTop="1px solid" borderColor="borderBottom">
            {cocktail.ingredients.map(ingredient => {
              const {
                measure,
                data,
                alternatives,
                isDressing,
                isOptional,
                measureType,
              } = ingredient;
              const { id, title, picture } = data;
              const isInMyBar = false;
              const image = picture ? picture : defaultIngredientPicture;
              return (
                <IngredientItem
                  key={title + measure}
                  isInMyBar={isInMyBar}
                  onClick={() => onClickIngredient(id)}
                >
                  <IngredientImage src={image} alt={title} />
                  <Box flexGrow={1} alignSelf="start" pt={2}>
                    <IngredientName>{title}</IngredientName>
                    {(isDressing || isOptional || alternatives.length > 0) && (
                      <AdditionalInfo ingredient={ingredient} />
                    )}
                  </Box>
                  <IngredientQuantity>{`${measure} ${measureType}`}</IngredientQuantity>
                  <Box width="30px" height="30px" color="accent">
                    {isInMyBar && <BiCheck size={30} />}
                  </Box>
                </IngredientItem>
              );
            })}
          </Box>
        </>
      )}
    </Box>
  );
};

export default CocktailDescription;
