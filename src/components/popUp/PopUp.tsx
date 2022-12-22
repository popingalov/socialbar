import { ReactNode } from 'react';
import { Modal } from './PopUp.styled';
import Overlay from 'components/overlay';
import { popUpMenuAnimation } from 'constants/animations';

interface IProps {
  children?: ReactNode;
}

const PopUp: React.FC<IProps> = ({ children }) => {
  return (
    <Overlay modalType="popUp">
      <Modal key="popUp" {...popUpMenuAnimation} transition={{ duration: 0.2 }}>
        {children}
      </Modal>
    </Overlay>
  );
};

export default PopUp;
