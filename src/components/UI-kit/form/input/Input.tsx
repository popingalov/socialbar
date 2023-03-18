import { ErrorMessage } from 'formik';
import { ChangeEventHandler } from 'react';
import { ErrorText, InputStyled, LabelStyled } from './Input.styled';

interface IProps {
  changeInput?: ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
  name: string;
  value?: string;
  isRecipeIngredient?: boolean;
  type?: string;
  errors?: any;
  touched?: any;
}

const Input: React.FC<IProps> = ({
  placeholder,
  name,
  isRecipeIngredient,
  value,
  type = 'text',
  changeInput,
}) => {
  return (
    <LabelStyled htmlFor={name}>
      <InputStyled
        type={type}
        value={value}
        name={name}
        onChange={changeInput}
        placeholder={placeholder}
      />
      <ErrorMessage name={name} component={ErrorText} />
    </LabelStyled>
  );
};

export default Input;
