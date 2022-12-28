import CocktailList from 'components/cocktailList';
import { pageAnimation } from 'constants/animations';
import { motion } from 'framer-motion';
import { useFetchCocktailsQuery } from 'redux/api/cocktailApi';
import Loader from 'components/loader';

const Cocktails = () => {
  const { data: cocktails, isFetching } = useFetchCocktailsQuery();

  if (isFetching) {
    <Loader isLoading={isFetching} />;
  }

  return (
    <motion.section {...pageAnimation} transition={{ duration: 0.3 }}>
      {cocktails && <CocktailList cocktails={cocktails} />}
    </motion.section>
  );
};
export default Cocktails;
