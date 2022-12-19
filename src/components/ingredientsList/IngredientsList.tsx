import { Link } from 'react-router-dom';
import BarList from 'components/barList';
import { selectIngredientFilter } from 'redux/filter/filterSelectors';
import { useSelector } from 'react-redux';
import IngredientCard from 'components/ingredientCard';
import { useTakeIngredientsQuery } from 'redux/apis/ingredients';
import { ingredientFilterStatus } from 'redux/filter/filterConstants';
import { useAppDispatch } from 'redux/hooks';
import { setSelectedIngredient } from 'redux/ingredient/ingredientSlice';
import FollowUpMessage from 'components/followUpMessage';
import IngredientBottomMessage from './ingredientBottomMessage';

const IngredientsList = () => {
  const { data: ingredients, isLoading } = useTakeIngredientsQuery(5);
  const ingredientFilter = useSelector(selectIngredientFilter);
  const visibleIngredients = getVisibleIngredients(
    ingredients || [],
    ingredientFilter,
  );
  const isNotShoppingList = !(
    ingredientFilterStatus.shoppingList === ingredientFilter
  );
  const dispatch = useAppDispatch();

  return (
    <>
      <BarList>
        {visibleIngredients &&
          visibleIngredients.map(ingredient => {
            const { name, _id, shop, available, image } = ingredient;

            return (
              <li key={_id}>
                <Link
                  to={`${_id}`}
                  onClick={() => {
                    dispatch(setSelectedIngredient(ingredient));
                  }}
                >
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
            );
          })}
      </BarList>
      {!isLoading && isNotShoppingList && (
        <FollowUpMessage>
          <IngredientBottomMessage />
        </FollowUpMessage>
      )}
    </>
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
