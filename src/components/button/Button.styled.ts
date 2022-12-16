import styled from 'styled-components';
import { motion } from 'framer-motion';

type props = {
  selected?: boolean;
};

export const ButtonStyled = styled(motion.button)<props>`
  display: block;
  border: none;
  padding-top: ${({ theme }) => theme.space[2]}px;
  padding-bottom: ${({ theme }) => theme.space[2]}px;
  padding-left: ${({ theme }) => theme.space[3]}px;
  padding-right: ${({ theme }) => theme.space[3]}px;
  white-space: nowrap;
  background-color: inherit;
  color: ${({ theme }) => theme.colors.lightText};
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  border-bottom: 3px solid
    ${({ theme, selected }) =>
      selected ? theme.colors.accent : theme.colors.accentBackgroundColor};

  transition: color 250ms ${({ theme }) => theme.transitionTiming},
    background-color 250ms ${({ theme }) => theme.transitionTiming},
    border-color 250ms ${({ theme }) => theme.transitionTiming};

  &:not(:last-of-type) {
    margin-right: ${({ theme }) => theme.space[4]}px;
  }

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.accent};
    border-color: ${({ theme }) => theme.colors.accent};
  }

  /* &.active {
    border-bottom: 3px solid ${({ theme }) => theme.colors.accent};
  } */
`;
