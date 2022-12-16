import { Icon } from './CocktailCard.styled';
import { LowIcon } from 'components/lowIcon/LowIcon';
import { Box } from 'components/box/Box';
import fallback from '../../assets/fallback.png';

interface IProps {
  name: string;
  description: string;
  isFavorite: boolean;
  allIngredientsAreAvailable: boolean;
}

export const CocktailCard: React.FC<IProps> = ({
  isFavorite,
  name,
  description,
  allIngredientsAreAvailable,
}) => {
  return (
    <Box position="relative" display="flex" alignItems="center">
      <img src={fallback} alt="cocktail" width="32px" height="32px" />
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
