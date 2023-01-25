import React from 'react';
import { IIngredientIn } from 'types/cocktail';
import RecipeItem from './RecipeItem';
import { RecipeListStyled } from './RecipeList.styled';

interface IProps {
  stepsForRecipe: string[];
  ingredients: IIngredientIn[];
}

const RecipeList: React.FC<IProps> = ({ stepsForRecipe, ingredients }) => {
  return (
    <RecipeListStyled>
      {stepsForRecipe &&
        stepsForRecipe.map((item, index) => (
          <RecipeItem item={item} key={index} ingredients={ingredients} />
        ))}
    </RecipeListStyled>
  );
};

export default RecipeList;
