import { ReactNode } from 'react';
import { LinkStyled } from './BottomMessageLink.styled';

interface IProps {
  children: ReactNode;
  to: string;
}
const BottomMessageLink: React.FC<IProps> = ({ children, to }) => {
  return <LinkStyled to={to}>{children}</LinkStyled>;
};

export default BottomMessageLink;
