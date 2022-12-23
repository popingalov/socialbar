import { pageAnimation } from 'constants/animations';
import { ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import { OverlayStyled } from './Overlay.styled';
import { setMobileIsOpen, setPopUpIsOpen } from 'redux/modal/modalSlice';
import { createPortal } from 'react-dom';

const modalRoot: HTMLDivElement = document.querySelector('#modal')!;

interface IProps {
  children: ReactNode;
  modalType: 'mobileMenu' | 'popUp' | 'extraMenu';
}
// добавить бэкдроп на доп. меню
const Overlay: React.FC<IProps> = ({ children, modalType }) => {
  const dispatch = useDispatch();
  const action =
    modalType === 'mobileMenu' ? setMobileIsOpen(false) : setPopUpIsOpen(false);

  const handleBackdrop = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) dispatch(action);
  };

  return createPortal(
    <OverlayStyled
      {...pageAnimation}
      transition={{ duration: 0.2 }}
      onClick={handleBackdrop}
    >
      {children}
    </OverlayStyled>,
    modalRoot,
  );
};

export default Overlay;
