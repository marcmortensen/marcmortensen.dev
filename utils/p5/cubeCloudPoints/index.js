import { P5ClassBuilder } from '../index';
import {
  start,
  featureExtraction,
  featureMatching,
  getPointsCoordsIn3D,
} from './displayState/index';

export const CubeCloudPointsState = {
  START: 'Step 0',
  FEATURE_EXTRACTION: 'Step 1',
  FEATURE_MATCHING: 'Step 2',
  GET_3D_COORDS_FROM_POSE_MATRIX: 'Step 3',
};

export class CubeCloudPoints extends P5ClassBuilder {
  xyz = [];
  camera;
  size;

  constructor(sketch, dimensions, nPoints, cubeSize, camera) {
    super(sketch, dimensions);
    this.camera = camera;
    this.size = cubeSize;

    for (let i = 0; i < nPoints; i++) {
      this.xyz.push({
        x: sketch.random(-cubeSize, cubeSize),
        y: sketch.random(-cubeSize, cubeSize),
        z: sketch.random(-cubeSize, cubeSize),
      });
    }
  }

  display(state = CubeCloudPointsState.START) {
    switch (state) {
      case CubeCloudPointsState.START:
        start(this);
        break;
      case CubeCloudPointsState.FEATURE_EXTRACTION:
        featureExtraction(this);
        break;
      case CubeCloudPointsState.FEATURE_MATCHING:
        featureMatching(this);
        break;
      case CubeCloudPointsState.GET_3D_COORDS_FROM_POSE_MATRIX:
        getPointsCoordsIn3D(this);
        break;
      default:
        throw new Error('Unknow type of CubeCloudPointsState');
    }
  }
}
