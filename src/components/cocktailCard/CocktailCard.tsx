import LowIcon from 'components/UI-kit/lowIcon';
import Box from 'components/box';
import { BiCheck } from 'react-icons/bi';

interface IProps {
  name: string;
  description: string;
  isFavorite: boolean;
  allIngredientsAreAvailable?: boolean;
  imageUrl: string;
}

const CocktailCard: React.FC<IProps> = ({
  isFavorite,
  name,
  description,
  allIngredientsAreAvailable = false,
  imageUrl,
}) => {
  return (
    <Box position="relative" display="flex" alignItems="center">
      <img src={imageUrl} alt="cocktail" width="50px" height="50px" />
      <Box marginRight="auto">
        <p>{name}</p>
        <p>{description}</p>
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
