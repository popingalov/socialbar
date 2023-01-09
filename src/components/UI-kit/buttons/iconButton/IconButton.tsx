import { useDeleteFromShoppingMutation } from 'redux/api/shoppingApi';
import { IconButtonStyled } from './iconButton.styled';

interface IProps {
  type?: 'button' | 'submit' | 'reset';
  children?: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const IconButton: React.FC<IProps> = ({
  children,
  type = 'button',
  onClick,
  ...allyProps
}) => {
  return (
    <IconButtonStyled type={type} {...allyProps} onClick={onClick}>
      {children}
    </IconButtonStyled>
  );
};

export default IconButton;
