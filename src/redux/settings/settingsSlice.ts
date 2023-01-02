import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist'; // to connect Redux State with LocalStorage
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { LOCAL_STORAGE_KEY } from 'constants/localStorage';
import { languageTypes } from 'constants/languages';
import { startupScreenTypes } from 'constants/startupScreen';

interface ISettings {
  language: string;
  startupScreen: string;
}
const settingsInitialState: ISettings = {
  language: languageTypes.en,
  startupScreen: startupScreenTypes.manageBarShelf,
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState: { settings: settingsInitialState },
  reducers: {
    setLanguage(state, { payload }: PayloadAction<string>) {
      state.settings.language = payload;
    },
    setStartupScreen(state, { payload }: PayloadAction<string>) {
      state.settings.startupScreen = payload;
    },
  },
});

const persistConfig = {
  key: LOCAL_STORAGE_KEY.settings,
  storage,
};
const settingsReducer = settingsSlice.reducer;

export const { setLanguage, setStartupScreen } = settingsSlice.actions;
export const persistedSettingsReducer = persistReducer(
  persistConfig,
  settingsReducer,
);
