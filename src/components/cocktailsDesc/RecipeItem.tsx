import { Recipe, IngredientLink, RecipePart } from './CocktailDesc.styled';
import { IIngredient } from './CocktailDesc';

interface IRecipeItem {
  item: string;
  ingredients: IIngredient[];
}

//компонент для отрисовки рецепта со ссылками на ингрединты

const RecipeItem = ({ item, ingredients }: IRecipeItem) => {
  const itemArray = item
    .toLowerCase()
    .replace(',', '')
    .replace('.', '')
    .split(' ');
  const matchesIngredients = Array.from(
    new Set(ingredients.map(ingredient => ingredient.name)),
  ).filter(ingredient => itemArray.includes(ingredient));
  if (matchesIngredients.length === 0) {
    return <Recipe>{item}</Recipe>;
  }
  const matchesInfo = matchesIngredients.map(ingr => {
    const info = item.match(new RegExp(ingr));
    if (info) {
      return { position: info.index, length: ingr.length };
    }
  }) as { position: number; length: number }[];
  let start = 0;
  const parts = [];
  for (let i = 0; i < matchesInfo.length; i++) {
    const { length, position } = matchesInfo[i];
    const textBefore = item.slice(start, position);
    parts.push(textBefore);
    const ingr = item.slice(position, position + length);
    parts.push(ingr);
    start = position + length;
    if (i === matchesInfo.length - 1) {
      const lastPart = item.slice(position + length, item.length);
      parts.push(lastPart);
    }
  }

  return (
    <Recipe>
      {parts.map((el, index) => {
        if (index % 2 === 0) {
          return <RecipePart key={el}>{el}</RecipePart>;
        }
        const id = ingredients.find(ingr => ingr.name === el)?.id;
        return (
          <IngredientLink key={id} to={`/ingredients/${id}`}>
            {el}
          </IngredientLink>
        );
      })}
    </Recipe>
  );
};

export default RecipeItem;
