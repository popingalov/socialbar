import { pageAnimation } from 'constants/animations';
import { ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import { OverlayStyled } from './Overlay.styled';
import {
  setContextMenuIsOpen,
  setExtraMenuIsOpen,
  setMobileIsOpen,
  setPopUpIsOpen,
  setSettingsMenuIsOpen,
} from 'redux/modal/modalSlice';
import { createPortal } from 'react-dom';

const modalRoot: HTMLDivElement = document.querySelector('#modal')!;

interface IProps {
  children: ReactNode;
  modalType:
    | 'mobileMenu'
    | 'select'
    | 'extraMenu'
    | 'settingsModal'
    | 'context';
}

const Overlay: React.FC<IProps> = ({ children, modalType }) => {
  const dispatch = useDispatch();
  const action = getAction(modalType);
  const handleBackdrop = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget && action) dispatch(action);
  };

  return createPortal(
    <OverlayStyled
      {...pageAnimation}
      transition={{ duration: 0.2 }}
      onClick={handleBackdrop}
      type={modalType}
      // modalType={modalType}
    >
      {children}
    </OverlayStyled>,
    modalRoot,
  );
};

function getAction(type: string) {
  switch (type) {
    case 'mobileMenu':
      return setMobileIsOpen(false);
    case 'select':
      return setPopUpIsOpen(false);
    case 'extraMenu':
      return setExtraMenuIsOpen(false);
    case 'settingsModal':
      return setSettingsMenuIsOpen(false);
    case 'context':
      return setContextMenuIsOpen(false);
    default:
      return;
  }
}

export default Overlay;
