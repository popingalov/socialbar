import { Icon } from './CocktailCard.styled';
import { LowIcon } from 'components/lowIcon/LowIcon';
import { Box } from 'components/box/Box';
// import fallback from '../../assets/fallback.png';

interface IProps {
  filter: string;
  name: string;
  description: string;
}

export const CocktailCard: React.FC<IProps> = ({
  filter,
  name,
  description,
}) => {
  return (
    <Box position="relative" display="flex" alignItems="center">
      {/* <img src={fallback} alt="cocktail" width="32px" height="32px" /> */}
      <Box marginRight="auto">
        <p>{name}</p>
        <p>{description}</p>
      </Box>
      <Box padding="4px" fontSize="0">
        <Icon viewBox="2 2 20 20" width="16px" height="16px">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </Box>
      <LowIcon type="cocktails" />
    </Box>
  );
};
