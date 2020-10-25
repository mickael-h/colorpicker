import { getColorCode, isDark, toHex } from '..';

describe('utils unit tests', () => {
  test('toHex works', () => {
    expect(toHex(0)).toEqual('00');
    expect(toHex(255)).toEqual('ff');
  });

  test('getColorCode works', () => {
    expect(getColorCode(123, 54, 81)).toEqual('#7b3651');
  });

  test('isDark works', () => {
    expect(isDark(123, 54, 81)).toBe(true);
    expect(isDark(127, 201, 255)).toBe(false);
  });
});
