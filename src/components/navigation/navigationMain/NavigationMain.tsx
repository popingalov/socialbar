import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { AnimatePresence } from 'framer-motion';

import SearchBar from 'components/searchBar';
import ClearButton from 'components/UI-kit/buttons/clearButton';
import MobileMenu from 'components/mobileMenu';
import { Wrapper, MenuHolder } from './NavigationMain.styled';
import { selectMobileMenuStatus } from 'redux/modal/modalSelectors';
import { setMobileIsOpen } from 'redux/modal/modalSlice';

import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import { BiArrowBack, BiDotsVerticalRounded } from 'react-icons/bi';

const NavigationMain = () => {
  const [isSearch, setSearch] = useState(false);
  const dispatch = useDispatch();
  const menuIsOpen = useSelector(selectMobileMenuStatus);

  const handleSideMenu = () => {
    dispatch(setMobileIsOpen(true));
  };

  const handleBackButton = () => setSearch(false);

  const handleSearchButton = () => setSearch(true);

  const handleAppMenu = () => console.log('Go App menu');

  return (
    <>
      <Wrapper>
        {isSearch ? (
          <ClearButton onClick={handleBackButton}>
            <BiArrowBack />
          </ClearButton>
        ) : (
          <ClearButton onClick={handleSideMenu}>
            <AiOutlineMenu />
          </ClearButton>
        )}

        {isSearch && <SearchBar />}

        <MenuHolder>
          <ClearButton onClick={handleSearchButton}>
            <AiOutlineSearch />
          </ClearButton>

          <ClearButton onClick={handleAppMenu}>
            <BiDotsVerticalRounded />
          </ClearButton>
        </MenuHolder>
      </Wrapper>
      <AnimatePresence>
        {menuIsOpen && <MobileMenu key="mobileMenu" />}
      </AnimatePresence>
    </>
  );
};

export default NavigationMain;
