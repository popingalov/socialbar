import { FormEventHandler } from 'react';
import { FormButtonStyled } from './FormButton.styled';

interface IProps {
  onSubmit?: FormEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
}

const FormButton: React.FC<IProps> = ({ onSubmit, children }) => {
  return (
    <FormButtonStyled type="submit" onSubmit={onSubmit}>
      {children}
    </FormButtonStyled>
  );
};

export default FormButton;
