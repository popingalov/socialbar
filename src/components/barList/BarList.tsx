import { BarListStyled } from './BarList.styled';

interface IProps {
  children?: React.ReactNode;
}
export const BarList: React.FC<IProps> = ({ children }) => {
  return <BarListStyled>{children}</BarListStyled>;
};
