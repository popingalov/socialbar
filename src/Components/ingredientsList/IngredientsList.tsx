import { Link } from 'react-router-dom';
import { useTakeIngredientsQuery } from 'redux/apis/operation';
import { BarList } from 'Components/barList/BarList';

export const IngredientsList = () => {
  const { data: ingredients } = useTakeIngredientsQuery(5);

  return (
    <BarList>
      {ingredients &&
        ingredients.map(({ name }) => (
          <li key={name}>
            <Link to={`/`}>
              <p>{name}</p>
            </Link>
          </li>
        ))}
    </BarList>
  );
};
