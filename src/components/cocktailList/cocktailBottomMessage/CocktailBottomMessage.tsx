import { cocktailFilterStatus } from 'redux/filter/filterConstants';
import { setCocktailStatusFilter } from 'redux/filter/filterSlice';
import { useAppDispatch } from 'redux/hooks';
import BottomMessageButton from 'components/UI-kit/buttons/bottomMessageButton';
import BottomMessageLink from 'components/UI-kit/bottomMessageLink';

interface IProps {
  isMyCocktails?: boolean;
  isAllCocktails?: boolean;
  isIngredient?: boolean;
}

const CocktailBottomMessage: React.FC<IProps> = ({
  isMyCocktails = false,
  isAllCocktails = false,
  isIngredient = false,
}) => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(setCocktailStatusFilter(cocktailFilterStatus.allCocktails));
  };

  return (
    <>
      Can't find a cocktail you like? {` `}
      {isMyCocktails && !isIngredient && (
        <>
          Check {` `}
          <BottomMessageButton onClick={handleClick}>
            All Cocktails
          </BottomMessageButton>
          {` `}
          or create a <BottomMessageLink to="new">New one</BottomMessageLink>!
        </>
      )}
      {isAllCocktails && !isIngredient && (
        <BottomMessageLink to="new">You can create one!</BottomMessageLink>
      )}
      {isIngredient && (
        <>
          You can{' '}
          <BottomMessageLink to="/cocktails/new">
            create a new cocktail{' '}
          </BottomMessageLink>{' '}
          with this ingredient
        </>
      )}
    </>
  );
};

export default CocktailBottomMessage;
