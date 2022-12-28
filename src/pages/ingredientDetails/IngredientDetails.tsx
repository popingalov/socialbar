import { useParams } from 'react-router-dom';
import { useFetchIngredientsQuery } from 'redux/api/ingredientApi';
import IngredientInfo from 'components/ingredientsInfo/IngredientInfo';
import { motion } from 'framer-motion';
import { pageAnimation } from 'constants/animations';

const IngredientDetails: React.FC = () => {
  const { ingredientId } = useParams();

  const { ingredient } = useFetchIngredientsQuery(undefined, {
    selectFromResult: ({ data }) => ({
      ingredient: data?.find(ingredient => ingredient.id === ingredientId),
    }),
  });

  return (
    <motion.section {...pageAnimation} transition={{ duration: 0.3 }}>
      {ingredient && <IngredientInfo ingredient={ingredient} />}
    </motion.section>
  );
};

export default IngredientDetails;
