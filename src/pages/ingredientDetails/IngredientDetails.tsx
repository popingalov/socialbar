import { useSelector } from 'react-redux';

import { selectIngredient } from 'redux/ingredient/ingredientSelector';
import IngredientInfo from 'components/ingredientInfo/IngredientInfo';

const IngredientDetails: React.FC = () => {
  const ingredient = useSelector(selectIngredient);

  return <IngredientInfo ingredient={ingredient} />;
};

export default IngredientDetails;
