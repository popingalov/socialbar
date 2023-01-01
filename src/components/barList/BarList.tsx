import { listAnimation } from 'constants/animations';
import { BarListStyled } from './BarList.styled';

interface IProps {
  children?: React.ReactNode;
}

const BarList: React.FC<IProps> = ({ children }) => {
  return (
    <BarListStyled key="list" {...listAnimation} transition={{ duration: 0.2 }}>
      {children}
    </BarListStyled>
  );
};

export default BarList;
