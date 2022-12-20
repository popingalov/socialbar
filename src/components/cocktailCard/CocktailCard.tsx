import LowIcon from 'components/UI-kit/lowIcon';
import Box from 'components/box';
import { BiCheck } from 'react-icons/bi';
import { CocktailsName, Ingredients } from './CocktailCard.styled';

interface IProps {
  name: string;
  description: string;
  isFavorite: boolean;
  allIngredientsAreAvailable?: boolean;
  imageUrl: string;
  ingredients: string[];
}

const CocktailCard: React.FC<IProps> = ({
  isFavorite,
  name,
  allIngredientsAreAvailable = false,
  imageUrl,
  ingredients,
}) => {
  return (
    <Box position="relative" display="flex" alignItems="center">
      <img src={imageUrl} alt={name} width="50px" height="50px" />
      <Box marginRight="auto">
        <CocktailsName>{name}</CocktailsName>
        <Ingredients>{ingredients.join(', ')}</Ingredients>
      </Box>
      {allIngredientsAreAvailable && (
        <Box width="28px" height="28px" color="accent">
          <BiCheck size={28} />
        </Box>
      )}
      {isFavorite && <LowIcon type="cocktails" />}
    </Box>
  );
};

export default CocktailCard;
