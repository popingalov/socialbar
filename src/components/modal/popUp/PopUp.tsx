import { ReactNode, useEffect, useRef, useState } from 'react';
import { Modal } from './PopUp.styled';
import Overlay from 'components/modal/overlay';
import { popUpMenuAnimation } from 'constants/animations';
import { useGetWindowDimensions } from 'hooks/useGetWindowDimensions';
import { createPortal } from 'react-dom';

const modalRoot: HTMLDivElement = document.querySelector('#modal')!;

interface IProps {
  children?: ReactNode;
  coordinates: ICoordinates;
  type: 'select' | 'extraMenu' | 'context' | 'search' | 'glass';
  onClose?: () => void;
}

const PopUp: React.FC<IProps> = ({
  children,
  type,
  coordinates: { top, left, right },
  onClose,
}) => {
  const windowDimensions = useGetWindowDimensions();
  const popUpContext = useRef<HTMLDivElement>(null);
  const [modalDimensions, setModalDimensions] = useState<{
    width: number;
    height: number;
  }>({ width: 0, height: 0 });

  useEffect(() => {
    window.addEventListener('resize', getCoordinates);

    function getCoordinates() {
      if (popUpContext.current) {
        const { width, height } = popUpContext.current.getBoundingClientRect();
        setModalDimensions({ width, height });
      }
    }
    getCoordinates();

    return () => window.removeEventListener('resize', getCoordinates);
  }, []);

  return (
    <>
      {type !== 'search' ? (
        <Overlay modalType={type} onClose={onClose}>
          <Modal
            windowdimensions={windowDimensions}
            modaldimensions={modalDimensions}
            ref={popUpContext}
            key="popUp"
            {...popUpMenuAnimation}
            transition={{ duration: 0.2 }}
            type={type}
            top={top}
            left={left}
            right={right}
          >
            {children}
          </Modal>
        </Overlay>
      ) : (
        createPortal(
          <Modal
            windowdimensions={windowDimensions}
            modaldimensions={modalDimensions}
            key="popUp"
            {...popUpMenuAnimation}
            transition={{ duration: 0.2 }}
            type={type}
            top={top}
            left={left}
            right={right}
          >
            {children}
          </Modal>,
          modalRoot,
        )
      )}
    </>
  );
};

export default PopUp;
