import { ReactNode } from 'react';
import Overlay from 'components/modal/overlay';
import { settingModalAnimation } from 'constants/animations';
import { Modal } from './SettingsModal.styled';

interface IProps {
  children?: ReactNode;
  type?: 'settingsModal';
}

const SettingsModal: React.FC<IProps> = ({
  children,
  type = 'settingsModal',
}) => {
  return (
    <Overlay modalType={type}>
      <Modal
        key="settings"
        {...settingModalAnimation}
        transition={{ duration: 0.2 }}
      >
        {children}
      </Modal>
    </Overlay>
  );
};

export default SettingsModal;
