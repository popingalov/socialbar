import BarLoader from 'react-spinners/BarLoader';
import { theme } from '../../constants/theme';

const override = {
  display: 'block',
  margin: `20px auto`,
};

const color = theme.colors.accent;

interface IProps {
  isLoading?: boolean;
}

export const Loader: React.FC<IProps> = ({ isLoading }) => (
  <BarLoader
    color={color}
    loading={isLoading}
    cssOverride={override}
    width={160}
    aria-label="Loading Spinner"
  />
);
