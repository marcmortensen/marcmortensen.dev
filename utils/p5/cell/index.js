import { P5ClassBuilder } from '../index';
import {
  start,
  rgbToGrayscale,
  gaussFilter,
  threshold,
  erode,
  watershed,
  result,
} from './displayState/index';

export const CellDisplayState = {
  START: 'Step 0',
  RBG_GRAYSCALE: 'Step 1',
  GAUSS_FILTER: 'Step 2',
  DYNAMIC_THRESHOLD: 'Step 3',
  ERODE: 'Step 4',
  WATERSHED: 'Step 5',
  RESULT: 'Step 6',
};

export class Cell extends P5ClassBuilder {
  constructor(sketch, dimensions, { size, color, id }, maxCellSize) {
    super(sketch, dimensions);
    this.xPosition = this.sketch.random(maxCellSize, this.width - maxCellSize);
    this.yPosition = this.sketch.random(maxCellSize, this.height - maxCellSize);
    this.speed = this.sketch.createVector(
      this.sketch.random(-1, 1),
      this.sketch.random(-1, 1)
    );
    this.size = size;
    this.color = color;
    this.id = id;
  }

  motion() {
    this.xPosition = this.xPosition + this.speed.x;
    this.yPosition = this.yPosition + this.speed.y;
  }

  display(cellDisplayState = CellDisplayState.START) {
    switch (cellDisplayState) {
      case CellDisplayState.START:
        start(this);
        break;
      case CellDisplayState.RBG_GRAYSCALE:
        rgbToGrayscale(this);
        break;
      case CellDisplayState.GAUSS_FILTER:
        gaussFilter(this);
        break;
      case CellDisplayState.DYNAMIC_THRESHOLD:
        threshold(this);
        break;
      case CellDisplayState.ERODE:
        erode(this);
        break;
      case CellDisplayState.WATERSHED:
        watershed(this);
        break;
      case CellDisplayState.RESULT:
        result(this);
        break;
      default:
        throw new Error('Unknow type of CellDisplayState');
    }
  }

  checkEdge() {
    const half = this.size / 2;
    if (this.xPosition + half > this.width || this.xPosition - half < 0) {
      this.speed.x = -1 * this.speed.x;
    }
    if (this.yPosition + half > this.height || this.yPosition - half < 0) {
      this.speed.y = -1 * this.speed.y;
    }
  }
}
