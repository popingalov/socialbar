import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import { BiArrowBack, BiDotsVerticalRounded } from 'react-icons/bi';

import SearchBar from 'Components/SearchBar';

import { Wrapper, ButtonIcon } from './NavigationBar.styled';

const Navigation = () => {
  const navigate = useNavigate();

  const [isSearch, setSearch] = useState(false);

  const handleBackButton = () => {
    if (isSearch) setSearch(false);
    else navigate(-1);
  };

  const handleSearchButton = () => {
    setSearch(true);
  };

  return (
    <Wrapper>
      <ButtonIcon onClick={handleBackButton}>
        <BiArrowBack />
        {/* <AiOutlineMenu /> */}
      </ButtonIcon>

      {isSearch && <SearchBar />}

      <div>
        <ButtonIcon onClick={handleSearchButton}>
          <AiOutlineSearch />
        </ButtonIcon>

        {/* <BiDotsVerticalRounded /> */}
      </div>
    </Wrapper>
  );
};

export default Navigation;
