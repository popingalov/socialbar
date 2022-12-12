import { Icon } from './CocktailCard.styled';
import { RiStarFill } from 'react-icons/ri';
import { theme } from 'constants/theme';

interface IProps {
  filter: string;
  name: string;
}

export const CocktailCard: React.FC<IProps> = ({ filter, name }) => {
  return (
    <>
      <p>{name}</p>
      <Icon viewBox="0 0 20 20" width="14px" height="14px">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
      <RiStarFill color={theme.colors.accent} />
    </>
  );
};
