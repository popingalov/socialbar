import { Outlet } from 'react-router';

import NavigationMain from 'components/navigation/navigationMain';
import MobileMenu from 'components/mobileMenu';
import { useSelector } from 'react-redux';
import { selectMobileMenuStatus } from 'redux/modal/modalSelectors';

const MainLayout = () => {
  const menuIsOpen = useSelector(selectMobileMenuStatus);
  console.log('menuIsOpen', menuIsOpen);

  return (
    <>
      <NavigationMain />
      <Outlet />
      {menuIsOpen && <MobileMenu />}
    </>
  );
};
export default MainLayout;
