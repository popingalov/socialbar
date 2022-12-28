import { useNavigate } from 'react-router-dom';
import BarList from 'components/barList';
import { selectIngredientFilter } from 'redux/filter/filterSelectors';
import { useSelector } from 'react-redux';
import IngredientCard from 'components/ingredientCard';
import { ingredientFilterStatus } from 'redux/filter/filterConstants';
import FollowUpMessage from 'components/followUpMessage';
import IngredientBottomMessage from './ingredientBottomMessage';
import { getVisibleIngredients } from 'helpers/getVisibleIngredients';
import Loader from 'components/loader';
import { useFetchIngredientsQuery } from 'redux/api/ingredientApi';

const IngredientsList = () => {
  const { data: ingredients, isFetching } = useFetchIngredientsQuery();
  const ingredientFilter = useSelector(selectIngredientFilter);
  const navigate = useNavigate();

  // const visibleIngredients = getVisibleIngredients(
  //   ingredients || [],
  //   ingredientFilter,
  // );
  const isNotShoppingList = !(
    ingredientFilterStatus.shoppingList === ingredientFilter
  );

  const onClickCard = (id: string) => {
    navigate(`${id}`);
  };

  return (
    <>
      {isFetching && <Loader isLoading={isFetching} />}

      {ingredients && (
        <BarList>
          {ingredients.map(ingredient => {
            const { title, id, picture } = ingredient;

            return (
              <li key={id} onClick={() => onClickCard(id)}>
                <IngredientCard
                  id={id}
                  name={title}
                  filter={ingredientFilter}
                  // isInShoppingList={shop}
                  // isInMyBar={available}
                  imageUrl={picture}
                />
              </li>
            );
          })}
        </BarList>
      )}
      {ingredients && isNotShoppingList && (
        <FollowUpMessage>
          <IngredientBottomMessage />
        </FollowUpMessage>
      )}
    </>
  );
};

export default IngredientsList;
