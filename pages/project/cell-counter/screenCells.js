import { CellTypes } from '@/config/cell';
import { cellFactory } from '@/utils/cellFactory';

const lgScreenCellsBlueprints = [
  { numberOfCells: 10, type: CellTypes.A },
  { numberOfCells: 50, type: CellTypes.B },
  { numberOfCells: 39, type: CellTypes.C },
  { numberOfCells: 70, type: CellTypes.D },
];

export const lgScreenCells = cellFactory(lgScreenCellsBlueprints);
