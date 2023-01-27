import { theme } from 'constants/theme';
import BarLoader from 'react-spinners/BarLoader';
import { Wrapper } from './Loader.styled';

const override = {
  display: 'block',
  margin: `20px auto`,
};

const color = theme.colors.accent;

interface IProps {
  isLoading?: boolean;
}

const Loader: React.FC<IProps> = ({ isLoading }) => (
  <Wrapper>
    <BarLoader
      color={color}
      loading={isLoading}
      cssOverride={override}
      width={160}
      aria-label="Loading Spinner"
    />
  </Wrapper>
);

export default Loader;
