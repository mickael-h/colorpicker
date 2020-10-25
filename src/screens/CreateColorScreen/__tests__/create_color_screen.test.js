import React from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';
import { LanguageProvider } from '../../../contexts/LanguageContext';
import { ColorProvider } from '../../../contexts/ColorContext';
import CreateColorScreen from '..';
import { View } from 'react-native';

describe('CreateColorScreen integration test', () => {
  test('When I create a ColorItem, it renders correctly', () => {
    const goBackMock = jest.fn();
    const { getByTestId, getByText } = render(
      <ColorProvider>
        <LanguageProvider>
          <View testID='container'>
            <CreateColorScreen navigation={{ goBack: goBackMock }} />
          </View>
        </LanguageProvider>
      </ColorProvider>
    );
    const screen = getByTestId('container').children[0];
    const mainView = screen.children[0].children[0];
    const [
      colorView,
      nameInput,
      redSlider,
      greenSlider,
      blueSlider,
      addButton,
    ] = mainView.children;
    const text = getByText('#000000');
    act(() => redSlider.props.onValueChange(255));
    expect(text.props.children).toEqual('#ff0000');
    expect(text.props.style.color).toEqual('white');
    expect(colorView.props.style[1].backgroundColor).toEqual('#ff0000');
    act(() => greenSlider.props.onValueChange(255));
    expect(text.props.children).toEqual('#ffff00');
    expect(text.props.style.color).toEqual('black');
    expect(colorView.props.style[1].backgroundColor).toEqual('#ffff00');
    act(() => blueSlider.props.onValueChange(255));
    expect(text.props.children).toEqual('#ffffff');
    expect(text.props.style.color).toEqual('black');
    expect(colorView.props.style[1].backgroundColor).toEqual('#ffffff');
    fireEvent.changeText(nameInput, 'white');
    fireEvent.press(addButton);
    expect(goBackMock).toHaveBeenCalled();
  });
});
