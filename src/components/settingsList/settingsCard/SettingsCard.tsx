import { Description, Title } from './SettingsCard.styled';

interface IProps {
  title: string;
  description: string;
}

const SettingsCard: React.FC<IProps> = ({ title, description }) => {
  return (
    <>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </>
  );
};

export default SettingsCard;
