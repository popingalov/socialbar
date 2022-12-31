interface ISettingTypes {
  readonly language: string;
  readonly startupScreen: string;
}

export const settingTypes: ISettingTypes = {
  language: 'language',
  startupScreen: 'startupScreen',
};

interface ISetting {
  name: string;
  title: string;
  description: string;
}

export const settingList: ISetting[] = [
  // {
  //   name: 'deleted',
  //   title: 'Deleted cocktails and ingredients',
  //   description: 'See and restore deleted stock cocktails and ingredients',
  // },
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

interface ILanguage {
  [x: string]: string;
}

export const languageList: ILanguage = {
  ru: 'Russian',
  en: 'English',
  ua: 'Ukrainian',
};
