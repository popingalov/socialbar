import { AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { selectPopUpStatus } from 'redux/modal/modalSelectors';
import { setPopUpIsOpen } from 'redux/modal/modalSlice';
import { selectSearchFilter } from 'redux/searchFilter/searchFilterSelector';
import { changeSearchFilter } from 'redux/searchFilter/searchFilterSlice';
import { MainInput } from './SearchBar.styled';
import PopUp from 'components/modal/popUp';

const SearchBar: React.FC = () => {
  const searchValue = useSelector(selectSearchFilter);
  const popUpIsOpen = useSelector(selectPopUpStatus);

  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>();
  const [selectCoordinates, setSelectCoordinates] = useState<ICoordinates>({
    top: null,
    left: null,
    right: null,
  });

  useEffect(() => {
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

  const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    dispatch(changeSearchFilter(value));

    // check if anything is in list search
    if (value) {
      dispatch(setPopUpIsOpen(true));
      return;
    }

    dispatch(setPopUpIsOpen(false));
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
        {popUpIsOpen && (
          <PopUp
            key="popUp"
            coordinates={selectCoordinates}
            type="search"
          ></PopUp>
        )}
      </AnimatePresence>
    </>
  );
};

export default SearchBar;
