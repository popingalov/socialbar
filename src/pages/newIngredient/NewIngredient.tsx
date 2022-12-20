import { pageAnimation } from 'constants/animations';
import { motion } from 'framer-motion';

const NewIngredient = () => {
  return (
    <motion.section {...pageAnimation} transition={{ duration: 0.3 }}>
      <div>CreateIngredient</div>
    </motion.section>
  );
};

export default NewIngredient;
