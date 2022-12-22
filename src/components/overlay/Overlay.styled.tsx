import { motion } from 'framer-motion';
import styled from 'styled-components';

export const OverlayStyled = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  background-color: ${({ theme }) => theme.colors.backdropColor};
`;
