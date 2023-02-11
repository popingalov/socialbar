import { settingTypes } from 'constants/settings';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { selectSettings } from 'redux/settings/settingsSelectors';

interface ILanguage {
  [x: string]: string;
}

interface IStartupScreen {
  [x: string]: string;
}

export const useSettings = () => {
  const settings = useSelector(selectSettings);
  const { t } = useTranslation();

  const settingList = [
    {
      name: 'startupScreen',
      title: t('settings.startUp'),
      description: '',
    },
    {
      name: 'language',
      title: t('settings.language'),
      description: '',
    },
    // {
    //   name: 'deleted',
    //   title: 'Deleted cocktails and ingredients',
    //   description: 'See and restore deleted stock cocktails and ingredients',
    // },
  ];

  const languageList: ILanguage = {
    en: t('languages.en'),
    ua: t('languages.ua'),
  };

  const startupScreenList: IStartupScreen = {
    myBarShelf: t('ingredientsNav.myBarShelf'),
    manageBarShelf: t('ingredientsNav.manageBarShelf'),
    shoppingList: t('ingredientsNav.shoppingList'),
    myCocktails: t('cocktailsNav.myCocktails'),
    allCocktails: t('cocktailsNav.allCocktails'),
    favoriteCocktails: t('cocktailsNav.favoriteCocktails'),
  };

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

  return { settingList, startupScreenList, languageList };
};
