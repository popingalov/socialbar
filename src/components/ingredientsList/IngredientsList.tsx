import BarList from 'components/barList';
import { selectIngredientFilter } from 'redux/filter/filterSelectors';
import { useSelector } from 'react-redux';
import IngredientCard from 'components/ingredientsList/ingredientCard';
import { ingredientFilterStatus } from 'redux/filter/filterConstants';
import FollowUpMessage from 'components/UI-kit/followUpMessage';
import IngredientBottomMessage from './ingredientBottomMessage';
import Loader from 'components/loader';
import { Link } from 'react-router-dom';
import { IIngredient } from 'types/ingredient';
import { useGetVisibleIngredients } from 'hooks/useGetVisibleIngredients';

const IngredientsList = () => {
  const ingredientFilter = useSelector(selectIngredientFilter);
  const { visibleIngredients, isFetching } =
    useGetVisibleIngredients(ingredientFilter);

  const isNotShoppingList = !(
    ingredientFilterStatus.shoppingList === ingredientFilter
  );
  // console.log('visibleIngredients', visibleIngredients);

  return (
    <>
      {isFetching && <Loader isLoading={isFetching} />}

      {visibleIngredients && (
        <BarList>
          {visibleIngredients.map((ingredient: IIngredient) => {
            const { title, id, picture, availability } = ingredient;

            return (
              <li key={id}>
                <Link to={`${id}`}>
                  <IngredientCard
                    id={id}
                    name={title}
                    filter={ingredientFilter}
                    // isInShoppingList={shop}
                    isInMyBar={availability}
                    imageUrl={picture}
                  />
                </Link>
              </li>
            );
          })}
        </BarList>
      )}
      {visibleIngredients && isNotShoppingList && (
        <FollowUpMessage>
          <IngredientBottomMessage />
        </FollowUpMessage>
      )}
    </>
  );
};

export default IngredientsList;

// const getVisibleIngredients = (filterStatus: string) => {
//   switch (filterStatus) {
//     case ingredientFilterStatus.myBarShelf:
//       // return myIngredients;
//       return [];
//     case ingredientFilterStatus.shoppingList:
//       // return shoppingList;
//       return [];
//     default:
//       return;
//   }
// };
// const visibleIngredients = getVisibleIngredients(ingredientFilter);

// const visibleIngredients = getVisibleIngredients(
//   ingredients || [],
//   ingredientFilter,
// );
