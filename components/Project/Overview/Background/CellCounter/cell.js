import { shuffle } from '@/utils/knuthShuffle/index';
import { CellTypes } from '@/config/cell';
import { cellFactory } from '@/utils/cellFactory';

const xsScreenCellBlueprints = [
  { numberOfCells: 10, type: CellTypes.A },
  { numberOfCells: 5, type: CellTypes.B },
  { numberOfCells: 3, type: CellTypes.C },
  { numberOfCells: 15, type: CellTypes.primaryCell },
];

export const xsScreenCells = shuffle(cellFactory(xsScreenCellBlueprints));

const lgScreenCellBlueprints = [
  { numberOfCells: 15, type: CellTypes.A },
  { numberOfCells: 9, type: CellTypes.B },
  { numberOfCells: 5, type: CellTypes.C },
  { numberOfCells: 27, type: CellTypes.primaryCell },
];

export const lgScreenCells = shuffle(cellFactory(lgScreenCellBlueprints));
