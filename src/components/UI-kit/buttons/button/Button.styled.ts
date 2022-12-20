import styled from 'styled-components';
import { motion } from 'framer-motion';

type props = {
  selected?: boolean;
};

export const ButtonStyled = styled(motion.button)<props>`
  display: block;
  border: none;
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  padding-left: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[3]}px;
  white-space: nowrap;
  background-color: inherit;
  color: ${p => p.theme.colors.lightText};
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeight.semiBold};
  font-family: inherit;
  cursor: pointer;
  border-bottom: 3px solid
    ${p =>
      p.selected
        ? p.theme.colors.accent
        : p.theme.colors.accentBackgroundColor};
  border-radius: 4px;

  transition: color 250ms ${p => p.theme.transitionTiming},
    background-color 250ms ${p => p.theme.transitionTiming},
    border-color 250ms ${p => p.theme.transitionTiming};

  &:not(:last-of-type) {
    margin-right: ${p => p.theme.space[4]}px;
  }

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.accent};
    border-color: ${p => p.theme.colors.accent};
  }
`;
