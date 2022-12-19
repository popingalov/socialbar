import IngredientsList from 'components/ingredientsList';
import { motion } from 'framer-motion';

const page = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const Ingredients = () => (
  <motion.section
    variants={page}
    initial="hidden"
    animate="show"
    exit="hidden"
    transition={{ duration: 0.5 }}
  >
    <IngredientsList />
  </motion.section>
);

export default Ingredients;
