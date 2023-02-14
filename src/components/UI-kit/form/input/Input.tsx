import { ChangeEventHandler } from 'react';
import { InputStyled } from './Input.styled';

interface IProps {
  changeInput: ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
  name: string;
  value: string;
}

const Input: React.FC<IProps> = ({ changeInput, placeholder, name, value }) => {
  return (
    <InputStyled
      onChange={changeInput}
      placeholder={placeholder}
      type="text"
      name={name}
      value={value}
      required
    />
  );
};

export default Input;
