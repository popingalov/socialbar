import { BarList } from 'components/barList/BarList';
import { Link } from 'react-router-dom';
import { useTakeCocktailsQuery } from 'redux/apis/cocteils';
import { useSelector } from 'react-redux';
import { selectCocktailFilter } from 'redux/filter/filterSelectors';
import { CocktailCard } from 'components/cocktailCard/CocktailCard';
import { cocktailFilterStatus } from 'redux/filter/filterConstants';

export const CocktailList = () => {
  const { data: cocktails } = useTakeCocktailsQuery(5);
  const cocktailFilter = useSelector(selectCocktailFilter);
  const visibleCocktails = getVisibleCocktails(cocktails || [], cocktailFilter);

  return (
    <BarList>
      {visibleCocktails &&
        visibleCocktails.map(({ name, description, favorite, ingredients }) => (
          <li key={name}>
            <Link to={`/`}>
              <CocktailCard
                isFavorite={favorite}
                name={name}
                description={description}
                ingredients={ingredients}
              />
            </Link>
          </li>
        ))}
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
