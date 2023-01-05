import { motion } from 'framer-motion';
import styled from 'styled-components';

interface IProps extends ICoordinates {
  type: 'select' | 'extraMenu' | 'context';
}

export const Modal = styled(motion.div)<IProps>`
  position: absolute;
  top: ${({ top }) => (top ? top : '0')}px;
  left: ${({ left, type }) => {
    if (type === 'select') return left ? left : '0';
    return 'none';
  }}px;
  left: ${({ left, type }) => {
    if (type === 'select' || type === 'context') return left ? left : '0';
    return 'none';
  }}px;
  right: ${({ right, type, theme }) => {
    if (type !== 'select') return theme.space[1];
    return right;
  }}px;

  padding: ${p => p.theme.space[2]}px;

  background-color: ${p => p.theme.colors.mainBackgroundColor};
  min-width: 150px;
  max-width: 220px;
  overflow-y: scroll;
  border-radius: 3px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
  background-clip: padding-box;
`;
