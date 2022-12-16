import React, { useState } from 'react';
import { Box } from 'components/box/Box';
import { HiPencil, HiStar } from 'react-icons/hi';
import { BiCheck } from 'react-icons/bi';
import { cocktail, myBar, myFavorite } from './temp/db';
import RecipeItem from './RecipeItem';
import AdditionalInfo from './AdditionalInfo';
import {
  EditBtn,
  FavoriteBtn,
  Decs,
  Image,
  List,
  Title,
  IngredientItem,
  IngredientImage,
  IngredientName,
  IngredientQuantity,
} from './CocktailDesc.styled';

export interface IIngredient {
  id: number;
  name: string;
  image: string;
  quantity: number;
  measure: string;
  garnish: boolean;
  optional: boolean;
  substitute: string | null;
}
export interface ICocktail {
  id: string;
  name: string;
  image: string;
  glass: string;
  des: string;
  recipe: string[];
  type: string;
  ingredients: IIngredient[];
}

export const CocktailDescription = () => {
  const [favorite, setFavorite] = useState(
    () => !!myFavorite.find(item => item.cocktail === cocktail.name),
  );

  const onClickEdit = () => {
    console.log('edit cocktail');
  };

  const onClickFavorite = () => {
    setFavorite(prev => !prev);
  };

  return (
    <Box>
      <Box px={3} py={3}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={3}
        >
          <Title>{cocktail.name}</Title>
          <Box>
            <EditBtn onClick={onClickEdit}>
              <HiPencil size={28} />
            </EditBtn>
            <FavoriteBtn onClick={onClickFavorite} favorite={favorite}>
              <HiStar size={28} />
            </FavoriteBtn>
          </Box>
        </Box>
        <Image src={cocktail.image} />
        <Decs>{cocktail.des}</Decs>
        <List>
          {cocktail.recipe.map((item, index) => (
            <RecipeItem
              item={item}
              key={index}
              ingredients={cocktail.ingredients}
            />
          ))}
        </List>
      </Box>
      <Box as="ul" borderTop="1px solid" borderColor="borderBottom">
        {cocktail.ingredients.map(ingredient => {
          const isInMyBar = !!myBar.find(
            item => item.ingredient === ingredient.name,
          );
          return (
            <IngredientItem key={ingredient.id} isInMyBar={isInMyBar}>
              <IngredientImage src={ingredient.image} alt={ingredient.name} />
              <Box flexGrow={1} alignSelf="start" pt={2}>
                <IngredientName>{ingredient.name}</IngredientName>
                {(ingredient.garnish ||
                  ingredient.optional ||
                  ingredient.substitute) && (
                  <AdditionalInfo ingredient={ingredient} />
                )}
              </Box>

              <IngredientQuantity>{`${ingredient.quantity} ${ingredient.measure}`}</IngredientQuantity>
              <Box width="30px" height="30px" color="accent">
                {isInMyBar && <BiCheck size={30} />}
              </Box>
            </IngredientItem>
          );
        })}
      </Box>
    </Box>
  );
};
