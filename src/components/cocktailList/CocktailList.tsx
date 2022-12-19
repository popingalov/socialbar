import BarList from 'components/barList';
import { Link } from 'react-router-dom';
import { useTakeCocktailsQuery } from 'redux/apis/cocteils';
import { useSelector } from 'react-redux';
import { selectCocktailFilter } from 'redux/filter/filterSelectors';
import CocktailCard from 'components/cocktailCard';
import { ListItem } from './CocktailList.styled';
import FollowUpMessage from 'components/followUpMessage';
import { getVisibleCocktails } from 'helpers/getVisibleCocktails';
import { cocktailFilterStatus } from 'redux/filter/filterConstants';
import CocktailBottomMessage from './cocktailBottomMessage';

const CocktailList = () => {
  const { data: cocktails, isLoading } = useTakeCocktailsQuery(5);
  const cocktailFilter = useSelector(selectCocktailFilter);
  const visibleCocktails = getVisibleCocktails(cocktails || [], cocktailFilter);
  const isMyCocktails = cocktailFilterStatus.myCocktails === cocktailFilter;
  const isAllCocktails = cocktailFilterStatus.allCocktails === cocktailFilter;

  return (
    <>
      <BarList>
        {visibleCocktails &&
          visibleCocktails.map(
            ({ name, description, favorite, ingredients, _id, image }) => {
              const ingredientNames = ingredients.map(
                ingredient => ingredient.ing.name,
              );
              const isAvailable: boolean = ingredients.every(
                ({ available }) => available,
              );
              return (
                <ListItem key={_id} allIngredientsAreAvailable={isAvailable}>
                  <Link to={`${_id}`}>
                    <CocktailCard
                      isFavorite={favorite}
                      allIngredientsAreAvailable={isAvailable}
                      name={name}
                      description={description}
                      imageUrl={image}
                      ingredients={ingredientNames}
                    />
                  </Link>
                </ListItem>
              );
            },
          )}
      </BarList>
      {!isLoading && (isMyCocktails || isAllCocktails) && (
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
