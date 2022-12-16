import { Wrapper } from './ClearButton.styled';

interface IProps {
  children: JSX.Element;
  onClick: () => void;
}

const ClearButton = ({ children, onClick }: IProps) => (
  <Wrapper onClick={onClick}>{children}</Wrapper>
);

export default ClearButton;