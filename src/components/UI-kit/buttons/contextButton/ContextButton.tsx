import React, { MouseEventHandler } from 'react';
import { ButtonStyled } from './Contextbutton.styled';

interface IProps {
  type?: 'button' | 'submit' | 'reset';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
}
const ContextButton: React.FC<IProps> = ({
  type = 'button',
  onClick,
  children,
}) => {
  return (
    <ButtonStyled type={type} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
};

export default ContextButton;
