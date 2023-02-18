import { AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { changeSearchFilter } from 'redux/searchFilter/searchSlice';
import { MainInput } from './Name.styled';
import { setPopUpSearchIsOpen } from 'redux/modal/modalSlice';
import { useGetSearchedIngredients } from 'hooks/useGetSearchedIngredients';
import { ErrorMessage } from 'formik';

interface IProps {
  // name: string;
  // value: string;
}

//{ name, value }
const Name: React.FC<IProps> = () => {
  const [searchValue, setSearchValue] = useState('');
  const [ingredientSelectIsOpen, setIngredientSelectIsOpen] = useState(true);
  const { ingredients } = useGetSearchedIngredients(searchValue);

  useEffect(() => {
    if (searchValue && ingredients?.length !== 0) {
      setIngredientSelectIsOpen(true);
      return;
    }
    setIngredientSelectIsOpen(false);
  }, [ingredients?.length, searchValue]);

  const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setSearchValue(value);
  };

  return (
    <>
      <MainInput
        value={searchValue}
        onChange={handleInput}
        placeholder="Name"
      />
      {/* <label htmlFor={name}>
        <MainInput type="text" name={name} placeholder="Name" />
        <ErrorMessagee name={name} />
      </label> */}

      <AnimatePresence>
        {ingredientSelectIsOpen && ingredients && (
          <ul>
            {ingredients.map(({ title }, index, array) => (
              <li key={index}>{title}</li>
            ))}
          </ul>
        )}
      </AnimatePresence>
    </>
  );
};

export default Name;