import { Outlet } from 'react-router';

import NavigationMain from 'Components/Navigation/NavigationMain';

const MainLayout = () => (
  <>
    <NavigationMain />
    <Outlet />
  </>
);

export default MainLayout;
