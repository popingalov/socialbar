import { useSelector } from 'react-redux';
import { selectIngredient } from 'redux/ingredient/ingredientSelector';
import IngredientInfo from 'components/ingredientInfo/IngredientInfo';
import { motion } from 'framer-motion';
import { pageAnimation } from 'constants/pagesAnimation';

const IngredientDetails: React.FC = () => {
  const ingredient = useSelector(selectIngredient);

  return (
    <motion.section
      variants={pageAnimation}
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
