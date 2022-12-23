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

type props = {
  top: null | number;
  left: null | number;
  type: 'select' | 'extraMenu';
};

export const Modal = styled(motion.div)<props>`
  position: absolute;
  top: ${({ top }) => (top ? top : '0')}px;
  left: ${({ left, type }) => {
    if (type === 'select') return left ? left : '0';
    return 'none';
  }}px;
  right: ${({ type }) => {
    if (type === 'select') return 'none';
    return '4';
  }}px;
  padding: ${p => p.theme.space[2]}px;

  background-color: ${p => p.theme.colors.mainBackgroundColor};
  min-width: 150px;
  max-width: 220px;
  overflow-y: scroll;
  border-radius: 3px;
`;
