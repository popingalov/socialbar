import { pageAnimation } from 'constants/animations';
import { motion } from 'framer-motion';
import FormCreateIngredient from 'components/createIngredient/FormCreateIngredient';

const NewIngredient = () => {
  return (
    <motion.section {...pageAnimation} transition={{ duration: 0.3 }}>
      {/* <div>CreateIngredient</div> */}
      <FormCreateIngredient></FormCreateIngredient>
    </motion.section>
  );
};

export default NewIngredient;
