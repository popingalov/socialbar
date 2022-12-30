import { pageAnimation } from 'constants/animations';
import { motion } from 'framer-motion';

const NewCocktail = () => {
  return (
    <motion.section {...pageAnimation} transition={{ duration: 0.3 }}>
      {/* <div>CreateCocktail</div> */}
    </motion.section>
  );
};

export default NewCocktail;
