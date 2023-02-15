import { InputAddPhoto, LabelAddPhoto } from './InputFile.styled';
import { FaCamera } from 'react-icons/fa';
import { ChangeEventHandler } from 'react';
import { theme } from 'constants/theme';

interface IProps {
  changeInput: ChangeEventHandler<HTMLInputElement>;
  name: string;
  id: string;
}

const InputFile: React.FC<IProps> = ({ changeInput, name, id }) => {
  return (
    <LabelAddPhoto>
      <InputAddPhoto
        onChange={changeInput}
        placeholder=""
        type="file"
        name={name}
        id={id}
        accept=".png, .jpg, .jpeg, .gif, .web"
      />
      <FaCamera color={theme.colors.secondaryText} />
    </LabelAddPhoto>
  );
};

export default InputFile;
