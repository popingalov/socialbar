import { ChangeEventHandler } from 'react';
import { InputStyled } from './Input.styled';

interface IProps {
  changeInput: ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
  name: string;
  value: string;
  isRecipeIngredient?: boolean;
}

const Input: React.FC<IProps> = ({
  changeInput,
  placeholder,
  name,
  value,
  isRecipeIngredient,
}) => {
  return (
    <InputStyled
      onChange={changeInput}
      placeholder={placeholder}
      type="text"
      name={name}
      value={value}
      isRecipeIngredient={isRecipeIngredient || false}
      required
    />
  );
};

export default Input;
