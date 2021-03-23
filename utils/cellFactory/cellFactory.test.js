const { cellFactory } = require('./index');
const CellTypes = {
  FOO: { size: 23, color: 'yellow' },
  BAR: { size: 100, color: 'black' },
};

test('cell creation creates a cell type', () => {
  expect(
    cellFactory([{ numberOfCells: 1, type: CellTypes.FOO }])
  ).toStrictEqual([{ ...CellTypes.FOO, id: 1 }]);
});

test('cell creation creates multiple cells of each type', () => {
  const cells = cellFactory([
    { numberOfCells: 4, type: CellTypes.FOO },
    { numberOfCells: 5, type: CellTypes.BAR },
  ]);
  expect(cells.length).toBe(9);
  expect(cells[0]).toStrictEqual({ ...CellTypes.FOO, id: 1 });
  expect(cells[1]).toStrictEqual({ ...CellTypes.FOO, id: 2 });
  expect(cells[2]).toStrictEqual({ ...CellTypes.FOO, id: 3 });
  expect(cells[3]).toStrictEqual({ ...CellTypes.FOO, id: 4 });
  expect(cells[4]).toStrictEqual({ ...CellTypes.BAR, id: 5 });
  expect(cells[5]).toStrictEqual({ ...CellTypes.BAR, id: 6 });
  expect(cells[6]).toStrictEqual({ ...CellTypes.BAR, id: 7 });
  expect(cells[7]).toStrictEqual({ ...CellTypes.BAR, id: 8 });
  expect(cells[8]).toStrictEqual({ ...CellTypes.BAR, id: 9 });
});

test('cell creation when given invalid blueprint returns empty array', () => {
  expect(
    cellFactory([{ numberOfCells: -1, type: CellTypes.FOO }])
  ).toStrictEqual([]);
});
