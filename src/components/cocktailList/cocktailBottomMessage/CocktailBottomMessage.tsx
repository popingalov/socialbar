import BottomMessageButton from 'components/UI-kit/buttons/bottomMessageButton';
import BottomMessageLink from 'components/UI-kit/bottomMessageLink';
import { cocktailFilterStatus } from 'redux/filter/filterConstants';
import { setCocktailStatusFilter } from 'redux/filter/filterSlice';
import { useAppDispatch } from 'redux/hooks';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();
  const handleClick = () => {
    dispatch(setCocktailStatusFilter(cocktailFilterStatus.allCocktails));
  };

  return (
    <>
      {t('cocktailBottomMessage.cantFind')} {` `}
      {isMyCocktails && !isIngredient && (
        <>
          {t('cocktailBottomMessage.check')} {` `}
          <BottomMessageButton onClick={handleClick}>
            {t('cocktailsNav.allCocktails')}
          </BottomMessageButton>
          {` `}
          {t('cocktailBottomMessage.create')}
          {` `}
          <BottomMessageLink to="new">
            {' '}
            {t('cocktailBottomMessage.newOne')}
          </BottomMessageLink>
          !
        </>
      )}
      {isAllCocktails && !isIngredient && (
        <BottomMessageLink to="new">
          {t('cocktailBottomMessage.canCreate')}
        </BottomMessageLink>
      )}
      {isIngredient && (
        <>
          {t('cocktailBottomMessage.youCan')}{' '}
          <BottomMessageLink to="/cocktails/new">
            {t('cocktailBottomMessage.createCocktail')}{' '}
          </BottomMessageLink>{' '}
          {t('cocktailBottomMessage.withIngredient')}
        </>
      )}
    </>
  );
};

export default CocktailBottomMessage;
