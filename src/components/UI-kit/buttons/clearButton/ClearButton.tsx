import { Wrapper } from './ClearButton.styled';

interface IProps {
  children: JSX.Element;
  type?: 'button' | 'submit' | 'reset';
  onClick: any;
}

const ClearButton: React.FC<IProps> = ({
  children,
  onClick,
  type = 'button',
  ...allyProps
}) => (
  <Wrapper type={type} onClick={onClick} {...allyProps}>
    {children}
  </Wrapper>
);

export default ClearButton;
