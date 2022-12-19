import React from 'react';
import { createPortal } from 'react-dom';
import { Menu, MenuHeader, Overlay } from './MobileMenu.styled';
import { useDispatch } from 'react-redux';
import { setMobileIsOpen } from 'redux/modal/modalSlice';
import MobileNavigation from 'components/mobileNavigation';

const modalRoot: HTMLDivElement = document.querySelector('#modal')!;

const menu = {
  hidden: { opacity: 0, translateX: '-100px' },
  show: { opacity: 1, translateX: 0 },
};

const MobileMenu = () => {
  const dispatch = useDispatch();
  const handleBackdrop = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) dispatch(setMobileIsOpen(false));
  };

  return createPortal(
    <Overlay
      key="mobileMenu"
      variants={menu}
      initial="hidden"
      animate="show"
      exit="hidden"
      transition={{ duration: 0.3 }}
      onClick={handleBackdrop}
    >
      <Menu>
        <MenuHeader />
        <MobileNavigation />
      </Menu>
    </Overlay>,
    modalRoot,
  );
};

export default MobileMenu;
