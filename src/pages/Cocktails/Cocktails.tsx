import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from 'Components/loader/Loader';
import { PagesNavigation } from 'Components/pagesNavigation/PagesNavigation';

export const Cocktails = () => {
  return (
    <div>
      <PagesNavigation type="cocktails" />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
