const displayState = require('./displayState/index');

const { Cell } = require('./index');
const { CellDisplayState } = require('./index');
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
const sketch = {
  random: (a, b) => randomIntFromInterval(a, b),
  createVector: (a, b) => ({ x: a, y: b }),
};

const MaxCellSize = 1;
const CellSize = 1;
const Height = 10;
const Width = 10;
const Color = '#000000';

let cell;

describe('Cell display and interactions on the canvas', () => {
  beforeEach(() => {
    cell = new Cell(
      sketch,
      { width: Width, height: Height },
      { id: 1, size: CellSize, color: Color },
      MaxCellSize
    );
  });

  test('Cell placement in the canvas', () => {
    expect(cell.color).toBe(Color);
    expect(cell.size).toBe(CellSize);
    expect(cell.width).toBe(Width);
    expect(cell.height).toBe(Height);
    expect(cell.id).toBe(1);
    expect(
      cell.xPosition >= MaxCellSize && cell.xPosition <= Width - MaxCellSize
    ).toBeTruthy();
    expect(
      cell.yPosition >= MaxCellSize && cell.yPosition <= Height - MaxCellSize
    ).toBeTruthy();
    expect(cell.speed.x <= 1 && cell.speed.x >= -1).toBeTruthy();
    expect(cell.speed.y <= 1 && cell.speed.y >= -1).toBeTruthy();
  });

  test('Cell movement in the canvas, both axis', () => {
    cell.xPosition = 8;
    cell.yPosition = 8;
    cell.speed.x = 1;
    cell.speed.y = 1;

    expect(cell.speed.x).toBe(1);
    expect(cell.speed.y).toBe(1);

    cell.motion();
    expect(cell.xPosition).toBe(8 + 1);
    expect(cell.yPosition).toBe(8 + 1);

    cell.checkEdge();
    expect(cell.speed.x).toBe(1);
    expect(cell.speed.y).toBe(1);

    cell.motion();
    expect(cell.xPosition).toBe(9 + 1);
    expect(cell.yPosition).toBe(9 + 1);

    cell.checkEdge();
    expect(cell.speed.x).toBe(-1);
    expect(cell.speed.y).toBe(-1);
  });

  test('Cell movement in the canvas, x axis', () => {
    cell.xPosition = 8;
    cell.yPosition = 0;
    cell.speed.x = 1;
    cell.speed.y = 0.5;

    expect(cell.speed.x).toBe(1);
    expect(cell.speed.y).toBe(0.5);

    cell.motion();
    expect(cell.xPosition).toBe(8 + 1);
    expect(cell.yPosition).toBe(0.5);

    cell.checkEdge();
    expect(cell.speed.x).toBe(1);
    expect(cell.speed.y).toBe(0.5);

    cell.motion();
    expect(cell.xPosition).toBe(9 + 1);
    expect(cell.yPosition).toBe(1);

    cell.checkEdge();
    expect(cell.speed.x).toBe(-1);
    expect(cell.speed.y).toBe(0.5);
  });

  test('Cell movement in the canvas, y axis', () => {
    cell.xPosition = 0;
    cell.yPosition = 8;
    cell.speed.x = 0.5;
    cell.speed.y = 1;

    expect(cell.speed.x).toBe(0.5);
    expect(cell.speed.y).toBe(1);

    cell.motion();
    expect(cell.xPosition).toBe(0.5);
    expect(cell.yPosition).toBe(8 + 1);

    cell.checkEdge();
    expect(cell.speed.x).toBe(0.5);
    expect(cell.speed.y).toBe(1);

    cell.motion();
    expect(cell.xPosition).toBe(1);
    expect(cell.yPosition).toBe(9 + 1);

    cell.checkEdge();
    expect(cell.speed.x).toBe(0.5);
    expect(cell.speed.y).toBe(-1);
  });

  test('Cell display should return error when unkwn cellDisplayType is given', () => {
    expect.assertions(1);
    try {
      cell.display('FOO');
    } catch (e) {
      expect(e.message).toBe('Unknow type of CellDisplayState');
    }
  });

  test('Cell display should call for the corresponding painting method', () => {
    const paintStart = jest.spyOn(displayState, 'start');
    paintStart.mockImplementation(() => {});
    cell.display();
    expect(paintStart).toHaveBeenCalledTimes(1);

    cell.display(CellDisplayState.START);
    expect(paintStart).toHaveBeenCalledTimes(2);

    const paintRgbToGrayscale = jest.spyOn(displayState, 'rgbToGrayscale');
    paintRgbToGrayscale.mockImplementation(() => {});
    cell.display(CellDisplayState.RBG_GRAYSCALE);
    expect(paintRgbToGrayscale).toHaveBeenCalledTimes(1);

    const paintGaussFilter = jest.spyOn(displayState, 'gaussFilter');
    paintGaussFilter.mockImplementation(() => {});
    cell.display(CellDisplayState.GAUSS_FILTER);
    expect(paintGaussFilter).toHaveBeenCalledTimes(1);

    const paintThreshold = jest.spyOn(displayState, 'threshold');
    paintThreshold.mockImplementation(() => {});
    cell.display(CellDisplayState.DYNAMIC_THRESHOLD);
    expect(paintThreshold).toHaveBeenCalledTimes(1);

    const paintErode = jest.spyOn(displayState, 'erode');
    paintErode.mockImplementation(() => {});
    cell.display(CellDisplayState.ERODE);
    expect(paintErode).toHaveBeenCalledTimes(1);

    const paintWatershed = jest.spyOn(displayState, 'watershed');
    paintWatershed.mockImplementation(() => {});
    cell.display(CellDisplayState.WATERSHED);
    expect(paintWatershed).toHaveBeenCalledTimes(1);

    const paintResult = jest.spyOn(displayState, 'result');
    paintResult.mockImplementation(() => {});
    cell.display(CellDisplayState.RESULT);
    expect(paintResult).toHaveBeenCalledTimes(1);
  });
});
