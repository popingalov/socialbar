import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { MainInput } from './Name.styled';
import { useGetSearchedIngredients } from 'hooks/useGetSearchedIngredients';
interface IProps {
  onChose: (el: any) => void;
}
const Name: React.FC<IProps> = ({ onChose }) => {
  const [searchValue, setSearchValue] = useState('');
  const [value, setValue] = useState('');
  const { ingredients } = useGetSearchedIngredients(searchValue);

  const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setSearchValue(value);
    setValue(value);
  };
  function handlClickOnIngredient({
    title,
    id,
  }: {
    title: string;
    id: string;
  }) {
    onChose({ title, id });
    setValue(title);
    setSearchValue('');
  }
  if (ingredients?.length === 1) {
    handlClickOnIngredient(ingredients[0]);
  }
  return (
    <>
      <MainInput value={value} onChange={handleInput} placeholder="Name" />

      <AnimatePresence>
        {ingredients && (
          <ul>
            {ingredients.map(({ title, id }, index, array) => (
              <li
                key={title}
                onClick={() => {
                  handlClickOnIngredient({ title, id });
                }}
              >
                {title}
              </li>
            ))}
          </ul>
        )}
      </AnimatePresence>
    </>
  );
};

export default Name;
