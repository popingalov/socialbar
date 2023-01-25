import CocktailList from 'components/cocktailList';
import { ICocktail } from 'types/cocktail';
import { AdditionalInfoTitle } from './IngredientCocktails.styled';

interface IProps {
  cocktails: ICocktail[];
  title: string;
}
const IngredientCocktails: React.FC<IProps> = ({ cocktails, title }) => {
  return (
    <>
      <AdditionalInfoTitle>Cocktails with {title}</AdditionalInfoTitle>
      <CocktailList inIngredientCard={true} cocktails={cocktails} />
    </>
  );
};

export default IngredientCocktails;
