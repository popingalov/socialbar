import { BarListStyled } from './BarList.styled';

interface IProps {
  children?: React.ReactNode;
}

const BarList: React.FC<IProps> = ({ children }) => {
  return <BarListStyled>{children}</BarListStyled>;
};

export default BarList;
