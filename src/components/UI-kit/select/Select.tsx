import { useState } from 'react';
import {
  DropdownItem,
  DropdownStyle,
  SelectContainer,
  SelectLabelButton,
} from './Select.styled';

interface IProps {
  label?: any;
  values?: any;
  onChange?: any;
}

const Select: React.FC<IProps> = ({ label, values, onChange }) => {
  const [currentValue, setCurrentValue] = useState('');
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleValueChange = (value: any) => {
    setCurrentValue(value);
  };
  const handleChange = (value: any) => {
    handleValueChange(value);
    // call method, if it exists
    if (onChange) onChange(value);
    // close, after all tasks are finished
    handleClose();
  };

  return (
    <SelectContainer>
      <SelectLabelButton onClick={handleOpen}>
        {currentValue !== '' ? currentValue : label}
      </SelectLabelButton>
      <DropdownStyle isVisible={open}>
        {values.map((value: any, index: any) => (
          <DropdownItem
            onClick={() => handleChange(value)}
            isActive={value === currentValue}
            key={index}
          >
            {value}
          </DropdownItem>
        ))}
      </DropdownStyle>
    </SelectContainer>
  );
};

export default Select;
