import { useSelector } from 'react-redux';

import { selectIngredient } from 'redux/ingredient/ingredientSelector';
import IngredientInfo from 'components/ingredientInfo/IngredientInfo';
import { motion } from 'framer-motion';

const page = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const IngredientDetails: React.FC = () => {
  const ingredient = useSelector(selectIngredient);

  return (
    <motion.section
      variants={page}
      initial="hidden"
      animate="show"
      exit="hidden"
      transition={{ duration: 0.5 }}
    >
      <IngredientInfo ingredient={ingredient} />{' '}
    </motion.section>
  );
};

export default IngredientDetails;
