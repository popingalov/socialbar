import CocktailDescription from 'components/cocktailsInfo';
import { pageAnimation } from 'constants/animations';
import { motion } from 'framer-motion';

const CocktailsDetails = () => {
  return (
    <motion.section {...pageAnimation} transition={{ duration: 0.3 }}>

      {<CocktailDescription />}

{ /* {cocktail && <CocktailDescription />}*/}

    </motion.section>
  );
};

export default CocktailsDetails;
