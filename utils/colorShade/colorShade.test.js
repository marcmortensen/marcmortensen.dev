const { colorShade } = require('./index');

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
