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

export const Modal = styled(motion.div)`
  margin: 0 auto;
  padding: ${p => p.theme.space[3]}px;

  background-color: ${p => p.theme.colors.mainBackgroundColor};
  max-width: 220px;
  overflow-y: scroll;
  border-radius: 3px;
`;
