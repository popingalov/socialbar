import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Menu = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.mainBackgroundColor};
  width: 70%;
  height: 100%;

  @media only screen and (max-width: 480px) {
    overflow-y: scroll;
  }
`;

export const MenuHeader = styled.div`
  padding: ${({ theme }) => theme.space[2]}px;
  min-height: 100px;
  background-color: ${({ theme }) => theme.colors.accentBackgroundColor};
`;

export const UserIconWrapper = styled.div`
  padding: ${({ theme }) => theme.space[2]}px;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  border: ${({ theme }) => `1px solid ${theme.colors.accent}`};
  background-color: ${({ theme }) => theme.colors.lightText};
  margin-bottom: ${p => p.theme.space[4]}px;

  svg {
    width: 30px;
    height: 30px;
    fill: ${({ theme }) => theme.colors.accent};
  }
`;
