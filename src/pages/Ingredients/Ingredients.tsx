import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { PagesNavigation } from 'Components/pagesNavigation/PagesNavigation';
import { Loader } from 'Components/loader/Loader';
import { Box } from 'Components/box/Box';
import { theme } from 'constants/theme';

export const Ingredients = () => {
  return (
    <Box backgroundColor={theme.colors.secondaryBackgroundColor}>
      <PagesNavigation type="ingredients" />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Box>
  );
};
