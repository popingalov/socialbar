import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { MainInput } from './Name.styled';
import { useGetSearchedIngredients } from 'hooks/useGetSearchedIngredients';
import OptionsList from 'components/UI-kit/form/optionsList';

interface IProps {
  onChoose: (el: any) => void;
}

const Name: React.FC<IProps> = ({ onChoose }) => {
  const [searchValue, setSearchValue] = useState('');
  const [value, setValue] = useState('');
  const { ingredients } = useGetSearchedIngredients(searchValue);

  const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setSearchValue(value);
    setValue(value);
  };

  const handleClickOnIngredient = ({
    title,
    id,
  }: {
    title: string;
    id: string;
  }) => {
    onChoose({ title, id });
    setValue(title);
    setSearchValue('');
  };

  // if (ingredients?.length === 1) {
  //   handleClickOnIngredient(ingredients[0]);
  // }

  return (
    <>
      <MainInput value={value} onChange={handleInput} placeholder="Name" />

      <AnimatePresence>
        {ingredients && ingredients.length > 0 && (
          <OptionsList
            name="ingredientSelect"
            options={ingredients}
            handleIngredientChange={handleClickOnIngredient}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Name;
