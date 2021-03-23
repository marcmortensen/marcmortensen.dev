import { hexColorToGrayScaleHex } from '@/utils/color/index';
import { CellDisplayState } from '@/utils/p5/cell/index';
const GAUSS_FILTER_ERODE = 10;
const ERODE_FILTER = 10;

const isVisible = (size, cellDisplayState) => {
  switch (cellDisplayState) {
    case CellDisplayState.START:
    case CellDisplayState.RBG_GRAYSCALE:
      return size > 0;
    case CellDisplayState.GAUSS_FILTER:
    case CellDisplayState.DYNAMIC_THRESHOLD:
      return size - GAUSS_FILTER_ERODE > 0;
    case CellDisplayState.ERODE:
    case CellDisplayState.WATERSHED:
    case CellDisplayState.RESULT:
      return size - GAUSS_FILTER_ERODE - ERODE_FILTER > 0;
  }
};

export const start = ({ sketch, color, xPosition, yPosition, size }) => {
  if (!isVisible(size, CellDisplayState.START)) {
    return;
  }
  sketch.noStroke();
  sketch.fill(color);
  sketch.circle(xPosition, yPosition, size);
};

export const rgbToGrayscale = ({
  sketch,
  color,
  xPosition,
  yPosition,
  size,
}) => {
  if (!isVisible(size, CellDisplayState.RBG_GRAYSCALE)) {
    return;
  }
  sketch.noStroke();
  sketch.fill(hexColorToGrayScaleHex(color));
  sketch.circle(xPosition, yPosition, size);
};

export const gaussFilter = ({ sketch, color, xPosition, yPosition, size }) => {
  if (!isVisible(size, CellDisplayState.GAUSS_FILTER)) {
    return;
  }
  sketch.noStroke();
  sketch.fill(hexColorToGrayScaleHex(color));
  sketch.circle(xPosition, yPosition, size - GAUSS_FILTER_ERODE);
};

export const threshold = ({ sketch, xPosition, yPosition, size }) => {
  if (!isVisible(size, CellDisplayState.DYNAMIC_THRESHOLD)) {
    return;
  }
  sketch.noStroke();
  sketch.fill('#ffffff');
  sketch.circle(xPosition, yPosition, size - GAUSS_FILTER_ERODE);
};

export const erode = ({ sketch, xPosition, yPosition, size }) => {
  if (!isVisible(size, CellDisplayState.ERODE)) {
    return;
  }
  sketch.noStroke();
  sketch.fill('#ffffff');
  sketch.circle(xPosition, yPosition, size - GAUSS_FILTER_ERODE - ERODE_FILTER);
};

export const watershed = ({ sketch, xPosition, yPosition, size }) => {
  if (!isVisible(size, CellDisplayState.WATERSHED)) {
    return;
  }
  sketch.strokeWeight(1);
  sketch.stroke(0);
  sketch.fill('#ffffff');
  sketch.circle(xPosition, yPosition, size - GAUSS_FILTER_ERODE - ERODE_FILTER);
};

export const result = ({ sketch, id, xPosition, yPosition, size }) => {
  if (!isVisible(size, CellDisplayState.RESULT)) {
    return;
  }
  sketch.strokeWeight(1);
  sketch.stroke(0);
  sketch.fill(255);
  sketch.circle(xPosition, yPosition, size - GAUSS_FILTER_ERODE - ERODE_FILTER);

  sketch.noStroke();
  sketch.fill(255, 0, 0);
  sketch.textAlign(sketch.CENTER, sketch.CENTER);
  sketch.text(id, xPosition, yPosition);
};
