import React from 'react';
import MainNavigation from 'components/mainNavigation';
import { createPortal } from 'react-dom';
import { Menu, MenuHeader, Overlay } from './MobileMenu.styled';

const modalRoot: HTMLDivElement = document.querySelector('#modal')!;

interface IProps {
  closeMenu: () => void;
}

// const menu = {
//   hidden: { opacity: 0, translateX: '-100px' },
//   show: { opacity: 1, translateX: 0 },
// };

const MobileMenu: React.FC<IProps> = ({ closeMenu }) => {
  const handleBackdrop = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) closeMenu();
  };

  return createPortal(
    <Overlay onClick={handleBackdrop}>
      <Menu>
        <MenuHeader />
        <MainNavigation closeMenu={closeMenu} />
      </Menu>
    </Overlay>,
    modalRoot,
  );
};

export default MobileMenu;

// <Overlay
// key="menu"
// variants={menu}
// initial="hidden"
// animate="show"
// exit="hidden"
// transition={{ duration: 0.2 }}
// onClick={handleBackdrop}
// ></Overlay>
