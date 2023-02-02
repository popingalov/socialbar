import { listAnimation } from 'constants/animations';
import { BarListStyled } from './BarList.styled';

interface IProps {
  children?: React.ReactNode;
  type: string;
}

const BarList: React.FC<IProps> = ({ children, type }) => {
  return (
    <BarListStyled
      type={type}
      key="list"
      {...listAnimation}
      transition={{ duration: 0.2 }}
    >
      {children}
    </BarListStyled>
  );
};

export default BarList;
