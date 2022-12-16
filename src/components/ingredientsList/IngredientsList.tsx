import { Link } from 'react-router-dom';
import { BarList } from 'components/barList/BarList';
import { selectIngredientFilter } from 'redux/filter/filterSelectors';
import { useSelector } from 'react-redux';
import { IngredientCard } from 'components/ingredientCard/IngredientCard';
import { useTakeIngredientsQuery } from 'redux/apis/ingredients';
import { ingredientFilterStatus } from 'redux/filter/filterConstants';

export const IngredientsList = () => {
  const { data: ingredients } = useTakeIngredientsQuery(5);
  const ingredientFilter = useSelector(selectIngredientFilter);
  const visibleIngredients = getVisibleIngredients(
    ingredients || [],
    ingredientFilter,
  );

  return (
    <BarList>
      {visibleIngredients &&
        visibleIngredients.map(({ name, _id, shop, available }) => (
          <li key={_id}>
            <Link to={`/`}>
              <IngredientCard
                id={_id}
                name={name}
                filter={ingredientFilter}
                isInShoppingList={shop}
                isInMyBar={available}
              />
            </Link>
          </li>
        ))}
    </BarList>
  );
};

function getVisibleIngredients(
  ingredients: IIngredient[],
  filterStatus: string,
) {
  switch (filterStatus) {
    case ingredientFilterStatus.myBarShelf:
      return ingredients.filter(({ available }) => available);
    case ingredientFilterStatus.shoppingList:
      return ingredients.filter(({ shop }) => shop);
    default:
      return ingredients;
  }
}
