const {
  colorShade,
  rgbToHex,
  hexToRgb,
  hexColorToGrayScaleHex,
} = require('./index');

test('should shade a color lighter', () => {
  const sortedArr = colorShade('#000000', 40);
  expect(sortedArr).toBe('#282828');
});

test('should shade a color darker', () => {
  const sortedArr = colorShade('#ffffff', -40);
  expect(sortedArr).toBe('#d7d7d7');
});

test('should shade a color lighter with shortcut notation', () => {
  const sortedArr = colorShade('#000', 40);
  expect(sortedArr).toBe('#282828');
});

test('should return same color if it cant be shaded', () => {
  const sortedArr = colorShade('#ffffff', 40);
  expect(sortedArr).toBe('#ffffff');
});

test('should return rgb to hex', () => {
  expect(rgbToHex(0, 255, 0)).toBe('#00ff00');
  expect(rgbToHex(129, 129, 129)).toBe('#818181');
});

test('should return hex to rgb', () => {
  expect(hexToRgb('#00ff00')).toStrictEqual([0, 255, 0]);
  expect(hexToRgb('#00f')).toStrictEqual([0, 0, 255]);
});

test('should return hex into grayscale hex', () => {
  expect(hexColorToGrayScaleHex('#00ff00')).toStrictEqual('#555555');
  expect(hexColorToGrayScaleHex('#E1465E')).toStrictEqual('#828282');
});
