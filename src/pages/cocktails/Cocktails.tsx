import CocktailList from 'components/cocktailList';
import { pageAnimation } from 'constants/pagesAnimation';
import { motion } from 'framer-motion';

const Cocktails = () => (
  <motion.section
    variants={pageAnimation}
    initial="hidden"
    animate="show"
    exit="hidden"
    transition={{ duration: 0.5 }}
  >
    <CocktailList />
  </motion.section>
);
export default Cocktails;
