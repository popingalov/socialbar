import { useParams } from 'react-router';
import IngredientInfo from 'components/ingredientsInfo/IngredientInfo';
import { motion } from 'framer-motion';
import { pageAnimation } from 'constants/animations';
import FollowUpMessage from 'components/UI-kit/followUpMessage';
import CocktailBottomMessage from 'components/cocktailList/cocktailBottomMessage';
import Loader from 'components/loader';
import { useGetIngredientByIdQuery } from 'redux/api/ingredientApi';
import { ICocktail } from 'types/cocktail';
import IngredientCocktails from 'components/ingredientsInfo/ingredientCocktails';

const IngredientDetails: React.FC = () => {
  const { ingredientId } = useParams();
  const { data: ingredient } = useGetIngredientByIdQuery(
    ingredientId as string,
  );

  if (!ingredient) return <Loader isLoading={!ingredient} />;

  const { title, cocktails } = ingredient;
  return (
    <motion.section {...pageAnimation} transition={{ duration: 0.3 }}>
      {ingredient && (
        <>
          <IngredientInfo ingredient={ingredient} />
          <IngredientCocktails
            title={title}
            cocktails={cocktails as ICocktail[]}
          />
          <FollowUpMessage>
            <CocktailBottomMessage isIngredient={true} />
          </FollowUpMessage>
        </>
      )}
    </motion.section>
  );
};

export default IngredientDetails;
