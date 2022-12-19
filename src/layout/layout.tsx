import { Outlet } from 'react-router';
import { Suspense } from 'react';

// import NavigationMain from 'components/navigation/navigationMain';
import Box from 'components/box';
import Loader from 'components/loader';
import Navigation from 'components/navigation';

const Layout = () => (
  <>
    <Box as="header">
      <Navigation />
    </Box>
    <Box as="main">
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Box>
  </>
);
export default Layout;
