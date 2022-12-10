import { BarList } from 'Components/barList/BarList';
import { Link } from 'react-router-dom';
import { useTakeIngredientsQuery } from 'redux/apis/operation';

export const MyBarShelf = () => {
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

// interface IIngredient {
//   name: string;
//   des: string;
//   type: string;
// }
