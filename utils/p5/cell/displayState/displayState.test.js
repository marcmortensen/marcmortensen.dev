const { Cell } = require('../index');
const {
  start,
  rgbToGrayscale,
  gaussFilter,
  threshold,
  erode,
  watershed,
  result,
} = require('./index');

const MaxCellSize = 1;
const CellSize = 1;
const Height = 10;
const Width = 10;
const Color = '#000000';

let cell;

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const sketch = {
  random: (a, b) => randomIntFromInterval(a, b),
  createVector: (a, b) => ({ x: a, y: b }),
  fill: () => {},
  noStroke: () => {},
  stroke: () => {},
  strokeWeight: () => {},
  textAlign: () => {},
  text: () => {},
  circle: () => Error("I'm painted on the canvas!"),
};

describe('When should we print cells', () => {
  beforeEach(() => {
    cell = new Cell(
      sketch,
      { width: Width, height: Height },
      { id: 1, size: CellSize, color: Color },
      MaxCellSize
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Start display, with > 0 size', () => {
    const paintCell = jest.spyOn(sketch, 'circle');
    paintCell.mockImplementation(() => {});
    start(cell);
    expect(paintCell).toHaveBeenCalledTimes(1);
  });

  test('Start display, with negative size', () => {
    const paintCell = jest.spyOn(sketch, 'circle');
    paintCell.mockImplementation(() => {});
    cell.size = -1;
    start(cell);
    expect(paintCell).toHaveBeenCalledTimes(0);
  });

  test('Start display, with 0 size', () => {
    const paintCell = jest.spyOn(sketch, 'circle');
    paintCell.mockImplementation(() => {});
    cell.size = 0;
    start(cell);
    expect(paintCell).toHaveBeenCalledTimes(0);
  });

  test('rgbToGrayscale display, with > 0 size', () => {
    const paintCell = jest.spyOn(sketch, 'circle');
    paintCell.mockImplementation(() => {});
    rgbToGrayscale(cell);
    expect(paintCell).toHaveBeenCalledTimes(1);
  });

  test('rgbToGrayscale display, with negative size', () => {
    const paintCell = jest.spyOn(sketch, 'circle');
    paintCell.mockImplementation(() => {});
    cell.size = -1;
    rgbToGrayscale(cell);
    expect(paintCell).toHaveBeenCalledTimes(0);
  });

  test('rgbToGrayscale display, with 0 size', () => {
    const paintCell = jest.spyOn(sketch, 'circle');
    paintCell.mockImplementation(() => {});
    cell.size = 0;
    rgbToGrayscale(cell);
    expect(paintCell).toHaveBeenCalledTimes(0);
  });

  test('gaussFilter display, with > 0 size', () => {
    const paintCell = jest.spyOn(sketch, 'circle');
    paintCell.mockImplementation(() => {});
    gaussFilter(cell);
    expect(paintCell).toHaveBeenCalledTimes(0);
    cell.size = 11;
    gaussFilter(cell);
    expect(paintCell).toHaveBeenCalledTimes(1);
  });

  test('gaussFilter display, with negative size', () => {
    const paintCell = jest.spyOn(sketch, 'circle');
    paintCell.mockImplementation(() => {});
    cell.size = -1;
    gaussFilter(cell);
    expect(paintCell).toHaveBeenCalledTimes(0);
  });

  test('gaussFilter display, with 0 size', () => {
    const paintCell = jest.spyOn(sketch, 'circle');
    paintCell.mockImplementation(() => {});
    cell.size = 0;
    gaussFilter(cell);
    expect(paintCell).toHaveBeenCalledTimes(0);
  });

  test('threshold display, with > 0 size', () => {
    const paintCell = jest.spyOn(sketch, 'circle');
    paintCell.mockImplementation(() => {});
    threshold(cell);
    expect(paintCell).toHaveBeenCalledTimes(0);

    cell.size = 11;
    threshold(cell);
    expect(paintCell).toHaveBeenCalledTimes(1);
  });

  test('threshold display, with negative size', () => {
    const paintCell = jest.spyOn(sketch, 'circle');
    paintCell.mockImplementation(() => {});
    cell.size = -1;
    threshold(cell);
    expect(paintCell).toHaveBeenCalledTimes(0);
  });

  test('threshold display, with 0 size', () => {
    const paintCell = jest.spyOn(sketch, 'circle');
    paintCell.mockImplementation(() => {});
    cell.size = 0;
    threshold(cell);
    expect(paintCell).toHaveBeenCalledTimes(0);
  });

  test('erode display, with > 0 size', () => {
    const paintCell = jest.spyOn(sketch, 'circle');
    paintCell.mockImplementation(() => {});
    erode(cell);
    expect(paintCell).toHaveBeenCalledTimes(0);

    cell.size = 11;
    erode(cell);
    expect(paintCell).toHaveBeenCalledTimes(0);

    cell.size = 21;
    erode(cell);
    expect(paintCell).toHaveBeenCalledTimes(1);
  });

  test('erode display, with negative size', () => {
    const paintCell = jest.spyOn(sketch, 'circle');
    paintCell.mockImplementation(() => {});
    cell.size = -1;
    erode(cell);
    expect(paintCell).toHaveBeenCalledTimes(0);
  });

  test('erode display, with 0 size', () => {
    const paintCell = jest.spyOn(sketch, 'circle');
    paintCell.mockImplementation(() => {});
    cell.size = 0;
    erode(cell);
    expect(paintCell).toHaveBeenCalledTimes(0);
  });

  test('watershed display, with > 0 size', () => {
    const paintCell = jest.spyOn(sketch, 'circle');
    paintCell.mockImplementation(() => {});
    watershed(cell);
    expect(paintCell).toHaveBeenCalledTimes(0);

    cell.size = 11;
    watershed(cell);
    expect(paintCell).toHaveBeenCalledTimes(0);

    cell.size = 21;
    watershed(cell);
    expect(paintCell).toHaveBeenCalledTimes(1);
  });

  test('watershed display, with negative size', () => {
    const paintCell = jest.spyOn(sketch, 'circle');
    paintCell.mockImplementation(() => {});
    cell.size = -1;
    watershed(cell);
    expect(paintCell).toHaveBeenCalledTimes(0);
  });

  test('watershed display, with 0 size', () => {
    const paintCell = jest.spyOn(sketch, 'circle');
    paintCell.mockImplementation(() => {});
    cell.size = 0;
    watershed(cell);
    expect(paintCell).toHaveBeenCalledTimes(0);
  });

  test('result display, with > 0 size', () => {
    const paintCell = jest.spyOn(sketch, 'circle');
    paintCell.mockImplementation(() => {});
    result(cell);
    expect(paintCell).toHaveBeenCalledTimes(0);

    cell.size = 11;
    result(cell);
    expect(paintCell).toHaveBeenCalledTimes(0);

    cell.size = 21;
    result(cell);
    expect(paintCell).toHaveBeenCalledTimes(1);
  });

  test('result display, with negative size', () => {
    const paintCell = jest.spyOn(sketch, 'circle');
    paintCell.mockImplementation(() => {});
    cell.size = -1;
    result(cell);
    expect(paintCell).toHaveBeenCalledTimes(0);
  });

  test('result display, with 0 size', () => {
    const paintCell = jest.spyOn(sketch, 'circle');
    paintCell.mockImplementation(() => {});
    cell.size = 0;
    result(cell);
    expect(paintCell).toHaveBeenCalledTimes(0);
  });
});
