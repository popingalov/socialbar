import { motion } from 'framer-motion';
import styled from 'styled-components';

export const PagerContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
`;

export const PagerAnimatedContainer = styled(motion.div)`
  flex-direction: row;
  direction: ltr;
  will-change: transform;
  min-height: 0;
  flex: 1;
  display: flex;
`;

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-self: stretch;
  justify-content: flex-start;
  flex-shrink: 0;
  height: 100%;
  overflow: hidden;
  outline: none;
`;
