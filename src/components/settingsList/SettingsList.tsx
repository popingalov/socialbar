import { listAnimation } from 'constants/animations';
import { settingList, settingTypes } from 'constants/settings';
import { AnimatePresence } from 'framer-motion';
import {
  Description,
  SettingsItem,
  SettingsListStyled,
  Title,
} from 'pages/settings/Settings.styled';
import { useSelector } from 'react-redux';
import { selectSettingsMenuStatus } from 'redux/modal/modalSelectors';
import SettingsModal from 'components/modal/settingsModal';
import { useDispatch } from 'react-redux';
import { setSettingsMenuIsOpen } from 'redux/modal/modalSlice';
import SettingMenu from './settingsMenu';
import { useState } from 'react';
import { selectSettings } from 'redux/settings/settingsSelectors';
import { languageList } from 'constants/languages';

const SettingsList = () => {
  const settings = useSelector(selectSettings);
  const settingsMenuIsOpen = useSelector(selectSettingsMenuStatus);
  const dispatch = useDispatch();
  // console.log('settings', settings);

  const [type, setType] = useState('');

  if (settings) {
    const { language, startupScreen } = settings;

    const languageIdx = settingList.findIndex(
      ({ name }) => name === settingTypes.language,
    );
    const startPageIdx = settingList.findIndex(
      ({ name }) => name === settingTypes.startupScreen,
    );

    settingList[languageIdx] = {
      ...settingList[languageIdx],
      description: languageList[language],
    };
    settingList[startPageIdx] = {
      ...settingList[startPageIdx],
      description: startupScreen,
    };
  }

  const handleClick: React.MouseEventHandler<HTMLLIElement> = event => {
    const menuName = event.currentTarget.getAttribute('name');
    if (menuName === settingTypes.language) {
      setType(settingTypes.language);
    }
    if (menuName === settingTypes.startupScreen) {
      setType(settingTypes.startupScreen);
    }
    dispatch(setSettingsMenuIsOpen(true));
  };

  return (
    <>
      <SettingsListStyled
        key="list"
        {...listAnimation}
        transition={{ duration: 0.2 }}
      >
        {settingList.map(({ title, description, name }) => {
          return (
            <SettingsItem key={name} onClick={handleClick} name={name}>
              <Title>{title}</Title>
              <Description>{description}</Description>
            </SettingsItem>
          );
        })}
      </SettingsListStyled>
      <AnimatePresence>
        {settingsMenuIsOpen && (
          <SettingsModal key="settings">
            <SettingMenu type={type} />
          </SettingsModal>
        )}
      </AnimatePresence>
    </>
  );
};
export default SettingsList;
