import React from 'react';
import {
  CheckboxLabel,
  HiddenCheckbox,
  Icon,
  StyledCheckbox,
} from './Checkbox.styled';

interface IProps {
  checked: boolean;
  name?: string;
  label?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<IProps> = ({
  checked,
  label,
  name = 'checkbox',
  ...props
}) => {
  return (
    <CheckboxLabel hasLabel={!!label}>
      <HiddenCheckbox name={name} checked={checked} {...props} />
      <StyledCheckbox whileTap={{ scale: 0.9 }} checked={checked}>
        <Icon viewBox="2 2 20 20">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
      {label && <span>{label}</span>}
    </CheckboxLabel>
  );
};
export default Checkbox;
