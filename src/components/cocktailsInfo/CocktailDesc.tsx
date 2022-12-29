import React, { useState, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetCocktailByIdQuery } from 'redux/api/cocktailApi';
import Box from 'components/box/Box';
import { HiPencil, HiStar } from 'react-icons/hi';
import { BiCheck } from 'react-icons/bi';
import RecipeItem from './RecipeItem';
import AdditionalInfo from './AdditionalInfo';
import Loader from 'components/loader/Loader';

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

  const navigate = useNavigate();
  const [favorite, setFavorite] = useState(false);

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

  const onClickFavorite = () => {
    setFavorite(prev => !prev);
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
              <Box display="flex" flexWrap="nowrap">
                <EditBtn onClick={onClickEdit}>
                  <HiPencil size={28} />
                </EditBtn>
                <FavoriteBtn onClick={onClickFavorite} favorite={favorite}>
                  <HiStar size={28} />
                </FavoriteBtn>
              </Box>
            </Box>
            <Image src={cocktail.picture} />
            <Decs>{cocktail.recipe}</Decs>

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
              // const normalizedName = ingredient.ing.name.toLowerCase();
              const isInMyBar = false;
              return (
                <IngredientItem
                  key={ingredient.data.title + ingredient.measure}
                  isInMyBar={isInMyBar}
                  onClick={() => onClickIngredient(ingredient.data.id)}
                >
                  <IngredientImage
                    src={ingredient.data.picture}
                    alt={ingredient.data.title}
                  />
                  <Box flexGrow={1} alignSelf="start" pt={2}>
                    <IngredientName>{ingredient.data.title}</IngredientName>
                    {(ingredient.isDressing ||
                      ingredient.isOptional ||
                      ingredient.alternatives.length > 0) && (
                      <AdditionalInfo ingredient={ingredient} />
                    )}
                  </Box>
                  <IngredientQuantity>{`${ingredient.measure} ${ingredient.measureType}`}</IngredientQuantity>
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
