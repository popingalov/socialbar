import styled from 'styled-components';
import { motion } from 'framer-motion';

export const MobileButtonStyled = styled(motion.button)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  width: 100%;
  border: none;
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  white-space: nowrap;
  background-color: inherit;
  color: ${p => p.theme.colors.lightText};
  font-size: ${p => p.theme.fontSizes.s};
  font-family: inherit;
  cursor: pointer;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  transition: color 250ms ${p => p.theme.transitionTiming},
    background-color 250ms ${p => p.theme.transitionTiming},
    border-color 250ms ${p => p.theme.transitionTiming};

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.accent};
    border-color: ${p => p.theme.colors.accent};
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;
