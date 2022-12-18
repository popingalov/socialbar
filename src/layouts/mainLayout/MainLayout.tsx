import { Outlet } from 'react-router';
import { Suspense } from 'react';

import NavigationMain from 'components/navigation/navigationMain';
import Box from 'components/box';
import Loader from 'components/loader';

const MainLayout = () => (
  <>
    <NavigationMain />
    <Box as="main">
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Box>
  </>
);
export default MainLayout;
