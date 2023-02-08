import BottomMessageLink from 'components/UI-kit/bottomMessageLink';
import { useTranslation } from 'react-i18next';

const IngredientBottomMessage = () => {
  const { t } = useTranslation();

  return (
    <>
      {t('ingredientBottomMessage.cantFind')}{' '}
      <BottomMessageLink to="new">
        {t('ingredientBottomMessage.canCreate')}
      </BottomMessageLink>
    </>
  );
};

export default IngredientBottomMessage;
