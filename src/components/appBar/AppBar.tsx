import { MobileMenu } from 'components/mobileMenu/MobileMenu';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Box } from '../box/Box';

export const AppBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <Box as="header">
      App Bar
      {/* temp */}
      <button onClick={toggleMenu}>open mobile menu</button>
      {/* to check when element will be unmounted for animation */}
      {/* <AnimatePresence>
        {isMenuOpen && <MobileMenu key="menu" closeMenu={toggleMenu} />}
      </AnimatePresence> */}
      {isMenuOpen && <MobileMenu closeMenu={toggleMenu} />}
    </Box>
  );
};
