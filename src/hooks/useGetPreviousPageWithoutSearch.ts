import { useLocation } from 'react-router';

export const useGetPreviousPageWithoutSearch = () => {
  const location = useLocation();
  console.log('location', location);
  const pathData = location?.state?.from?.split('/');
  pathData?.pop(pathData.length - 1);

  return pathData?.join('/');
};
