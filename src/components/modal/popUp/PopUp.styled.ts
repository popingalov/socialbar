import { motion } from 'framer-motion';
import styled from 'styled-components';

interface IProps extends ICoordinates {
  type: 'select' | 'extraMenu' | 'context' | 'search';
}

export const Modal = styled(motion.div)<IProps>`
  position: absolute;
  top: ${({ top }) => (top ? top : '0')}px;

  left: ${({ left, type, theme }) => {
    if (type === 'select' || type === 'context' || type === 'search') {
      return `${left}px`;
    }
    return 'none';
  }};

  right: ${({ right, type, theme }) => {
    if (type === 'select') {
      return `${right}px`;
    }
    if (type === 'search') {
      return `${theme.space[4]}px`;
    }
    return `${theme.space[1]}px`;
  }};

  z-index: 100;
  padding: ${p => p.theme.space[2]}px;

  background-color: ${p => p.theme.colors.mainBackgroundColor};
  min-width: 150px;
  max-width: ${({ type }) => (type === 'search' ? '350px' : '220px')};
  max-height: 100vh;
  overflow-y: scroll;
  border-radius: 3px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
  background-clip: padding-box;
`;
