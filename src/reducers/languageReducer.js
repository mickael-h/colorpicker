
export const LOCALES = Object.freeze({
  en: 'en',
  fr: 'fr',
});

export const initalState = {
  locale: 'en',
  text: require('../lang/text_en.json'),
};

export const ACTIONS = Object.freeze({
  SET: 'SET',
});

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET:
      return setLocale(state, action.payload);
    default:
      return state;
  }
};

const setLocale = (state, payload) => {
  const newLocale = payload.locale;
  if (newLocale === state.locale) {
    return state;
  }

  let newText;
  switch (newLocale) {
    case LOCALES.en:
      newText = require('../lang/text_en.json');
      break;
    case LOCALES.fr:
      newText = require('../lang/text_fr.json');
      break;
    default:
      return state;
  }

  return {
    locale: newLocale,
    text: newText,
  };
};
