import React, { MouseEventHandler } from 'react';
import { ButtonStyled } from './Button.styled';

interface IProps {
  type?: 'button' | 'submit' | 'reset';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
  selected?: boolean;
  tabName?: string;
}

export type Ref = HTMLButtonElement;

const Button = React.forwardRef<Ref, IProps>(
  ({ type = 'button', onClick, children, selected = false, tabName }, ref) => {
    return (
      <ButtonStyled
        name={tabName}
        ref={ref}
        whileTap={{ scale: 0.95 }}
        type={type}
        onClick={onClick}
        selected={selected}
      >
        {children}
      </ButtonStyled>
    );
  },
);

export default Button;

/**
 * const Button: React.FC<IProps> = ({
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

 */
