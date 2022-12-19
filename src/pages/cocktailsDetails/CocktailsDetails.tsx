import CocktailDescription from 'components/cocktailsDesc';
import { motion } from 'framer-motion';

const page = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const CocktailsDetails = () => {
  return (
    <motion.section
      variants={page}
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
