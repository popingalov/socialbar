import { Outlet } from 'react-router';
import { Suspense } from 'react';

import Box from 'components/box';
import Loader from 'components/loader';
import Navigation from 'components/navigation';
import { AnimatePresence } from 'framer-motion';

const Layout = () => {
  return (
    <>
      <Box as="header">
        <AnimatePresence>
          <Navigation key="navigation" />
        </AnimatePresence>
      </Box>
      <Box as="main">
        <AnimatePresence>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </AnimatePresence>
      </Box>
    </>
  );
};

export default Layout;
