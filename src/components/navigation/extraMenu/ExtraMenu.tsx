import Box from 'components/box';
import ClearButton from 'components/UI-kit/buttons/clearButton';
import HeaderIcon from 'components/UI-kit/icons/headerIcon';
import { headerIconTypes } from 'constants/headerIconTypes';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import PopUp from 'components/popUp';
import { useSelector } from 'react-redux';
import { selectExtraMenuStatus } from 'redux/modal/modalSelectors';

interface IProps {
  handleSearch: () => void;
  handleAppMenu: () => void;
}

interface IMenuCoordinates {
  top: null | number;
  left: null | number;
}

const ExtraMenu: React.FC<IProps> = ({ handleSearch, handleAppMenu }) => {
  const popUpIsOpen = useSelector(selectExtraMenuStatus);

  const [menuCoordinates, setMenuCoordinates] = useState<IMenuCoordinates>({
    top: null,
    left: null,
  });
  const menuIconRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (menuIconRef.current) {
      console.log('first', menuIconRef.current);
      const { top, left } = menuIconRef.current.getBoundingClientRect();
      setMenuCoordinates({ top, left });
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
              <li>
                <a href="#"></a>menu
              </li>
              <li>
                <a href="#"></a>menu
              </li>
              <li>
                <a href="#"></a>menu
              </li>
            </ul>
          </PopUp>
        )}
      </AnimatePresence>
    </>
  );
};

export default ExtraMenu;
