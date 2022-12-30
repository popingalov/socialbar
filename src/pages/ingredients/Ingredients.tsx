import IngredientsList from 'components/ingredientsList';
import { pageAnimation } from 'constants/animations';
import { AnimatePresence, motion } from 'framer-motion';

const Ingredients = () => {
  return (
    <motion.section {...pageAnimation} transition={{ duration: 0.3 }}>
      <AnimatePresence>
        <IngredientsList key="list" />
      </AnimatePresence>
    </motion.section>
  );
};

export default Ingredients;
