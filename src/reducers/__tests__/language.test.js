import { reducer, initalState, ACTIONS } from '../languageReducer';

describe('Language unit tests', () => {
  test('When no locale is defined, texts are in English', () => {
    const state = initalState;
    expect(state.text.add).toEqual('Add');
  });

  test('When locale is changed, texts change', () => {
    let state = initalState;
    state = reducer(state, {
      type: ACTIONS.SET,
      payload: { locale: 'fr' },
    });
    expect(state.text.add).toEqual('Ajouter');
    state = reducer(state, {
      type: ACTIONS.SET,
      payload: { locale: 'en' },
    });
    expect(state.text.add).toEqual('Add');
  });

  test('When I try to set the locale to the one already in use, the state is unchanged', () => {
    const state = initalState;
    const newState = reducer(state, {
      type: ACTIONS.SET,
      payload: { locale: 'en' },
    });
    expect(newState).toBe(state);
  });

  test('When I try a wrong action, the state is unchanged', () => {
    const state = initalState;
    const newState = reducer(state, {
      type: 'wrong action',
    });
    expect(newState).toBe(state);
  });

  test('When I try a wrong language, the state is unchanged', () => {
    const state = initalState;
    const newState = reducer(state, {
      type: ACTIONS.SET,
      payload: { locale: 'klingon' },
    });
    expect(newState).toBe(state);
  });
});
