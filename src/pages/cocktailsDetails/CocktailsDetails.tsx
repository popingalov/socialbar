import CocktailDescription from 'components/cocktailsDesc';
import { pageAnimation } from 'constants/animations';
import { motion } from 'framer-motion';

const CocktailsDetails = () => {
  return (
    <motion.section {...pageAnimation} transition={{ duration: 0.3 }}>
      <CocktailDescription />
    </motion.section>
  );
};

export default CocktailsDetails;
