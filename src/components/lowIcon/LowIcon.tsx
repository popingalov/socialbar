import { IconContext } from 'react-icons';
import { HiShoppingCart } from 'react-icons/hi';
import { RiStarFill } from 'react-icons/ri';
import { theme } from 'constants/theme';

interface IProps {
  type: 'ingredients' | 'cocktails';
}

export const LowIcon: React.FC<IProps> = ({ type }) => {
  return (
    <IconContext.Provider
      value={{
        style: {
          color: theme.colors.accentBackgroundColor,
          position: 'absolute',
          bottom: '0',
          right: '-12px',
          width: '12px',
          height: '12px',
        },
      }}
    >
      <div>{type === 'ingredients' ? <HiShoppingCart /> : <RiStarFill />}</div>
    </IconContext.Provider>
  );
};
