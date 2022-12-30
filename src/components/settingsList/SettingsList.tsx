import { listAnimation } from 'constants/animations';
import {
  Description,
  SettingsListStyled,
  Title,
} from 'pages/settings/Settings.styled';
import { useSelector } from 'react-redux';
import { userState } from 'redux/auth/authSelectors';

interface ISetting {
  name: string;
  title: string;
  description: string;
}

const settingList: ISetting[] = [
  {
    name: 'deleted',
    title: 'Deleted cocktails and ingredients',
    description: 'See and restore deleted stock cocktails and ingredients',
  },
  {
    name: 'startupScreen',
    title: 'App Startup screen',
    description: '',
  },
  {
    name: 'language',
    title: 'Language',
    description: '',
  },
];

export const SettingsList = () => {
  const user = useSelector(userState);

  if (user) {
    const { locale, startPage } = user;

    const languageIdx = settingList.findIndex(
      ({ name }) => name === 'language',
    );
    const startPageIdx = settingList.findIndex(
      ({ name }) => name === 'startupScreen',
    );

    settingList[languageIdx] = {
      ...settingList[languageIdx],
      description: locale,
    };
    settingList[startPageIdx] = {
      ...settingList[startPageIdx],
      description: startPage,
    };
  }

  return (
    <SettingsListStyled
      key="list"
      {...listAnimation}
      transition={{ duration: 0.2 }}
    >
      {settingList.map(({ title, description }) => (
        <li key={title}>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </li>
      ))}
    </SettingsListStyled>
  );
};
