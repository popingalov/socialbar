import React, { MouseEventHandler } from 'react';
import { MobileButtonStyled } from './MobileMenuButton.styled';

interface IProps {
  type?: 'button' | 'submit' | 'reset';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
}

const Button: React.FC<IProps> = ({ type = 'button', onClick, children }) => {
  return (
    <MobileButtonStyled
      whileTap={{ scale: 0.95 }}
      type={type}
      onClick={onClick}
    >
      {children}
    </MobileButtonStyled>
  );
};

export default Button;
