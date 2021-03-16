const { cellFactory } = require('./index');
const CellTypes = {
  FOO: { size: 23, color: 'yellow' },
  BAR: { size: 100, color: 'black' },
};

test('cell creation when given valid blueprint', () => {
  expect(
    cellFactory([{ numberOfCells: 1, type: CellTypes.FOO }])
  ).toStrictEqual([CellTypes.FOO]);
});

test('cell creation when given valid blueprints', () => {
  const cells = cellFactory([
    { numberOfCells: 4, type: CellTypes.FOO },
    { numberOfCells: 5, type: CellTypes.BAR },
  ]);
  expect(cells.length).toBe(9);
  expect(cells[0]).toStrictEqual(CellTypes.FOO);
  expect(cells[cells.length - 1]).toStrictEqual(CellTypes.BAR);
});

test('cell creation when given invalid blueprint', () => {
  expect(
    cellFactory([{ numberOfCells: -1, type: CellTypes.FOO }])
  ).toStrictEqual([]);
});
