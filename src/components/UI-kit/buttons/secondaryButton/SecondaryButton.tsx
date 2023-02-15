import { MouseEventHandler } from 'react';
import { ButtonStyled } from './SecondaryButton.styled';

interface IProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
}

const SecondaryButton: React.FC<IProps> = ({ children, onClick }) => {
  return (
    <ButtonStyled type="button" onClick={onClick}>
      {children}
    </ButtonStyled>
  );
};

export default SecondaryButton;
