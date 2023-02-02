import Box from 'components/box';
import ClearButton from 'components/UI-kit/buttons/clearButton';
import HeaderIcon from 'components/UI-kit/icons/headerIcon';
import { headerIconTypes } from 'constants/headerIconTypes';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import PopUp from 'components/modal/popUp';
import { useSelector } from 'react-redux';
import {
  selectExtraMenuStatus,
  selectPopUpStatus,
} from 'redux/modal/modalSelectors';
import ExtraMenu from 'components/navigation/extraMenu';
import { useGetLocation } from 'hooks/useGetLocation';

interface IProps {
  handleDelete: () => void;
  handleSearch: () => void;
  handleAppMenu: () => void;
}

const ExtraIcons: React.FC<IProps> = ({
  handleSearch,
  handleDelete,
  handleAppMenu,
}) => {
  const extraMenuIsOpen = useSelector(selectExtraMenuStatus);
  const isSearchPopUpOpen = useSelector(selectPopUpStatus);
  const { isSearch } = useGetLocation();

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
        {!isSearch && (
          <ClearButton aria-label="searching" onClick={handleSearch}>
            <HeaderIcon type={headerIconTypes.searching} />
          </ClearButton>
        )}

        {isSearchPopUpOpen && isSearch && (
          <ClearButton aria-label="delete search filter" onClick={handleDelete}>
            <HeaderIcon type={headerIconTypes.cross} />
          </ClearButton>
        )}

        <ClearButton
          ref={menuIconRef}
          aria-label="extra menu"
          onClick={handleAppMenu}
        >
          <HeaderIcon type={headerIconTypes.extraMenu} />
        </ClearButton>
      </Box>

      <AnimatePresence>
        {extraMenuIsOpen && (
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
