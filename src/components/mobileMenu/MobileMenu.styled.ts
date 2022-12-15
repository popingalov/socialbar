import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  background-color: ${({ theme }) => theme.colors.backdropColor};
`;

export const Menu = styled.div`
  background-color: ${({ theme }) => theme.colors.mainBackgroundColor};
  width: 70%;
  height: 100%;
  overflow-y: scroll;
`;

export const MenuHeader = styled.div`
  min-height: 100px;
  background-color: ${({ theme }) => theme.colors.accentBackgroundColor};
`;
