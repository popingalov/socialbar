import { pageAnimation } from 'constants/animations';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import FollowUpMessage from 'components/UI-kit/followUpMessage';
import CocktailBottomMessage from 'components/cocktailList/cocktailBottomMessage';
import Loader from 'components/loader';
import { useGetVisibleCocktails } from 'hooks/useGetVisibleCocktails';
import { useGetFilteredCocktails } from 'hooks/useGetFilteredCocktails';
import { ICocktail } from 'types/cocktail';
import CocktailList from 'components/cocktailList';
import { useGetCocktailTabStatus } from 'hooks/useGetCocktailTabStatus';

const Cocktails = () => {
  const { t } = useTranslation();
  const { isMyCocktails, isAllCocktails, isFavoriteCocktails } =
    useGetCocktailTabStatus();
  const { visibleCocktails, isFetching } = useGetVisibleCocktails();
  const { filteredCocktails, filteredItems } =
    useGetFilteredCocktails(visibleCocktails);
  let haveAllIngredients: ICocktail[] = [];
  let needMoreIngredients: ICocktail[] = [];

  if (isMyCocktails) {
    haveAllIngredients = filteredCocktails.filter(({ lacks }) => !lacks.length);
    needMoreIngredients = filteredCocktails.filter(({ lacks }) => lacks.length);
  }

  return (
    <motion.section {...pageAnimation} transition={{ duration: 0.3 }}>
      {isFetching && <Loader isLoading={isFetching} />}
      {filteredCocktails.length !== 0 && (
        <>
          <CocktailList
            cocktails={!isMyCocktails ? filteredCocktails : haveAllIngredients}
            isFavoritePage={isFavoriteCocktails}
          />
        </>
      )}
      {!isFetching && filteredItems !== 0 && (
        <FollowUpMessage>
          ( +{filteredItems} {t('cocktailsFiltered')} )
        </FollowUpMessage>
      )}

      {isMyCocktails && needMoreIngredients.length !== 0 && (
        <>
          <FollowUpMessage>
            <p>{t('cocktailsNeedMore')}</p>
          </FollowUpMessage>
          <CocktailList cocktails={needMoreIngredients} />
        </>
      )}

      {!isFetching && (isMyCocktails || isAllCocktails) && (
        <FollowUpMessage>
          <CocktailBottomMessage
            isMyCocktails={isMyCocktails}
            isAllCocktails={isAllCocktails}
          />
        </FollowUpMessage>
      )}
    </motion.section>
  );
};

export default Cocktails;
