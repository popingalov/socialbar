import { Icon } from './CocktailCard.styled';
import { LowIcon } from 'components/lowIcon/LowIcon';
import { Box } from 'components/box/Box';

interface IProps {
  name: string;
  description: string;
  isFavorite: boolean;
  allIngredientsAreAvailable?: boolean;
  imageUrl: string;
}

export const CocktailCard: React.FC<IProps> = ({
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
        <Box padding="4px" fontSize="0">
          <Icon viewBox="2 2 20 20" width="16px" height="16px">
            <polyline points="20 6 9 17 4 12" />
          </Icon>
        </Box>
      )}
      {isFavorite && <LowIcon type="cocktails" />}
    </Box>
  );
};
