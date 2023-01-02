import BarList from 'components/barList';
import { useSelector } from 'react-redux';
import { selectCocktailFilter } from 'redux/filter/filterSelectors';
import CocktailCard from 'components/cocktailList/cocktailCard';
import { ListItem } from './CocktailList.styled';
import FollowUpMessage from 'components/UI-kit/followUpMessage';
// import { getVisibleCocktails } from 'helpers/getVisibleCocktails';
import { cocktailFilterStatus } from 'redux/filter/filterConstants';
import CocktailBottomMessage from './cocktailBottomMessage';
// import { useFetchCocktailsQuery } from 'redux/api/cocktailApi';
import Loader from 'components/loader';
import { Link } from 'react-router-dom';
import { useGetVisibleCocktails } from 'hooks/useGetVisibleCocktails';

const CocktailList = () => {
  // const { data: cocktails, isFetching } = useFetchCocktailsQuery();
  const cocktailFilter = useSelector(selectCocktailFilter);
  // const visibleCocktails = getVisibleCocktails(cocktails || [], cocktailFilter);
  const { visibleCocktails, isFetching } =
    useGetVisibleCocktails(cocktailFilter);
  const isMyCocktails = cocktailFilterStatus.myCocktails === cocktailFilter;
  const isAllCocktails = cocktailFilterStatus.allCocktails === cocktailFilter;

  return (
    <>
      {isFetching && <Loader isLoading={isFetching} />}

      {visibleCocktails && (
        <BarList>
          {visibleCocktails.map(
            ({ title, description, ingredients, id, picture }) => {
              const ingredientNames = ingredients.map(
                ingredient => ingredient?.data?.title || '',
              );
              // const isAvailable: boolean = ingredients.every(
              //   ({ available }) => available,
              // );
              const isAvailable: boolean = true;
              return (
                <ListItem key={id} allIngredientsAreAvailable={isAvailable}>
                  <Link to={`${id}`}>
                    <CocktailCard
                      // isFavorite={favorite}
                      isFavorite={true}
                      allIngredientsAreAvailable={isAvailable}
                      name={title}
                      description={description}
                      imageUrl={picture}
                      ingredients={ingredientNames}
                    />
                  </Link>
                </ListItem>
              );
            },
          )}
        </BarList>
      )}
      {(isMyCocktails || isAllCocktails) && visibleCocktails && (
        <FollowUpMessage>
          <CocktailBottomMessage
            isMyCocktails={isMyCocktails}
            isAllCocktails={isAllCocktails}
          />
        </FollowUpMessage>
      )}
    </>
  );
};

export default CocktailList;
