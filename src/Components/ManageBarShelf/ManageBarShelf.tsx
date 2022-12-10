import { BarList } from 'Components/barList/BarList';
import { Link } from 'react-router-dom';
import { useTakeIngredientsQuery } from 'redux/apis/operation';

export const ManageBarShelf = () => {
  const { data: ingredients } = useTakeIngredientsQuery(5);

  return (
    <BarList>
      {ingredients &&
        ingredients.map(({ name }) => (
          <li key={name}>
            <Link to={`/`}>
              <p>{name}</p>
              <button>check</button>
            </Link>
          </li>
        ))}
    </BarList>
  );
};
