import { ChangeEventHandler } from 'react';
import { TextareaStyled } from './Textarea.styled';

interface IProps {
  changeInput: ChangeEventHandler<HTMLTextAreaElement>;
  placeholder: string;
  name: string;
  value: string;
}

const Textarea: React.FC<IProps> = ({
  changeInput,
  placeholder,
  value,
  name,
}) => {
  return (
    <TextareaStyled
      onChange={changeInput}
      placeholder={placeholder}
      value={value}
      name={name}
      required
    >
      Textarea
    </TextareaStyled>
  );
};

export default Textarea;
