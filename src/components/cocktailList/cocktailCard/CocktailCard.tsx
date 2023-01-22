import LowIcon from 'components/UI-kit/icons/lowIcon';
import Box from 'components/box';
import { BiCheck } from 'react-icons/bi';
import { CocktailsName, Ingredients } from './CocktailCard.styled';

interface IProps {
  name: string;
  description: string;
  isFavoritePage: boolean;
  isFavorite?: boolean;
  allAvailable?: boolean;
  imageUrl: string;
  ingredients: string[];
  lacks: string[];
}

const CocktailCard: React.FC<IProps> = ({
  isFavorite,
  isFavoritePage,
  name,
  allAvailable = false,
  imageUrl,
  ingredients,
  lacks,
}) => {
  return (
    <Box position="relative" display="flex" alignItems="center">
      <img src={imageUrl} alt={name} width="50px" height="50px" />
      <Box marginRight="auto" flex={1}>
        <CocktailsName>{name}</CocktailsName>

        <Ingredients>
          {allAvailable
            ? ingredients.join(', ')
            : `Missing ${lacks.join(', ')}`}
        </Ingredients>
      </Box>
      {allAvailable && (
        <Box width="28px" height="28px" color="accent">
          <BiCheck size={28} />
        </Box>
      )}
      {(isFavorite || isFavoritePage) && <LowIcon type="cocktails" />}
    </Box>
  );
};

export default CocktailCard;
