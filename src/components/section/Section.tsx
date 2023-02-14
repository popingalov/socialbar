import { pageAnimation } from 'constants/animations';
import { ReactNode } from 'react';
import { SectionStyled } from './Section.styled';

interface IProps {
  children: ReactNode;
}

const Section: React.FC<IProps> = ({ children }) => {
  return (
    <SectionStyled {...pageAnimation} transition={{ duration: 0.3 }}>
      {children}
    </SectionStyled>
  );
};

export default Section;
