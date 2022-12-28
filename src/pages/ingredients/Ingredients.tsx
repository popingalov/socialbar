import IngredientsList from 'components/ingredientsList';
import { pageAnimation } from 'constants/animations';
import { motion } from 'framer-motion';

const Ingredients = () => {
  return (
    <motion.section {...pageAnimation} transition={{ duration: 0.3 }}>
      <IngredientsList />
    </motion.section>
  );
};

export default Ingredients;
