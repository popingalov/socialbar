import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ButtonStyled = styled(motion.button)`
  margin: 0 auto;
  display: block;
  border: none;
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  padding-left: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[3]}px;
  white-space: nowrap;
  width: 130px;
  overflow-x: hidden;
  background-color: ${({ theme }) => theme.colors.secondaryFormButton};
  color: ${p => p.theme.colors.secondaryText};
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeight.medium};
  font-family: inherit;
  cursor: pointer;
  border-radius: 4px;

  transition: color 250ms ${p => p.theme.transitionTiming},
    background-color 250ms ${p => p.theme.transitionTiming},
    border-color 250ms ${p => p.theme.transitionTiming};

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.hoverLinkBackgroundColor};
    border-color: ${p => p.theme.colors.hoverLinkBackgroundColor};
  }
`;
