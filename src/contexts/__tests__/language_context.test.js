import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { LanguageProvider } from '../LanguageContext';
import { Text, TouchableOpacity } from 'react-native';
import { LANGUAGE_ACTIONS, useLocale } from '../../hooks';

const TestComponent = () => {
  const { state, dispatch } = useLocale();
  const testChange = () =>
    dispatch({
      type: LANGUAGE_ACTIONS.SET,
      payload: { locale: 'fr' },
    });
  return (
    <TouchableOpacity testID='testButton' onPress={testChange}>
      <Text testID='testText'>{state.text.add}</Text>
    </TouchableOpacity>
  );
};

describe('LanguageContext unit tests', () => {
  test('When I change a state value, the component updates', () => {
    const { getByTestId } = render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>
    );
    expect(getByTestId('testText').children[0]).toEqual('Add');
    fireEvent.press(getByTestId('testButton'));
    expect(getByTestId('testText').children[0]).toEqual('Ajouter');
  });
});
