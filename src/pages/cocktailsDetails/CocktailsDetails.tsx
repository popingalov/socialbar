import CocktailDescription from 'components/cocktailsInfo';
import { useParams } from 'react-router-dom';
import { pageAnimation } from 'constants/animations';
import { motion } from 'framer-motion';
import { useFetchCocktailsQuery } from 'redux/api/cocktailApi';

const CocktailsDetails = () => {
  const { cocktailId } = useParams();
  const { cocktail } = useFetchCocktailsQuery(undefined, {
    selectFromResult: ({ data }) => ({
      cocktail: data?.find(cocktail => cocktail.id === cocktailId),
    }),
  });
  return (
    <motion.section {...pageAnimation} transition={{ duration: 0.3 }}>
      {cocktail && <CocktailDescription cocktail={cocktail} />}
    </motion.section>
  );
};

export default CocktailsDetails;
