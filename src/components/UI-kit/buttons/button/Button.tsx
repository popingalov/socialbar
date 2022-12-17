import React, { MouseEventHandler } from 'react';
import { ButtonStyled } from './Button.styled';

interface IProps {
  type?: 'button' | 'submit' | 'reset';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
  selected?: boolean;
}

const Button: React.FC<IProps> = ({
  type = 'button',
  onClick,
  children,
  selected = false,
}) => {
  return (
    <ButtonStyled
      whileTap={{ scale: 0.95 }}
      type={type}
      onClick={onClick}
      selected={selected}
    >
      {children}
    </ButtonStyled>
  );
};

export default Button;
