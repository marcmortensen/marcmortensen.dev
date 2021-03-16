const { shuffle } = require('./index');

beforeEach(() => {
  jest.spyOn(global.Math, 'random').mockReturnValue(0);
});

afterEach(() => {
  jest.spyOn(global.Math, 'random').mockRestore();
});

test('should unsort any sorted array', () => {
  const sortedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const shuffledArray = shuffle(sortedArr);
  expect(shuffledArray).toStrictEqual([2, 3, 4, 5, 6, 7, 8, 9, 1]);
});

test('empty array on empty input', () => {
  expect(shuffle([])).toStrictEqual([]);
});
