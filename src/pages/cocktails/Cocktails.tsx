import { pageAnimation } from 'constants/animations';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { selectCocktailFilter } from 'redux/filter/filterSelectors';
import FollowUpMessage from 'components/UI-kit/followUpMessage';
import { cocktailFilterStatus } from 'redux/filter/filterConstants';
import CocktailBottomMessage from 'components/cocktailList/cocktailBottomMessage';
import Loader from 'components/loader';
import { useGetVisibleCocktails } from 'hooks/useGetVisibleCocktails';
import { useGetFilteredCocktails } from 'hooks/useGetFilteredCocktails';
import { ICocktail } from 'types/cocktail';
import { FilteredMessage } from 'components/cocktailList/CocktailList.styled';
import CocktailList from 'components/cocktailList';

const Cocktails = () => {
  const cocktailFilter = useSelector(selectCocktailFilter);

  const { visibleCocktails, isFetching } =
    useGetVisibleCocktails(cocktailFilter);
  const isMyCocktails = cocktailFilterStatus.myCocktails === cocktailFilter;
  const isAllCocktails = cocktailFilterStatus.allCocktails === cocktailFilter;
  const isFavoriteCocktails =
    cocktailFilterStatus.favoriteCocktails === cocktailFilter;

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
          {!isFetching && filteredItems !== 0 && (
            <FollowUpMessage>
              <FilteredMessage>
                ( +{filteredItems} cocktails filtered )
              </FilteredMessage>
            </FollowUpMessage>
          )}
        </>
      )}

      {isMyCocktails && needMoreIngredients.length !== 0 && (
        <>
          <FollowUpMessage>
            <p>For the cocktails listed below you need more ingredients</p>
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
