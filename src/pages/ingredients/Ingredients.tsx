import IngredientsList from 'components/ingredientsList';
import { pageAnimation } from 'constants/animations';
import { motion } from 'framer-motion';
import { selectIngredientFilter } from 'redux/filter/filterSelectors';
import { useSelector } from 'react-redux';
import { ingredientFilterStatus } from 'redux/filter/filterConstants';
import FollowUpMessage from 'components/UI-kit/followUpMessage';
import IngredientBottomMessage from 'components/ingredientsList/ingredientBottomMessage';
import Loader from 'components/loader';
import { useGetVisibleIngredients } from 'hooks/useGetVisibleIngredients';
import { useGetFilteredIngredients } from 'hooks/useGetFilteredIngredients';
import { FilteredMessage } from 'components/ingredientsList/IngredientsList.styled';

const Ingredients = () => {
  const ingredientFilter = useSelector(selectIngredientFilter);

  const { visibleIngredients, isFetching } =
    useGetVisibleIngredients(ingredientFilter);
  const isMyBar = ingredientFilterStatus.myBarShelf === ingredientFilter;
  const isShoppingList =
    ingredientFilterStatus.shoppingList === ingredientFilter;

  const { filteredIngredients, filteredItems } =
    useGetFilteredIngredients(visibleIngredients);
  console.log('маю рендеритись ще раз');

  return (
    <motion.section {...pageAnimation} transition={{ duration: 0.3 }}>
      {isFetching && <Loader isLoading={isFetching} />}

      {filteredIngredients && (
        <IngredientsList
          ingredients={filteredIngredients}
          isMyBar={isMyBar}
          isShoppingList={isShoppingList}
          ingredientFilter={ingredientFilter}
        />
      )}

      {!isFetching && filteredItems !== 0 && (
        <FollowUpMessage>
          <FilteredMessage>
            ( +{filteredItems} ingredients filtered )
          </FilteredMessage>
        </FollowUpMessage>
      )}

      {!isFetching && !isShoppingList && (
        <FollowUpMessage>
          <IngredientBottomMessage />
        </FollowUpMessage>
      )}
    </motion.section>
  );
};

export default Ingredients;
