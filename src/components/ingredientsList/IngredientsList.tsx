import { Link } from 'react-router-dom';
import { useTakeIngredientsQuery } from 'redux/apis/operation';
import { BarList } from 'components/barList/BarList';
import { selectIngredientFilter } from 'redux/filter/filterSelectors';
import { useSelector } from 'react-redux';
import { IngredientCard } from 'components/ingredientCard/IngredientCard';

export const IngredientsList = () => {
  const { data: ingredients } = useTakeIngredientsQuery(5);
  const ingredientFilter = useSelector(selectIngredientFilter);
  // console.log('ingredientFilter', ingredientFilter);

  return (
    <BarList>
      {ingredients &&
        ingredients.map(({ name }) => (
          <li key={name}>
            <Link to={`/`}>
              <IngredientCard filter={ingredientFilter} name={name} />
            </Link>
          </li>
        ))}
    </BarList>
  );
};
