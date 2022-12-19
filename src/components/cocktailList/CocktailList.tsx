import BarList from 'components/barList';
import { Link } from 'react-router-dom';
import { useTakeCocktailsQuery } from 'redux/apis/cocteils';
import { useSelector } from 'react-redux';
import { selectCocktailFilter } from 'redux/filter/filterSelectors';
import CocktailCard from 'components/cocktailCard';
import { cocktailFilterStatus } from 'redux/filter/filterConstants';
import { ListItem } from './CocktailList.styled';

const CocktailList = () => {
  const { data: cocktails } = useTakeCocktailsQuery(5);
  const cocktailFilter = useSelector(selectCocktailFilter);
  const visibleCocktails = getVisibleCocktails(cocktails || [], cocktailFilter);

  return (
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
  );
};

function getVisibleCocktails(cocktails: ICocktail[], filterStatus: string) {
  switch (filterStatus) {
    case cocktailFilterStatus.favoriteCocktails:
      return cocktails.filter(({ favorite }) => favorite);
    case cocktailFilterStatus.myCocktails:
      const isAvailable = cocktails.filter(({ ingredients }) =>
        ingredients.every(({ available }) => available),
      );
      const isMine = cocktails.filter(({ isMine }) => isMine);
      return Array.from(new Set([...isAvailable, ...isMine]));
    default:
      return cocktails;
  }
}

export default CocktailList;
