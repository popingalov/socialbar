import React from 'react';
import {
  CheckboxLabel,
  HiddenCheckbox,
  Icon,
  StyledCheckbox,
} from './Checkbox.styled';

interface IProps {
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox: React.FC<IProps> = ({ checked, ...props }) => (
  <CheckboxLabel onClick={e => e.stopPropagation()}>
    <HiddenCheckbox checked={checked} {...props} />
    <StyledCheckbox whileTap={{ scale: 0.9 }} checked={checked}>
      <Icon viewBox="1 1 20 20">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
  </CheckboxLabel>
);

export default Checkbox;
