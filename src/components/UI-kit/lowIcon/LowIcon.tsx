import { IconContext } from 'react-icons';
import { HiShoppingCart } from 'react-icons/hi';
import { RiStarFill } from 'react-icons/ri';
import { theme } from 'constants/theme';

interface IProps {
  type: 'ingredients' | 'cocktails';
}

const LowIcon: React.FC<IProps> = ({ type }) => {
  return (
    <IconContext.Provider
      value={{
        style: {
          color: theme.colors.accentBackgroundColor,
          position: 'absolute',
          bottom: '0',
          right: '-12px',
          width: '10px',
          height: '10px',
        },
      }}
    >
      <div>{type === 'ingredients' ? <HiShoppingCart /> : <RiStarFill />}</div>
    </IconContext.Provider>
  );
};

export default LowIcon;