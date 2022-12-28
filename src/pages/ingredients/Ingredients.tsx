import IngredientsList from 'components/ingredientsList';
import { useFetchIngredientsQuery } from 'redux/api/ingredientApi';
import { pageAnimation } from 'constants/animations';
import { motion } from 'framer-motion';
import Loader from 'components/loader';

const Ingredients = () => {
  const { data: ingredients, isFetching } = useFetchIngredientsQuery();

  if (isFetching) {
    <Loader isLoading={isFetching} />;
  }

  return (
    <motion.section {...pageAnimation} transition={{ duration: 0.3 }}>
      {ingredients && <IngredientsList ingredients={ingredients} />}
    </motion.section>
  );
};

export default Ingredients;
