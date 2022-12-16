import { Link } from 'react-router-dom';
import { useTakeIngredientsQuery } from 'redux/apis/ingredients';
import { BarList } from 'components/barList/BarList';
import { selectIngredientFilter } from 'redux/filter/filterSelectors';
import { useSelector } from 'react-redux';
import { IngredientCard } from 'components/ingredientCard/IngredientCard';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllIngredients } from 'redux/ingredients/ingredientSlise';

import type { RootState } from 'redux/store';

export const IngredientsList = () => {
  const dispatch = useDispatch() 
  const {ingredients} = useSelector((state :RootState) => state.ingredients)

  const { data } = useTakeIngredientsQuery(undefined);
  const ingredientFilter = useSelector(selectIngredientFilter);

  useEffect(() => {
    if (data) {
      dispatch(getAllIngredients(data))
    }
  },[dispatch, data])

  return (
    <BarList>
      {ingredients &&
        ingredients.map(({ name, _id }) => (
          <li key={_id} >
            <Link to={`/ingredients/${_id}`} >
              <IngredientCard filter={ingredientFilter} name={name} />
            </Link>
          </li>
        ))}
    </BarList>
  );
};
