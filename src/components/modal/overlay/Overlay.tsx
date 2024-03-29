import { createPortal } from 'react-dom';
import { ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import { pageAnimation } from 'constants/animations';
import { OverlayStyled } from './Overlay.styled';
import {
  setContextMenuIsOpen,
  setExtraMenuIsOpen,
  setMobileIsOpen,
  setPopUpGlassIsOpen,
  setPopUpIsOpen,
  setSettingsMenuIsOpen,
} from 'redux/modal/modalSlice';
import { modalType } from 'types/modalTypes';

const modalRoot: HTMLDivElement = document.querySelector('#modal')!;

interface IProps {
  children: ReactNode;
  modalType: modalType;
  onClose?: () => void;
}

const Overlay: React.FC<IProps> = ({ children, modalType, onClose }) => {
  const dispatch = useDispatch();
  const action = getAction(modalType);

  const handleBackdrop = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget && onClose) {
      onClose();
      return;
    }

    if (event.target === event.currentTarget && action && !onClose) {
      dispatch(action);
    }
  };

  return createPortal(
    <OverlayStyled
      {...pageAnimation}
      transition={{ duration: 0.2 }}
      onClick={handleBackdrop}
      type={modalType}
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
    case 'glass':
      return setPopUpGlassIsOpen(false);
    default:
      return;
  }
}

export default Overlay;
