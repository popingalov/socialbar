import IngredientsList from 'components/ingredientsList';
import { pageAnimation } from 'constants/animations';
import { AnimatePresence, motion } from 'framer-motion';
import { selectIngredientFilter } from 'redux/filter/filterSelectors';
import { useSelector } from 'react-redux';
import { ingredientFilterStatus } from 'redux/filter/filterConstants';
import FollowUpMessage from 'components/UI-kit/followUpMessage';
import IngredientBottomMessage from 'components/ingredientsList/ingredientBottomMessage';
import Loader from 'components/loader';
import { useGetVisibleIngredients } from 'hooks/useGetVisibleIngredients';
import { useGetFilteredIngredients } from 'hooks/useGetFilteredIngredients';
import { Suspense } from 'react';
import { Outlet } from 'react-router';

const Ingredients = () => {
  const ingredientFilter = useSelector(selectIngredientFilter);

  const { visibleIngredients, isFetching } =
    useGetVisibleIngredients(ingredientFilter);
  const isMyBar = ingredientFilterStatus.myBarShelf === ingredientFilter;
  const isShoppingList =
    ingredientFilterStatus.shoppingList === ingredientFilter;

  const { filteredIngredients, filteredItems } =
    useGetFilteredIngredients(visibleIngredients);

  return (
    <>
      <motion.section {...pageAnimation} transition={{ duration: 0.3 }}>
        {isFetching && <Loader isLoading={isFetching} />}

        {filteredIngredients && (
          <IngredientsList
            ingredients={filteredIngredients}
            isMyBar={isMyBar}
            isShoppingList={isShoppingList}
          />
        )}

        {!isFetching && filteredItems !== 0 && (
          <FollowUpMessage>
            ( +{filteredItems} ingredients filtered )
          </FollowUpMessage>
        )}

        {!isFetching && !isShoppingList && (
          <FollowUpMessage>
            <IngredientBottomMessage />
          </FollowUpMessage>
        )}
      </motion.section>
    </>
  );
};

export default Ingredients;
