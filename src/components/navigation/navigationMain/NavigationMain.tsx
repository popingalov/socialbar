import { useState } from 'react';
import { useDispatch } from 'react-redux';

import SearchBar from 'components/searchBar';
import ClearButton from 'components/UI-kit/buttons/clearButton';
import { MenuHolder } from './NavigationMain.styled';
import { setMobileIsOpen } from 'redux/modal/modalSlice';
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import { BiArrowBack, BiDotsVerticalRounded } from 'react-icons/bi';

const NavigationMain = () => {
  const [isSearch, setSearch] = useState(false);
  const dispatch = useDispatch();

  const handleSideMenu = () => {
    dispatch(setMobileIsOpen(true));
  };

  const handleBackButton = () => setSearch(false);

  const handleSearchButton = () => setSearch(true);

  const handleAppMenu = () => console.log('Go App menu');

  return (
    <>
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
    </>
  );
};

export default NavigationMain;
