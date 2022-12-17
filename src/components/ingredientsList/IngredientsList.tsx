import { Link } from 'react-router-dom';
import BarList from 'components/barList';
import { selectIngredientFilter } from 'redux/filter/filterSelectors';
import { useSelector } from 'react-redux';
import IngredientCard from 'components/ingredientCard';
import { useTakeIngredientsQuery } from 'redux/apis/ingredients';
import { ingredientFilterStatus } from 'redux/filter/filterConstants';

const IngredientsList = () => {
  const { data: ingredients } = useTakeIngredientsQuery(5);
  const ingredientFilter = useSelector(selectIngredientFilter);
  const visibleIngredients = getVisibleIngredients(
    ingredients || [],
    ingredientFilter,
  );

  return (
    <BarList>
      {visibleIngredients &&
        visibleIngredients.map(({ name, _id, shop, available, image }) => (
          <li key={_id}>
            <Link to={`${_id}`}>
              <IngredientCard
                id={_id}
                name={name}
                filter={ingredientFilter}
                isInShoppingList={shop}
                isInMyBar={available}
                imageUrl={image}
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

export default IngredientsList;
