import PuffLoader from 'react-spinners/PuffLoader';
import { theme } from 'constants/theme';
import { Wrapper } from './Loader.styled';

const override = {
  display: 'block',
  margin: `20px auto`,
};

const color = theme.colors.accent;

interface IProps {
  isLoading?: boolean;
}

const Loader: React.FC<IProps> = ({ isLoading }) => {
  return (
    <Wrapper>
      <PuffLoader
        color={color}
        loading={isLoading}
        cssOverride={override}
        aria-label="Loading Spinner"
      />
    </Wrapper>
  );
};

export default Loader;
