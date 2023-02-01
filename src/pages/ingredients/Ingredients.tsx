import IngredientsList from 'components/ingredientsList';
import { pageAnimation } from 'constants/animations';
import { motion } from 'framer-motion';
import FollowUpMessage from 'components/UI-kit/followUpMessage';
import IngredientBottomMessage from 'components/ingredientsList/ingredientBottomMessage';
import Loader from 'components/loader';
import { useGetVisibleIngredients } from 'hooks/useGetVisibleIngredients';
import { useGetFilteredIngredients } from 'hooks/useGetFilteredIngredients';
import { useGetIngredientsTabStatus } from 'hooks/useGetIngredientsTabStatus';

const Ingredients = () => {
  const { isMyBar, isShoppingList } = useGetIngredientsTabStatus();
  const { visibleIngredients, isFetching } = useGetVisibleIngredients();
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
