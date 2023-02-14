import { motion } from 'framer-motion';
import styled from 'styled-components';

export const CheckboxLabel = styled.label<{ hasLabel: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[2]}px;
  font-size: ${({ theme, hasLabel }) => (hasLabel ? theme.fontSizes.xs : 0)};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  cursor: pointer;
  padding: ${p => p.theme.space[1]}px;
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
  width: 20px;
  height: 20px;
  background-color: ${p =>
    p.checked
      ? p.theme.colors.secondaryAccent
      : p.theme.colors.mainBackgroundColor};
  border: 2px solid ${p => p.theme.colors.secondaryAccent};
  border-radius: 3px;
  transition: all 150ms;
  transition: background-color 250ms ${p => p.theme.transitionTiming};

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 1px ${p => p.theme.colors.secondaryAccent};
  }

  ${Icon} {
    visibility: ${p => (p.checked ? 'visible' : 'hidden')};
  }
`;
