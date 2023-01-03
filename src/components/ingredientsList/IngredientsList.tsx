import BarList from 'components/barList';
import { selectIngredientFilter } from 'redux/filter/filterSelectors';
import { useSelector } from 'react-redux';
import IngredientCard from 'components/ingredientsList/ingredientCard';
import { ingredientFilterStatus } from 'redux/filter/filterConstants';
import FollowUpMessage from 'components/UI-kit/followUpMessage';
import IngredientBottomMessage from './ingredientBottomMessage';
// import { getVisibleIngredients } from 'helpers/getVisibleIngredients';
import Loader from 'components/loader';
// import { useFetchIngredientsQuery } from 'redux/api/ingredientApi';
import { Link } from 'react-router-dom';
import { IIngredient } from 'types/ingredient';
import { useGetVisibleIngredients } from 'hooks/useGetVisibleIngredients';

const IngredientsList = () => {
  // const { data: allIngredients, isFetching } = useFetchIngredientsQuery();
  // const { data: myBar, isFetching } = useFetchMyBar();
  // const { data: shoppingList, isFetching } = useFetchShoppingList();

  const ingredientFilter = useSelector(selectIngredientFilter);
  const { visibleIngredients, isFetching } =
    useGetVisibleIngredients(ingredientFilter);

  const isNotShoppingList = !(
    ingredientFilterStatus.shoppingList === ingredientFilter
  );

  return (
    <>
      {isFetching && <Loader isLoading={isFetching} />}

      {visibleIngredients && (
        <BarList>
          {visibleIngredients.map((ingredient: IIngredient) => {
            const { title, id, picture } = ingredient;

            return (
              <li key={id}>
                <Link to={`${id}`}>
                  <IngredientCard
                    id={id}
                    name={title}
                    filter={ingredientFilter}
                    // isInShoppingList={shop}
                    // isInMyBar={available}
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
