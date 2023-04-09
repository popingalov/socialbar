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
    <label
      htmlFor={name}
      style={{ position: 'relative', width: '24px', height: '24px' }}
    >
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
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          width: '20px',
          height: '20px',
        }}
      />
    </label>
  );
};
export default InputFile;
