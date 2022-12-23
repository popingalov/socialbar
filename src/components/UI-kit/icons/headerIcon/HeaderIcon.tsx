import { IconContext } from 'react-icons';
import { headerIconTypes } from 'constants/headerIconTypes';
import { BiArrowBack, BiDotsVerticalRounded } from 'react-icons/bi';
import { AiOutlineBlock, AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';

interface IProps {
  type: string;
}

const HeaderIcon: React.FC<IProps> = ({ type }) => {
  return (
    <IconContext.Provider
      value={{
        style: {
          width: '24px',
          height: '24px',
        },
      }}
    >
      <div>{getIcon(type)}</div>
    </IconContext.Provider>
  );
};

function getIcon(type: string) {
  switch (type) {
    case headerIconTypes.burgerMenu:
      return <AiOutlineMenu />;
    case headerIconTypes.backArrow:
      return <BiArrowBack />;
    case headerIconTypes.searching:
      return <AiOutlineSearch />;
    case headerIconTypes.extraMenu:
      return <BiDotsVerticalRounded />;
    default:
      return <AiOutlineBlock />;
  }
}

export default HeaderIcon;
