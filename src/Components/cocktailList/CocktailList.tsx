import React from 'react';
import { BarList } from 'Components/barList/BarList';
import { Link } from 'react-router-dom';
import { useTakeCocktailsQuery } from 'redux/apis/operation';

export const CocktailList = () => {
  const { data: cocktails } = useTakeCocktailsQuery(5);

  return (
    <BarList>
      {cocktails &&
        cocktails.map(({ name }) => (
          <li key={name}>
            <Link to={`/`}>
              <p>{name}</p>
            </Link>
          </li>
        ))}
    </BarList>
  );
};
