import IngredientsList from 'components/ingredientsList';
import { useTranslation } from 'react-i18next';
import FollowUpMessage from 'components/UI-kit/followUpMessage';
import IngredientBottomMessage from 'components/ingredientsList/ingredientBottomMessage';
import Loader from 'components/loader';
import { useGetVisibleIngredients } from 'hooks/useGetVisibleIngredients';
import { useGetFilteredIngredients } from 'hooks/useGetFilteredIngredients';
import { useGetIngredientsTabStatus } from 'hooks/useGetIngredientsTabStatus';
import Section from 'components/section';

const Ingredients = () => {
  const { t } = useTranslation();
  const { isMyBar, isShoppingList } = useGetIngredientsTabStatus();
  const { visibleIngredients, isFetching } = useGetVisibleIngredients();
  const { filteredIngredients, filteredItems } =
    useGetFilteredIngredients(visibleIngredients);

  return (
    <Section>
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
          ( +{filteredItems} {t('filterIngredients')} )
        </FollowUpMessage>
      )}

      {!isFetching && !isShoppingList && (
        <FollowUpMessage>
          <IngredientBottomMessage />
        </FollowUpMessage>
      )}
    </Section>
  );
};

export default Ingredients;
