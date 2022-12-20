import React, { MouseEventHandler } from 'react';
import { ButtonStyled } from './BottomMessageButton.styled';

interface IProps {
  type?: 'button' | 'submit' | 'reset';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
}

const BottomMessageButton: React.FC<IProps> = ({
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

export default BottomMessageButton;
