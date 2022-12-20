import { useSelector } from 'react-redux';
import { selectIngredient } from 'redux/ingredient/ingredientSelector';
import IngredientInfo from 'components/ingredientInfo/IngredientInfo';
import { motion } from 'framer-motion';
import { pageAnimation } from 'constants/animations';

const IngredientDetails: React.FC = () => {
  const ingredient = useSelector(selectIngredient);

  return (
    <motion.section {...pageAnimation} transition={{ duration: 0.3 }}>
      <IngredientInfo ingredient={ingredient} />{' '}
    </motion.section>
  );
};

export default IngredientDetails;
