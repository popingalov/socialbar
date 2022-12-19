import IngredientsList from 'components/ingredientsList';
import { motion } from 'framer-motion';

const Ingredients = () => <IngredientsList />;

export default Ingredients;

// <motion.div
//   initial={{ opacity: 0 }}
//   animate={{ opacity: 1 }}
//   exit={{ opacity: 0 }}
//   transition={{ duration: 0.4 }}
// >
//   <PagesNavigation type="ingredients" />
//   <IngredientsList />
// </motion.div>;
