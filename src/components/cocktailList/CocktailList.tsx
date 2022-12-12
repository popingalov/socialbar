import { BarList } from 'components/barList/BarList';
import { Link } from 'react-router-dom';
import { useTakeCocktailsQuery } from 'redux/apis/operation';
import { useSelector } from 'react-redux';
import { selectCocktailFilter } from 'redux/filter/filterSelectors';
import { CocktailCard } from 'components/cocktailCard/CocktailCard';

export const CocktailList = () => {
  const { data: cocktails } = useTakeCocktailsQuery(5);
  const cocktailFilter = useSelector(selectCocktailFilter);
  // console.log('cocktailFilter', cocktailFilter);

  return (
    <BarList>
      {cocktails &&
        cocktails.map(({ name, des }) => (
          <li key={name}>
            <Link to={`/`}>
              <CocktailCard
                filter={cocktailFilter}
                name={name}
                description={des}
              />
            </Link>
          </li>
        ))}
    </BarList>
  );
};
