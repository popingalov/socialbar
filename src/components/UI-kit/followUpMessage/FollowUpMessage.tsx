import { ReactNode } from 'react';
import { Message } from './FollowUpMessage.styled';

interface IProps {
  children: ReactNode;
}
const FollowUpMessage: React.FC<IProps> = ({ children }) => {
  return <Message>{children}</Message>;
};

export default FollowUpMessage;
