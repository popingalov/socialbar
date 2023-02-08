import { motion } from 'framer-motion';
import styled from 'styled-components';
import { modalType } from 'types/modalTypes';

type props = { type: modalType };

export const OverlayStyled = styled(motion.div)<props>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  background-color: ${({ theme, type }) =>
    type === 'mobileMenu' || type === 'settingsModal'
      ? theme.colors.backdropColor
      : 'transparent'};
`;
