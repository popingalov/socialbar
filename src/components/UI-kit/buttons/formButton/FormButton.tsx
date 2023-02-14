import { MouseEventHandler } from 'react';
import { FormButtonStyled } from './FormButton.styled';

interface IProps {
  type?: 'submit';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
}

const FormButton: React.FC<IProps> = ({
  type = 'submit',
  onClick,
  children,
}) => {
  return <FormButtonStyled>{children}</FormButtonStyled>;
};

export default FormButton;
