import { ICocktail } from 'types/cocktail';
import { IIngredient } from 'types/ingredient';
import CocktailList from 'components/cocktailList';
import IngredientsList from 'components/ingredientsList';

interface IProps {
  cocktails: ICocktail[];
  ingredients: IIngredient[];
}

const SearchList: React.FC<IProps> = ({ cocktails, ingredients }) => {
  return (
    <>
      <CocktailList cocktails={cocktails} type="search" />
      <IngredientsList
        type="search"
        ingredients={ingredients}
        isMyBar={false}
        isShoppingList={false}
      />
    </>
  );
};

export default SearchList;
