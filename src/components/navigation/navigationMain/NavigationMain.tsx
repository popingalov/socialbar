import { useState } from 'react';
import { useDispatch } from 'react-redux';

import SearchBar from 'components/searchBar';
import ClearButton from 'components/UI-kit/buttons/clearButton';
import { MenuHolder } from './NavigationMain.styled';
import { setMobileIsOpen } from 'redux/modal/modalSlice';
import HeaderIcon from 'components/UI-kit/icons/headerIcon';
import { headerIconTypes } from 'constants/headerIconTypes';
import { useLocation } from 'react-router';
import { paths } from 'constants/paths';
import { cocktailTypes, ingredientTypes } from 'constants/categories';
import Select from 'components/UI-kit/select';

const NavigationMain = () => {
  const [isSearch, setSearch] = useState(false);
  const dispatch = useDispatch();

  const location = useLocation();
  const isIngredients = location.pathname === paths.ingredients;
  const filter = isIngredients ? ingredientTypes : cocktailTypes;

  const handleSideMenu = () => {
    dispatch(setMobileIsOpen(true));
  };

  const handleBackButton = () => setSearch(false);

  const handleSearchButton = () => setSearch(true);

  const handleAppMenu = () => console.log('Go App menu');

  return (
    <>
      {isSearch ? (
        <ClearButton aria-label="back-button" onClick={handleBackButton}>
          <HeaderIcon type={headerIconTypes.backArrow} />
        </ClearButton>
      ) : (
        <ClearButton aria-label="mobile-menu" onClick={handleSideMenu}>
          <HeaderIcon type={headerIconTypes.burgerMenu} />
        </ClearButton>
      )}

      {isSearch ? (
        <SearchBar />
      ) : (
        <Select
          label="No Filter"
          values={filter}
          onChange={(v: any) => console.log(v)}
        />
      )}

      <MenuHolder>
        <ClearButton aria-label="searching" onClick={handleSearchButton}>
          <HeaderIcon type={headerIconTypes.searching} />
        </ClearButton>

        <ClearButton aria-label="extra menu" onClick={handleAppMenu}>
          <HeaderIcon type={headerIconTypes.extraMenu} />
        </ClearButton>
      </MenuHolder>
    </>
  );
};

export default NavigationMain;
