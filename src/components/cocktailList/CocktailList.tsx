import { BarList } from 'components/barList/BarList';
import { Link } from 'react-router-dom';
import { useTakeCocktailsQuery } from 'redux/apis/cocteils';
import { useSelector } from 'react-redux';
import { selectCocktailFilter } from 'redux/filter/filterSelectors';
import { CocktailCard } from 'components/cocktailCard/CocktailCard';
import { cocktailFilterStatus } from 'redux/filter/filterConstants';
import { ListItem } from './CocktailList.styled';

export const CocktailList = () => {
  const { data: cocktails } = useTakeCocktailsQuery(5);
  const cocktailFilter = useSelector(selectCocktailFilter);
  const visibleCocktails = getVisibleCocktails(cocktails || [], cocktailFilter);

  return (
    <BarList>
      {visibleCocktails &&
        visibleCocktails.map(({ name, description, favorite, ingredients }) => {
          const isAvailable: boolean = ingredients.every(
            ({ available }) => available,
          );

          return (
            <ListItem key={name} allIngredientsAreAvailable={isAvailable}>
              <Link to={`/`}>
                <CocktailCard
                  isFavorite={favorite}
                  allIngredientsAreAvailable={isAvailable}
                  name={name}
                  description={description}
                />
              </Link>
            </ListItem>
          );
        })}
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

    // return cocktails
    //   .filter(
    //     ({ ingredients, isMine }) =>
    //       ingredients.every(({ available }) => available) || isMine,
    //   )
    //   .sort(
    //     (a, b) =>
    //       Number(b.ingredients.every(({ available }) => available)) -
    //       Number(a.ingredients.every(({ available }) => available)),
    //   );
    default:
      return cocktails;
  }
}
