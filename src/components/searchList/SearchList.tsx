import { ICocktail } from 'types/cocktail';
import { IIngredient } from 'types/ingredient';

interface IProps {
  cocktails: ICocktail[];
  ingredients: IIngredient[];
}

const SearchList: React.FC<IProps> = ({ cocktails, ingredients }) => {
  console.log('items', cocktails, ingredients);
  return (
    <ul>
      {cocktails.map(item => (
        <li>{item.title}</li>
      ))}
      {ingredients.map(item => (
        <li>{item.title}</li>
      ))}
    </ul>
  );
};

export default SearchList;
