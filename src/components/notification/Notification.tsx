import uuid from 'react-uuid';
// import Loader from 'components/loader/Loader';

import {
  Container,
  ContainerNotificatio,
  TextMessage,
  NotificationButton,
} from './Notification.styled';

interface IProps {
  message: string;
  buttonSelect: string[];
  handleClick: any;
}

const Notification: React.FC<IProps> = ({
  message,
  buttonSelect,
  handleClick,
}) => {
  return (
    <Container>
      <ContainerNotificatio>
        <TextMessage>{message}</TextMessage>
        {buttonSelect &&
          buttonSelect.map(elem => (
            <NotificationButton
              type="button"
              key={uuid()}
              onClick={handleClick}
              id={elem}
            >
              {elem}
            </NotificationButton>
          ))}
      </ContainerNotificatio>
    </Container>
  );
};
export default Notification;
