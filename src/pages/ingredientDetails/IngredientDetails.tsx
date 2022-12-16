import { useParams } from 'react-router';
import { IngredientInfo } from 'components/ingredientInfo/IngredientInfo';

export const IngredientDetails = () => {
  const { ingredientId } = useParams();

  return (
    <div>
      <IngredientInfo id={ingredientId} />
    </div>
  );
};
