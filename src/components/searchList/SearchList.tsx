import { ICocktail } from 'types/cocktail';
import { IIngredient } from 'types/ingredient';
// import BarList from 'components/barList';
// import CocktailCard from 'components/cocktailList/cocktailCard';
// import { ListItem } from 'components/cocktailList/CocktailList.styled';
import CocktailList from 'components/cocktailList';
import IngredientsList from 'components/ingredientsList';

interface IProps {
  cocktails: ICocktail[];
  ingredients: IIngredient[];
}

const SearchList: React.FC<IProps> = ({ cocktails, ingredients }) => {
  return (
    <>
      <CocktailList cocktails={cocktails} />
      <IngredientsList
        ingredients={ingredients}
        isMyBar={false}
        isShoppingList={false}
      />
    </>
  );
};

export default SearchList;
