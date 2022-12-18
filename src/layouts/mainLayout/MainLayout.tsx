import { Outlet } from 'react-router';

import NavigationMain from 'components/navigation/navigationMain';

const MainLayout = () => (
  <>
    <NavigationMain />
    <Outlet />
  </>
);
export default MainLayout;
