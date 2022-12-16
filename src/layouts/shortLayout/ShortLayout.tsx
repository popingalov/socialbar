import { Outlet } from 'react-router';

import NavigationCard from 'components/navigation/navigationCard';

const ShortLayout = () => (
  <>
    <NavigationCard />
    <Outlet />
  </>
);

export default ShortLayout;
