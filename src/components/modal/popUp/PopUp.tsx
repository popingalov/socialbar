import { ReactNode } from 'react';
import { Modal } from './PopUp.styled';
import Overlay from 'components/modal/overlay';
import { popUpMenuAnimation } from 'constants/animations';

interface IProps {
  children?: ReactNode;
  coordinates: ICoordinates;
  type: 'select' | 'extraMenu' | 'context';
}

const PopUp: React.FC<IProps> = ({
  children,
  type,
  coordinates: { top, left, right },
}) => {
  return (
    <Overlay modalType={type}>
      <Modal
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
  );
};

export default PopUp;
