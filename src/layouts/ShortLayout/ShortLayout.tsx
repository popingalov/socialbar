import { Outlet } from 'react-router';

import NavigationCard from 'components/Navigation/NavigationCard';

const ShortLayout = () => (
  <>
    <NavigationCard />
    <Outlet />
  </>
);

export default ShortLayout;
