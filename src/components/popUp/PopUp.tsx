import { ReactNode } from 'react';
import { Modal } from './PopUp.styled';
import Overlay from 'components/overlay';
import { popUpMenuAnimation } from 'constants/animations';

// добавить right координаты
interface IProps {
  children?: ReactNode;
  coordinates: {
    top: null | number;
    left: null | number;
  };
  type: 'select' | 'extraMenu';
}

const PopUp: React.FC<IProps> = ({
  children,
  type,
  coordinates: { top, left },
}) => {
  return (
    <Overlay modalType="popUp">
      <Modal
        key="popUp"
        {...popUpMenuAnimation}
        transition={{ duration: 0.2 }}
        type={type}
        top={top}
        left={left}
      >
        {children}
      </Modal>
    </Overlay>
  );
};

export default PopUp;
