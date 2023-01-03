import IngredientInfo from 'components/ingredientsInfo/IngredientInfo';
import { motion } from 'framer-motion';
import { pageAnimation } from 'constants/animations';

const IngredientDetails: React.FC = () => {
  return (
    <motion.section {...pageAnimation} transition={{ duration: 0.3 }}>
      <IngredientInfo />
    </motion.section>
  );
};

export default IngredientDetails;
