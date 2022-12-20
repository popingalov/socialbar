import { Wrapper } from './ClearButton.styled';

interface IProps {
  children: JSX.Element;
  type?: 'button' | 'submit' | 'reset';
  onClick: () => void;
}

const ClearButton = ({
  children,
  onClick,
  type = 'button',
  ...allyProps
}: IProps) => (
  <Wrapper type={type} onClick={onClick} {...allyProps}>
    {children}
  </Wrapper>
);

export default ClearButton;
