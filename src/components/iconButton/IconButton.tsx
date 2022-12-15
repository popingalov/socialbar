import { IconButtonStyled } from './iconButton.styled';

interface IProps {
  type?: 'button' | 'submit' | 'reset';
  children?: React.ReactNode;
}
export const IconButton: React.FC<IProps> = ({
  children,
  type = 'submit',
  ...allyProps
}) => {
  return (
    <IconButtonStyled
      type={type}
      {...allyProps}
      onClick={e => e.stopPropagation()}
    >
      {children}
    </IconButtonStyled>
  );
};