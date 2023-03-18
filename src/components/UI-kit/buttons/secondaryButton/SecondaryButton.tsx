import React, { MouseEventHandler } from 'react';
import { ButtonStyled } from './SecondaryButton.styled';

interface IProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
}

export type Ref = HTMLButtonElement;

const SecondaryButton = React.forwardRef<Ref, IProps>(
  ({ children, onClick }, ref) => {
    return (
      <ButtonStyled
        type="button"
        onClick={onClick}
        ref={ref}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </ButtonStyled>
    );
  },
);

export default SecondaryButton;
