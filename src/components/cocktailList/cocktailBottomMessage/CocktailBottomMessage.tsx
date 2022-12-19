import { cocktailFilterStatus } from 'redux/filter/filterConstants';
import { setCocktailStatusFilter } from 'redux/filter/filterSlice';
import { useAppDispatch } from 'redux/hooks';

interface IProps {
  isMyCocktails: boolean;
  isAllCocktails: boolean;
}

const CocktailBottomMessage: React.FC<IProps> = ({
  isMyCocktails,
  isAllCocktails,
}) => {
  const dispatch = useAppDispatch();

  return (
    <>
      Can't find a cocktail you like? Check
      {isMyCocktails && (
        <button
          onClick={() =>
            dispatch(setCocktailStatusFilter(cocktailFilterStatus.allCocktails))
          }
        >
          All Cocktails
        </button>
      )}
      {isAllCocktails && <button>Tell us about</button>}
      or create a <button>New cocktail</button>!
    </>
  );
};

export default CocktailBottomMessage;
