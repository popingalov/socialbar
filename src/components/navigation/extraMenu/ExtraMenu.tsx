import Box from 'components/box';
import ClearButton from 'components/UI-kit/buttons/clearButton';
import HeaderIcon from 'components/UI-kit/icons/headerIcon';
import { headerIconTypes } from 'constants/headerIconTypes';

interface IProps {
  handleSearch: () => void;
  handleAppMenu: () => void;
}

const ExtraMenu: React.FC<IProps> = ({ handleSearch, handleAppMenu }) => {
  return (
    <Box display="flex">
      <ClearButton aria-label="searching" onClick={handleSearch}>
        <HeaderIcon type={headerIconTypes.searching} />
      </ClearButton>

      <ClearButton aria-label="extra menu" onClick={handleAppMenu}>
        <HeaderIcon type={headerIconTypes.extraMenu} />
      </ClearButton>
    </Box>
  );
};

export default ExtraMenu;
