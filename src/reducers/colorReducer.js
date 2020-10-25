import { getColorCode, isDark } from '../utils';

export const initalState = [];

export const ACTIONS = Object.freeze({
  ADD: 'ADD',
  REMOVE: 'REMOVE',
});

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD:
      return addColor(state, action.payload);
    case ACTIONS.REMOVE:
      return removeColor(state, action.payload);
    default:
      return state;
  }
};

const addColor = (state, payload) => {
  const { name, red, green, blue } = payload;
  const code = getColorCode(red, green, blue);
  return [
    ...state,
    {
      id: getNextId(state),
      dark: isDark(red, green, blue),
      name: name || code,
      code,
    },
  ];
};

const getNextId = state =>
  state.length == 0
    ? 0
    : state[state.length - 1].id + 1;

const removeColor = (state, payload) =>
  state.filter(color => color.id !== payload.id);
