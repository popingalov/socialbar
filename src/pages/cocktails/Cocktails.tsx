import CocktailList from 'components/cocktailList';
import { motion } from 'framer-motion';

const page = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const Cocktails = () => (
  <motion.section
    variants={page}
    initial="hidden"
    animate="show"
    exit="hidden"
    transition={{ duration: 0.5 }}
  >
    <CocktailList />
  </motion.section>
);
export default Cocktails;
