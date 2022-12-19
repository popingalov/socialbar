import React from 'react';
import { createPortal } from 'react-dom';
import { Menu, MenuHeader, Overlay } from './MobileMenu.styled';
import { useDispatch } from 'react-redux';
import { setMobileIsOpen } from 'redux/modal/modalSlice';
import MobileNavigation from 'components/mobileNavigation';
import { pageAnimation } from 'constants/animations';
import { mobileMenuAnimation } from 'constants/animations';

const modalRoot: HTMLDivElement = document.querySelector('#modal')!;

const MobileMenu = () => {
  const dispatch = useDispatch();
  const handleBackdrop = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) dispatch(setMobileIsOpen(false));
  };

  return createPortal(
    <Overlay
      {...pageAnimation}
      transition={{ duration: 0.2 }}
      onClick={handleBackdrop}
    >
      <Menu
        key="mobileMenu"
        {...mobileMenuAnimation}
        transition={{ duration: 0.2 }}
      >
        <MenuHeader />
        <MobileNavigation />
      </Menu>
    </Overlay>,
    modalRoot,
  );
};

export default MobileMenu;
