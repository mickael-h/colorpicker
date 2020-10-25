import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ColorProvider } from '../ColorContext';
import { Text, TouchableOpacity } from 'react-native';
import { COLOR_ACTIONS, useColors } from '../../hooks';

const TestComponent = () => {
  const { state, dispatch } = useColors();
  const testChange = () =>
    dispatch({
      type: COLOR_ACTIONS.ADD,
      payload: { red: 0, green: 0, blue: 0, name: 'black' },
    });
  return (
    <TouchableOpacity testID='testButton' onPress={testChange}>
      <Text testID='testText'>{`nbcolors:${state.length}`}</Text>
    </TouchableOpacity>
  );
};

describe('ColorContext unit tests', () => {
  test('When I change a state value, the component updates', () => {
    const { getByTestId } = render(
      <ColorProvider>
        <TestComponent />
      </ColorProvider>
    );
    expect(getByTestId('testText').children[0]).toEqual('nbcolors:0');
    fireEvent.press(getByTestId('testButton'));
    expect(getByTestId('testText').children[0]).toEqual('nbcolors:1');
  });
});
