import { Outlet } from 'react-router';
import { Suspense } from 'react';

import NavigationCard from 'components/navigation/navigationCard';
import Box from 'components/box';
import Loader from 'components/loader';

const ShortLayout = () => (
  <>
    <NavigationCard />
    <Box as="main" bg="mainBackgroundColor">
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Box>
  </>
);

export default ShortLayout;
