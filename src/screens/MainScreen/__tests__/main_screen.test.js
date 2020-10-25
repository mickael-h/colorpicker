import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import MainScreen, { ColorItem, ColorList } from '..';
import { ColorProvider } from '../../../contexts/ColorContext';
import { COLOR_ACTIONS, useColors } from '../../../hooks';
import { TouchableOpacity } from 'react-native';

describe('ColorItem integration test', () => {
  test('When I create a ColorItem, it renders correctly', () => {
    const item = {
      code: '#ffffff',
      dark: false,
      name: 'white',
      id: 0,
    };
    const { getByText } = render(
      <ColorProvider>
        <ColorItem item={item} />
      </ColorProvider>
    );
    const text = getByText('white');
    expect(text.props.style[1].color).toEqual('black');
    expect(text.parent.props.style[1].backgroundColor).toEqual('#ffffff');
  });
});

describe('Color List integration test', () => {
  const TestComponent = () => {
    const { state, dispatch } = useColors();
    const testChange = () =>
      dispatch({
        type: COLOR_ACTIONS.ADD,
        payload: { red: 0, green: 0, blue: 0, name: `black${state.length}` },
      });
    return (
      <TouchableOpacity testID='testButton' onPress={testChange}>
        <ColorList />
      </TouchableOpacity>
    );
  };

  test('When I create a ColorList, I can add and remove elements from the list', () => {
    const { getByTestId, getByText } = render(
      <ColorProvider>
        <TestComponent />
      </ColorProvider>
    );
    const addButton = getByTestId('testButton');
    const list = addButton.children[0];
    expect(list.children[0].props.data).toHaveLength(0);
    fireEvent.press(addButton);
    expect(list.children[0].props.data).toHaveLength(1);
    const text = getByText('black0');
    const deleteButton = text.parent.children[1];
    fireEvent.press(deleteButton);
    expect(list.children[0].props.data).toHaveLength(0);
  });
});

describe('MainScreen integration test', () => {
  test('When I display the main screen it renders correctly and navigation works', () => {
    const navigateMock = jest.fn();
    const { getByTestId } = render(
      <ColorProvider>
        <MainScreen navigation={{ navigate: navigateMock }} />
      </ColorProvider>
    );
    fireEvent.press(getByTestId('FloatingAddButton'));
    expect(navigateMock).toHaveBeenCalled();
  });
});
