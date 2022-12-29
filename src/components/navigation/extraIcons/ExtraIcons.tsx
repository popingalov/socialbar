import Box from 'components/box';
import ClearButton from 'components/UI-kit/buttons/clearButton';
import HeaderIcon from 'components/UI-kit/icons/headerIcon';
import { headerIconTypes } from 'constants/headerIconTypes';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import PopUp from 'components/popUp';
import { useSelector } from 'react-redux';
import { selectExtraMenuStatus } from 'redux/modal/modalSelectors';
import ExtraMenu from 'components/navigation/extraMenu';

interface IProps {
  handleSearch: () => void;
  handleAppMenu: () => void;
}

const ExtraIcons: React.FC<IProps> = ({ handleSearch, handleAppMenu }) => {
  const popUpIsOpen = useSelector(selectExtraMenuStatus);

  const [menuCoordinates, setMenuCoordinates] = useState<ICoordinates>({
    top: null,
    left: null,
    right: null,
  });
  const menuIconRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (menuIconRef.current) {
      const { top, left, right } = menuIconRef.current.getBoundingClientRect();
      setMenuCoordinates({ top, left, right });
    }
  }, []);

  return (
    <>
      <Box display="flex">
        <ClearButton aria-label="searching" onClick={handleSearch}>
          <HeaderIcon type={headerIconTypes.searching} />
        </ClearButton>

        <ClearButton
          ref={menuIconRef}
          aria-label="extra menu"
          onClick={handleAppMenu}
        >
          <HeaderIcon type={headerIconTypes.extraMenu} />
        </ClearButton>
      </Box>
      <AnimatePresence>
        {popUpIsOpen && (
          <PopUp key="popUp" coordinates={menuCoordinates} type="extraMenu">
            <ul>
              <ExtraMenu />
            </ul>
          </PopUp>
        )}
      </AnimatePresence>
    </>
  );
};

export default ExtraIcons;
