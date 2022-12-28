import CocktailList from 'components/cocktailList';
import { pageAnimation } from 'constants/animations';
import { motion } from 'framer-motion';

const Cocktails = () => {
  return (
    <motion.section {...pageAnimation} transition={{ duration: 0.3 }}>
      <CocktailList />
    </motion.section>
  );
};
export default Cocktails;
