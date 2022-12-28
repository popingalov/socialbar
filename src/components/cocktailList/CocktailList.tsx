import BarList from 'components/barList';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCocktailFilter } from 'redux/filter/filterSelectors';
import CocktailCard from 'components/cocktailCard';
import { ListItem } from './CocktailList.styled';
import FollowUpMessage from 'components/followUpMessage';
import { getVisibleCocktails } from 'helpers/getVisibleCocktails';
import { cocktailFilterStatus } from 'redux/filter/filterConstants';
import CocktailBottomMessage from './cocktailBottomMessage';
import { ICocktail } from 'types/cocktail';

interface CocktailListProps {
  cocktails: ICocktail[];
}

const CocktailList = ({ cocktails }: CocktailListProps) => {
  const cocktailFilter = useSelector(selectCocktailFilter);
  const navigate = useNavigate();
  const visibleCocktails = getVisibleCocktails(cocktails || [], cocktailFilter);
  const isMyCocktails = cocktailFilterStatus.myCocktails === cocktailFilter;
  const isAllCocktails = cocktailFilterStatus.allCocktails === cocktailFilter;

  const onCLickCard = (id: string) => {
    navigate(`${id}`);
  };

  return (
    <>
      <BarList>
        {visibleCocktails &&
          visibleCocktails.map(
            ({ title, description, ingredients, id, picture }) => {
              const ingredientNames = ingredients.map(
                ingredient => ingredient.data.title,
              );
              // const isAvailable: boolean = ingredients.every(
              //   ({ available }) => available,
              // );
              const isAvailable: boolean = true;
              return (
                <ListItem
                  key={id}
                  allIngredientsAreAvailable={isAvailable}
                  onClick={() => onCLickCard(id)}
                >
                  <CocktailCard
                    // isFavorite={favorite}
                    isFavorite={true}
                    allIngredientsAreAvailable={isAvailable}
                    name={title}
                    description={description}
                    imageUrl={picture}
                    ingredients={ingredientNames}
                  />
                </ListItem>
              );
            },
          )}
      </BarList>
      {(isMyCocktails || isAllCocktails) && (
        <FollowUpMessage>
          <CocktailBottomMessage
            isMyCocktails={isMyCocktails}
            isAllCocktails={isAllCocktails}
          />
        </FollowUpMessage>
      )}
    </>
  );
};

export default CocktailList;
