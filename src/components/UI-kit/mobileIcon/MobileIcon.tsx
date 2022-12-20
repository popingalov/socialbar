import { IconContext } from 'react-icons';
import { FaPencilAlt } from 'react-icons/fa';
import { ImGlass2 } from 'react-icons/im';
import { AiFillSetting } from 'react-icons/ai';
import { GiWineBottle } from 'react-icons/gi';
import { paths } from 'constants/paths';
import { theme } from 'constants/theme';

interface IProps {
  type: string;
}

const MobileIcon: React.FC<IProps> = ({ type }) => {
  return (
    <IconContext.Provider
      value={{
        style: {
          color: 'inherit',
          marginRight: `${theme.space[3]}px`,
          width: '20px',
          height: '20px',
        },
      }}
    >
      <div>{getIcon(type)}</div>
    </IconContext.Provider>
  );
};

function getIcon(path: string) {
  switch (path) {
    case paths.ingredients:
      return <GiWineBottle />;
    case paths.cocktails:
      return <ImGlass2 />;
    case paths.settings:
      return <AiFillSetting />;
    default:
      return <FaPencilAlt />;
  }
}

export default MobileIcon;
