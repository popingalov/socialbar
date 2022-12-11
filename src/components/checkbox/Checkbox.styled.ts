import { motion } from 'framer-motion';
import styled from 'styled-components';

export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
`;

export const Icon = styled.svg`
  fill: none;
  stroke: white;
  transform: translateY(-3px);
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
  background-color: ${p =>
    p.checked ? p.theme.colors.accent : p.theme.colors.mainBackgroundColor};
  border: 2px solid ${p => p.theme.colors.accent};
  border-radius: 2px;
  transition: all 150ms;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 1px ${p => p.theme.colors.secondaryAccent};
  }

  ${Icon} {
    visibility: ${p => (p.checked ? 'visible' : 'hidden')};
  }
`;
