import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from '../../Components/Loader/Loader';

export const Ingredients = () => {
  return (
    <div>
      Ingredients
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
