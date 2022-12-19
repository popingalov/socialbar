import IngredientsList from 'components/ingredientsList';
import { pageAnimation } from 'constants/pagesAnimation';
import { motion } from 'framer-motion';

const Ingredients = () => (
  <motion.section
    variants={pageAnimation}
    initial="hidden"
    animate="show"
    exit="hidden"
    transition={{ duration: 0.5 }}
  >
    <IngredientsList />
  </motion.section>
);

export default Ingredients;
