import { useMemo } from 'react';
import { Recipe, IngredientPart, RecipePart } from './CocktailDesc.styled';
import { IIngredientIn } from 'types/cocktail';
import { searchWord, dividedRecipe } from 'helpers';

interface IRecipeItem {
  item: string;
  ingredients: IIngredientIn[];
}

const RecipeItem = ({ item, ingredients }: IRecipeItem) => {
  const recipeForRender = useMemo(() => {
    const ing = ingredients.map(item => item.data.title.toLocaleLowerCase());
    const normalizedText = item.toLowerCase();
    const matchesInfo = Array.from(new Set(ing))
      .reduce((acc, element) => {
        const match = searchWord(normalizedText, element);
        return [...acc, ...match];
      }, [] as { word: string; position: number; length: number }[])
      .sort((a, b) => a.position - b.position);

    if (matchesInfo.length === 0) {
      return [item];
    }

    return dividedRecipe(item, matchesInfo);
  }, [item, ingredients]);

  return (
    <Recipe>
      {recipeForRender &&
        recipeForRender.map((el, index) => {
          if (index % 2 === 0) {
            return <RecipePart key={index}>{el}</RecipePart>;
          } else {
            const normalizedName = el.toLowerCase();
            const id = ingredients.find(
              element => element.data.title.toLowerCase() === normalizedName,
            )?.data;

            return (
              <IngredientPart key={index} to={`/ingredients/${id}`}>
                {el}
              </IngredientPart>
            );
          }
        })}
    </Recipe>
  );
};

export default RecipeItem;
