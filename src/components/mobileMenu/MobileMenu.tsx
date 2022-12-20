import React from 'react';
import { createPortal } from 'react-dom';
import {
  Menu,
  MenuHeader,
  Overlay,
  UserIconWrapper,
} from './MobileMenu.styled';
import { useDispatch } from 'react-redux';
import { setMobileIsOpen } from 'redux/modal/modalSlice';
import MobileNavigation from 'components/mobileMenu/mobileNavigation';
import { pageAnimation } from 'constants/animations';
import { mobileMenuAnimation } from 'constants/animations';
import { IoMdPerson } from 'react-icons/io';
import MobileMenuButton from 'components/UI-kit/buttons/mobileMenuButton';
import { FiLogIn } from 'react-icons/fi';

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
        <MenuHeader>
          <UserIconWrapper>
            <IoMdPerson />
          </UserIconWrapper>
          <MobileMenuButton>
            Default account
            <FiLogIn />
          </MobileMenuButton>
        </MenuHeader>
        <MobileNavigation />
      </Menu>
    </Overlay>,
    modalRoot,
  );
};

export default MobileMenu;
