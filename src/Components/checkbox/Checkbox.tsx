import React from 'react';
import {
  CheckboxContainer,
  HiddenCheckbox,
  Icon,
  StyledCheckbox,
} from './Checkbox.styled';

interface IProps {
  className?: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  labelWrap?: boolean;
}

export const Checkbox: React.FC<IProps> = ({
  className,
  checked,
  labelWrap = true,
  ...props
}) => {
  const content = (
    <CheckboxContainer onClick={e => e.stopPropagation()} className={className}>
      <HiddenCheckbox checked={checked} {...props} />
      <StyledCheckbox whileTap={{ scale: 0.9 }} checked={checked}>
        <Icon viewBox="1 0 20 20">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
  );

  return labelWrap ? <label>{content}</label> : <>{content}</>;
};

export default Checkbox;
