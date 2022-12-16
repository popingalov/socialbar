import { Outlet } from 'react-router';

import NavigationMain from 'components/Navigation/NavigationMain';

const MainLayout = () => (
  <>
    <NavigationMain />
    <Outlet />
  </>
);

export default MainLayout;
