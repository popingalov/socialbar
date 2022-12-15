import { Navigation } from 'components/Navigation/Navigation';
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Menu, MenuHeader, Overlay } from './MobileMenu.styled';

const modalRoot: HTMLDivElement = document.querySelector('#modal')!;

interface IProps {
  closeMenu?: () => void;
  children?: React.ReactNode;
}

const menu = {
  hidden: { opacity: 0, translateX: '-100px' },
  show: { opacity: 1, translateX: 0 },
};

export const MobileMenu: React.FC<IProps> = ({ children, closeMenu }) => {
  // useEffect(() => {
  //   const handleKeyDown: EventListenerOrEventListenerObject = event => {
  //     if (event instanceof KeyboardEvent && event.code === 'Escape')
  //       closeMenu();
  //   };

  //   window.addEventListener('keydown', handleKeyDown);

  //   return () => window.removeEventListener('keydown', handleKeyDown);
  // }, [closeMenu]);

  // const handleBackdrop = (event: React.MouseEvent<HTMLDivElement>) => {
  //   if (event.target === event.currentTarget) closeMenu();
  // };

  return createPortal(
    <Overlay
      key="modal"
      variants={menu}
      initial="hidden"
      animate="show"
      exit="hidden"
      // onClick={handleBackdrop}
    >
      <Menu>
        <MenuHeader />
        <Navigation />
      </Menu>
    </Overlay>,
    modalRoot,
  );
};
