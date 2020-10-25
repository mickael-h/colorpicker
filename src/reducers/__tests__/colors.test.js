import { reducer, initalState, ACTIONS } from '../colorReducer';

describe('Colors unit tests', () => {
  test('When I add the first color, it is saved in the state with the ID 0', () => {
    let state = initalState;
    expect(state).toHaveLength(0);
    state = reducer(state, {
      type: ACTIONS.ADD,
      payload: { name: 'red', red: 255, green: 0, blue: 0 },
    });
    expect(state).toHaveLength(1);
  });

  test('When I add a color without a name, the name is the color code', () => {
    let state = initalState;
    state = reducer(state, {
      type: ACTIONS.ADD,
      payload: { red: 255, green: 255, blue: 255 },
    });
    expect(state[0].name).toEqual('#ffffff');
  });

  test('When I add more than 1 color, it is saved in the state with a new ID', () => {
    let state = [
      { id: 2, name: 'red', red: 255, green: 0, blue: 0 },
      { id: 3, name: 'green', red: 0, green: 255, blue: 0 },
    ];
    state = reducer(state, {
      type: ACTIONS.ADD,
      payload: { name: 'blue', red: 0, green: 0, blue: 255 },
    });
    expect(state).toHaveLength(3);
    expect(state[2].id).toBe(4);
  });

  test('When I remove a color, it is removed from the state', () => {
    const state = [
      { id: 0, name: 'red', red: 255, green: 0, blue: 0 },
      { id: 1, name: 'green', red: 0, green: 255, blue: 0 },
      { id: 2, name: 'blue', red: 0, green: 0, blue: 255 },
    ];
    const newState = reducer(state, {
      type: ACTIONS.REMOVE,
      payload: { id: 1 },
    });
    expect(newState).toHaveLength(2);
    expect(newState[0]).toEqual(state[0]);
    expect(newState[1]).toEqual(state[2]);
  });

  test('When I try a wrong action, the state is unchanged', () => {
    const state = [
      { id: 0, name: 'red', red: 255, green: 0, blue: 0 },
      { id: 1, name: 'green', red: 0, green: 255, blue: 0 },
      { id: 2, name: 'blue', red: 0, green: 0, blue: 255 },
    ];
    const newState = reducer(state, {
      type: 'wrong action',
    });
    expect(newState).toBe(state);
  });
});
