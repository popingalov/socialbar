import { useParams } from 'react-router';
import IngredientInfo from 'components/ingredientsInfo/IngredientInfo';
import FollowUpMessage from 'components/UI-kit/followUpMessage';
import CocktailBottomMessage from 'components/cocktailList/cocktailBottomMessage';
import Loader from 'components/loader';
import { useGetIngredientByIdQuery } from 'redux/api/ingredientApi';
import { ICocktail } from 'types/cocktail';
import IngredientCocktails from 'components/ingredientsInfo/ingredientCocktails';
import Section from 'components/section';

const IngredientDetails: React.FC = () => {
  const { ingredientId } = useParams();
  const { data: ingredient } = useGetIngredientByIdQuery(
    ingredientId as string,
  );

  if (!ingredient) return <Loader isLoading={!ingredient} />;

  const { title, cocktails } = ingredient;
  return (
    <Section>
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
    </Section>
  );
};

export default IngredientDetails;
