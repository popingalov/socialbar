import { ChangeEventHandler } from 'react';
import { InputStyled } from './Input.styled';

interface IProps {
  changeInput: ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
  name: string;
  value: string;
  isRecipeIngredient?: boolean;
  type?: string;
}

const Input: React.FC<IProps> = ({
  changeInput,
  placeholder,
  name,
  value,
  isRecipeIngredient,
  type = 'text',
}) => {
  return (
    <InputStyled
      onChange={changeInput}
      placeholder={placeholder}
      type={type}
      name={name}
      value={value}
      isRecipeIngredient={isRecipeIngredient || false}
      required
    />
  );
};

export default Input;
