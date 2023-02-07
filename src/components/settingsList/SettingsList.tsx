import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
import { getKeyByValue } from 'helpers/getKeyByValue';
import { languageList } from 'constants/languages';
import { listAnimation } from 'constants/animations';
import { Options, Option } from './SettingsList.styled';
import { startupScreenList } from 'constants/startupScreen';
import { settingList, settingTypes } from 'constants/settings';
import {
  SettingsItem,
  SettingsListStyled,
} from 'pages/settings/Settings.styled';
import { selectSettingsMenuStatus } from 'redux/modal/modalSelectors';
import { selectSettings } from 'redux/settings/settingsSelectors';
import SettingsCard from 'components/settingsList/settingsCard';
import SettingsModal from 'components/modal/settingsModal';
import { setSettingsMenuIsOpen } from 'redux/modal/modalSlice';
import { setLanguage, setStartupScreen } from 'redux/settings/settingsSlice';

const SettingsList = () => {
  const settings = useSelector(selectSettings);
  const settingsMenuIsOpen = useSelector(selectSettingsMenuStatus);
  const dispatch = useDispatch();
  const [type, setType] = useState('');
  const [values, setValues] = useState<string[]>([]);

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
      description: startupScreenList[startupScreen],
    };
  }

  const handleMenuItemClick: React.MouseEventHandler<HTMLLIElement> = event => {
    const menuName = event.currentTarget.getAttribute('name');
    if (menuName === settingTypes.language) {
      setType(settingTypes.language);
      setValues(Object.values(languageList));
    }
    if (menuName === settingTypes.startupScreen) {
      setType(settingTypes.startupScreen);
      setValues(Object.values(startupScreenList));
    }
    dispatch(setSettingsMenuIsOpen(true));
  };

  const handleSelectChange = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    value: string,
  ) => {
    const type = event.currentTarget.getAttribute('name');

    if (type === settingTypes.language) {
      const key = getKeyByValue(languageList, value);
      if (key) dispatch(setLanguage(key));
    }
    if (type === settingTypes.startupScreen) {
      const key = getKeyByValue(startupScreenList, value);
      if (key) dispatch(setStartupScreen(key));
    }

    dispatch(setSettingsMenuIsOpen(false));
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
            <>
              <SettingsItem
                key={name}
                onClick={handleMenuItemClick}
                name={name}
              >
                <SettingsCard title={title} description={description} />
              </SettingsItem>
            </>
          );
        })}
      </SettingsListStyled>
      <AnimatePresence>
        {settingsMenuIsOpen && (
          <SettingsModal key="settings">
            <Options>
              {values &&
                values.map((value: string) => {
                  const isActive =
                    type === 'language'
                      ? getKeyByValue(languageList, value) === settings.language
                      : getKeyByValue(startupScreenList, value) ===
                        settings.startupScreen;

                  return (
                    <Option
                      name={type}
                      onClick={event => handleSelectChange(event, value)}
                      isActive={isActive}
                      key={value}
                    >
                      {value}
                    </Option>
                  );
                })}
            </Options>
          </SettingsModal>
        )}
      </AnimatePresence>
    </>
  );
};
export default SettingsList;
