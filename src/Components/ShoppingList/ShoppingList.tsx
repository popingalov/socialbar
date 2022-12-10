import { BarList } from 'Components/barList/BarList';
import { useTakeIngredientsQuery } from 'redux/apis/operation';
import { Link } from 'react-router-dom';

export const ShoppingList = () => {
  const { data: ingredients } = useTakeIngredientsQuery(5);

  return (
    <BarList>
      {ingredients &&
        ingredients.map(({ name }) => (
          <li key={name}>
            <Link to={`/`}>
              <p>{name}</p>
              <button>delete</button>
            </Link>
          </li>
        ))}
    </BarList>
  );
};

// { previousLocation }
// <Link to={`${id}`} state={{ from: `${previousLocation}` }}>
