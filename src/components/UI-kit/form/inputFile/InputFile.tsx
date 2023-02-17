import { ErrorText, InputAddPhoto, LabelAddPhoto } from './InputFile.styled';
import { FaCamera } from 'react-icons/fa';
import { theme } from 'constants/theme';
import { ErrorMessage } from 'formik';

interface IProps {
  name: string;
  id: string;
}

const InputFile: React.FC<IProps> = ({ name, id }) => {
  return (
    <label htmlFor={name} style={{ position: 'relative' }}>
      <InputAddPhoto
        placeholder="image"
        type="file"
        name={name}
        id={id}
        accept=".png, .jpg, .jpeg, .gif, .web"
      />
      <ErrorMessage name={name} component={ErrorText} />
      <FaCamera
        name={name}
        color={theme.colors.secondaryText}
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          margin: '8px',
          pointerEvents: 'none',
        }}
      />
    </label>
  );
};
export default InputFile;
