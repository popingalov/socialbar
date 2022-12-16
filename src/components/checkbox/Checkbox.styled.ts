import { motion } from 'framer-motion';
import styled from 'styled-components';

export const CheckboxLabel = styled.label`
  display: inline-block;
  vertical-align: middle;
  font-size: 0;
  cursor: pointer;
  padding: ${({ theme }) => theme.space[1]}px;
`;

export const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

// Hide checkbox visually but remain accessible to screen readers.
export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const StyledCheckbox = styled(motion.div)<{ checked: boolean }>`
  display: inline-block;
  width: 18px;
  height: 18px;
  background-color: ${({ checked, theme }) =>
    checked ? theme.colors.accent : theme.colors.mainBackgroundColor};
  border: 2px solid ${({ theme }) => theme.colors.accent};
  border-radius: 3px;
  transition: all 150ms;
  transition: background-color 250ms ${({ theme }) => theme.transitionTiming};

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.secondaryAccent};
  }

  ${Icon} {
    visibility: ${({ checked }) => (checked ? 'visible' : 'hidden')};
  }
`;
