import { Icon } from './CocktailCard.styled';
import { LowIcon } from 'components/lowIcon/LowIcon';
import { Box } from 'components/box/Box';

interface IProps {
  filter: string;
  name: string;
}

export const CocktailCard: React.FC<IProps> = ({ filter, name }) => {
  return (
    <Box position="relative">
      <p>{name}</p>
      <Icon viewBox="0 0 20 20" width="14px" height="14px">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
      <LowIcon type="cocktails" />
    </Box>
  );
};
