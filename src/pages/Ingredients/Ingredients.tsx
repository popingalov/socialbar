import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { PagesNavigation } from 'Components/PagesNavigation/PagesNavigation';
import { Loader } from 'Components/Loader/Loader';
import { Box } from 'Components/Box/Box';
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
