import { Outlet } from 'react-router';

import NavigationCard from 'Components/Navigation/NavigationCard';

const ShortLayout = () => (
  <>
    <NavigationCard />
    <Outlet />
  </>
);

export default ShortLayout;
