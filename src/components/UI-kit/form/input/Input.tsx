import { ErrorMessage, Field, FieldProps } from 'formik';
import { ChangeEventHandler } from 'react';
import { ErrorText, InputStyled } from './Input.styled';

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
  type = 'text',
}) => {
  return (
    <label htmlFor={name}>
      <InputStyled type={type} name={name} placeholder={placeholder} />
      <ErrorMessage name={name} component={ErrorText} />
    </label>
  );
};

export default Input;
