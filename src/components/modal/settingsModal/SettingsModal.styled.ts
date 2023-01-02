import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Modal = styled(motion.div)`
  position: absolute;
  padding: ${p => p.theme.space[2]}px;
  top: 50%;
  left: 50%;
  transform: translate(-50% -50%);
  padding: ${p => p.theme.space[3]}px;
  min-width: 260px;
  max-width: 90%;
  max-height: 95%;

  background-color: ${p => p.theme.colors.white};
  overflow-y: scroll;
  border-radius: 3px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
  background-clip: padding-box;
`;
