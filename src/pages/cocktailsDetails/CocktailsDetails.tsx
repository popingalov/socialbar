import CocktailDescription from 'components/cocktailsInfo';
import { pageAnimation } from 'constants/animations';
import { motion } from 'framer-motion';
import { useParams } from 'react-router';
import { useGetCocktailByIdQuery } from 'redux/api/cocktailApi';
import Loader from 'components/loader';
import IngredientList from 'components/cocktailsInfo/ingredientList';

const CocktailsDetails = () => {
  const { cocktailId } = useParams();

  const { data: cocktail, isFetching } = useGetCocktailByIdQuery(
    cocktailId as string,
    {
      skip: cocktailId === undefined,
    },
  );

  if (isFetching) {
    return <Loader isLoading={isFetching} />;
  }

  return (
    <motion.section {...pageAnimation} transition={{ duration: 0.3 }}>
      {cocktail && cocktailId && (
        <>
          <CocktailDescription cocktail={cocktail} cocktailId={cocktailId} />
          <IngredientList ingredients={cocktail.ingredients} />
        </>
      )}
    </motion.section>
  );
};

export default CocktailsDetails;
