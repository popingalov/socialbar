import { IconButtonStyled } from './iconButton.styled';

interface IProps {
  type?: 'button' | 'submit' | 'reset';
  children?: React.ReactNode;
  removeItem: () => void;
}

const IconButton: React.FC<IProps> = ({
  children,
  type = 'button',
  removeItem,
  ...allyProps
}) => {
  return (
    <IconButtonStyled
      type={type}
      {...allyProps}
      onClick={e => {
        e.stopPropagation();
        removeItem();
      }}
    >
      {children}
    </IconButtonStyled>
  );
};

export default IconButton;
