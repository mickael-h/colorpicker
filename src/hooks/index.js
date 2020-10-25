import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { ColorContext } from '../contexts/ColorContext';
import { ACTIONS as C_ACTIONS } from '../reducers/colorReducer';
import { ACTIONS as L_ACTIONS } from '../reducers/languageReducer';

export const LANGUAGE_ACTIONS = L_ACTIONS;
export const COLOR_ACTIONS = C_ACTIONS;

export const useColors = () => useContext(ColorContext);
export const useLocale = () => useContext(LanguageContext);
