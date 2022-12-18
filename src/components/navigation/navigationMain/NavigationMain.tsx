import { useState } from 'react';

import SearchBar from 'components/searchBar';
import ClearButton from 'components/UI-kit/buttons/clearButton';
import { Wrapper, MenuHolder } from './NavigationMain.styled';

import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import { BiArrowBack, BiDotsVerticalRounded } from 'react-icons/bi';
import MobileMenu from 'components/mobileMenu';
import { useSelector } from 'react-redux';
import { selectMobileMenuStatus } from 'redux/modal/modalSelectors';
import { useDispatch } from 'react-redux';
import { setMobileIsOpen } from 'redux/modal/modalSlice';

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
      <header>
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
      </header>
      {menuIsOpen && <MobileMenu />}
    </>
  );
};

export default NavigationMain;
