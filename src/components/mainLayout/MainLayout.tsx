import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from '../appBar/AppBar';
import { Box } from 'components/box/Box';
import { Loader } from '../loader/Loader';

export const MainLayout = () => {
  return (
    <>
      <AppBar />
      <Box as="main">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Box>
    </>
  );
};
