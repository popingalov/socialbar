import { ErrorMessage, Field } from 'formik';
import { ChangeEventHandler } from 'react';
import { ErrorText, Label, TextareaStyled } from './Textarea.styled';
import { useField } from 'formik';

interface IProps {
  placeholder?: string;
  name: string;
  label?: string;
}

const Textarea: React.FC<IProps> = ({ placeholder, name, label }) => {
  const [field] = useField(name);

  return (
    <label htmlFor={name}>
      {label && <span>{label}</span>}
      <TextareaStyled {...field} placeholder={placeholder} />
      <ErrorMessage name={name} component={ErrorText} />
    </label>
  );
};

export default Textarea;
