import React, { useReducer, useEffect } from 'react';
import { reducer, initalState, ACTIONS, LOCALES } from '../reducers/languageReducer';
import * as RNLocalize from 'react-native-localize';

export const LanguageContext = React.createContext();

export const LanguageProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initalState);

  useEffect(() => {
    const bestDeviceLanguage =
      RNLocalize.findBestAvailableLanguage(Object.keys(LOCALES));
    dispatch({
      type: ACTIONS.SET,
      payload: { locale: bestDeviceLanguage?.languageTag }
    });
  }, []);

  return <LanguageContext.Provider value={{ state, dispatch }}>
    {children}
  </LanguageContext.Provider>;
};

