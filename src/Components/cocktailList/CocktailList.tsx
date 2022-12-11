import React from 'react';
import { BarList } from 'components/barList/BarList';
import { Link } from 'react-router-dom';
import { useTakeCocktailsQuery } from 'redux/apis/operation';
import { useSelector } from 'react-redux';
import { selectCocktailFilter } from 'redux/filter/filterSelectors';

export const CocktailList = () => {
  const { data: cocktails } = useTakeCocktailsQuery(5);
  const cocktailFilter = useSelector(selectCocktailFilter);
  // console.log('cocktailFilter', cocktailFilter);

  return (
    <BarList>
      {cocktails &&
        cocktails.map(({ name }) => (
          <li key={name}>
            <Link to={`/`}>
              <p>{cocktailFilter}</p>
              <p>{name}</p>
            </Link>
          </li>
        ))}
    </BarList>
  );
};
