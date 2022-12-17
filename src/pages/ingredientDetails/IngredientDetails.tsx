import { useParams } from 'react-router';
import IngredientInfo from 'components/ingredientInfo/IngredientInfo';

const IngredientDetails = () => {
  const { ingredientId } = useParams();

  return <IngredientInfo id={ingredientId} />;
};

export default IngredientDetails;
