import CocktailDescription from 'components/cocktailsDesc';
import { pageAnimation } from 'constants/pagesAnimation';
import { motion } from 'framer-motion';

const CocktailsDetails = () => {
  return (
    <motion.section
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="hidden"
      transition={{ duration: 0.5 }}
    >
      <CocktailDescription />
    </motion.section>
  );
};

export default CocktailsDetails;
