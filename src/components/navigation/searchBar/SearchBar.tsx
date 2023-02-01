import { AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { selectPopUpStatus } from 'redux/modal/modalSelectors';
import { setPopUpIsOpen } from 'redux/modal/modalSlice';
import { selectSearchFilter } from 'redux/searchFilter/searchFilterSelector';
import { changeSearchFilter } from 'redux/searchFilter/searchSlice';
import { MainInput } from './SearchBar.styled';
import PopUp from 'components/modal/popUp';
import SearchList from 'components/searchList';
import { useGetSearchedItems } from 'hooks/useGetSearchedItems';

const SearchBar: React.FC = () => {
  const searchValue = useSelector(selectSearchFilter);
  const popUpIsOpen = useSelector(selectPopUpStatus);
  const { cocktails, ingredients } = useGetSearchedItems();

  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>();
  const [selectCoordinates, setSelectCoordinates] = useState<ICoordinates>({
    top: null,
    left: null,
    right: null,
  });

  // TODO: coordinates only top / and centered
  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();

    window.addEventListener('resize', getCoordinates);

    function getCoordinates() {
      if (inputRef.current) {
        const { top, left, right, height } =
          inputRef.current.getBoundingClientRect();
        setSelectCoordinates({ top: top + height, left, right });
      }
    }
    getCoordinates();

    return () => window.removeEventListener('resize', getCoordinates);
  }, []);

  useEffect(() => {
    if (searchValue && (cocktails?.length !== 0 || ingredients?.length !== 0)) {
      dispatch(setPopUpIsOpen(true));
      return;
    }
    dispatch(setPopUpIsOpen(false));
  }, [cocktails?.length, dispatch, ingredients?.length, searchValue]);

  const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    dispatch(changeSearchFilter(value));
  };

  return (
    <>
      <MainInput
        ref={inputRef}
        value={searchValue}
        onChange={handleInput}
        placeholder="Search for cocktails and ingredients"
      />

      <AnimatePresence>
        {popUpIsOpen && cocktails && ingredients && (
          <PopUp key="popUp" coordinates={selectCoordinates} type="search">
            <SearchList cocktails={cocktails} ingredients={ingredients} />
          </PopUp>
        )}
      </AnimatePresence>
    </>
  );
};

export default SearchBar;
