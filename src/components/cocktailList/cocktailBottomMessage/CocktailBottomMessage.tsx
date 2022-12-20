import { Link } from 'react-router-dom';
import { cocktailFilterStatus } from 'redux/filter/filterConstants';
import { setCocktailStatusFilter } from 'redux/filter/filterSlice';
import { useAppDispatch } from 'redux/hooks';
import BottomMessageButton from 'components/UI-kit/buttons/bottomMessageButton';

interface IProps {
  isMyCocktails: boolean;
  isAllCocktails: boolean;
}

const CocktailBottomMessage: React.FC<IProps> = ({
  isMyCocktails,
  isAllCocktails,
}) => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(setCocktailStatusFilter(cocktailFilterStatus.allCocktails));
  };

  return (
    <>
      Can't find a cocktail you like? {` `}
      {isMyCocktails && (
        <>
          Check {` `}
          <BottomMessageButton onClick={handleClick}>
            All Cocktails
          </BottomMessageButton>
          {` `}
          or create a <Link to="new">New one</Link>!
        </>
      )}
      {isAllCocktails && <Link to="new">You can create one!</Link>}
    </>
  );
};

export default CocktailBottomMessage;
