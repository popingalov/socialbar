import { ChangeEventHandler } from 'react';
import { Label, TextareaStyled } from './Textarea.styled';

interface IProps {
  changeInput: ChangeEventHandler<HTMLTextAreaElement>;
  placeholder: string;
  name: string;
  value: string;
  label?: string;
}

const Textarea: React.FC<IProps> = ({
  changeInput,
  placeholder,
  value,
  name,
  label,
}) => {
  return (
    <Label>
      {label && <span>{label}</span>}
      <TextareaStyled
        onChange={changeInput}
        placeholder={placeholder}
        value={value}
        name={name}
        required
      />
    </Label>
  );
};

export default Textarea;
