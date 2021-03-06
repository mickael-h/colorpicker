import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import FloatingAddButton from '..';

describe('FloatingAddButton unit tests', () => {
  test('When I press the button, the callback is called', () => {
    const callback = jest.fn();
    const { getByTestId } = render(<FloatingAddButton
      onPress={callback}
    />);
    fireEvent.press(getByTestId('FloatingAddButton'));
    expect(callback).toHaveBeenCalled();
  });
});
