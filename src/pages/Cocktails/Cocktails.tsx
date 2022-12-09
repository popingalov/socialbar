import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from '../../Components/Loader/Loader';

export const Cocktails = () => {
  return (
    <div>
      Cocktails
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
