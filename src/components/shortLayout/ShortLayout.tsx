import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from 'components/box/Box';
import { Loader } from '../loader/Loader';

export const ShortLayout = () => {
  return (
    <>
      <div>ShortLayout</div>
      <Box as="main">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Box>
    </>
  );
};
