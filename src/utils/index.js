export const toHex = val => Number(val).toString(16).padStart(2, '0');
export const getColorCode = (red, green, blue) =>
  `#${toHex(red)}${toHex(green)}${toHex(blue)}`;
export const isDark = (red, green, blue) =>
  (0.299 * red + 0.587 * green + 0.114 * blue) / 255 < 0.5;
