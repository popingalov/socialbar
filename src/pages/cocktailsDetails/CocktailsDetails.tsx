import CocktailDescription from 'components/cocktailsInfo';
import { useParams } from 'react-router';
import { useGetCocktailByIdQuery } from 'redux/api/cocktailApi';
import Loader from 'components/loader';
import IngredientList from 'components/cocktailsInfo/ingredientList';
import Section from 'components/section';

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
    <Section>
      {cocktail && cocktailId && (
        <>
          <CocktailDescription cocktail={cocktail} cocktailId={cocktailId} />
          <IngredientList ingredients={cocktail.ingredients} />
        </>
      )}
    </Section>
  );
};

export default CocktailsDetails;
