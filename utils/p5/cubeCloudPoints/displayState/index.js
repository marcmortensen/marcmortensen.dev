const SPEED_SLOW = 0.005;
const SPEED_NORMAL = 0.01;

const HIDE_FEATURE_FACTOR = 4;

const cameraMovement = (sketch, camera) => {
  camera.lookAt(100, 0, 0);
  camera.setPosition(sketch.sin(sketch.frameCount / 60) * 100, 500, 100);
  sketch.rotateY(sketch.frameCount * SPEED_SLOW);
};

export const start = ({ sketch, camera, xyz, size }) => {
  cameraMovement(sketch, camera);

  for (const point of xyz) {
    sketch.push();
    sketch.stroke(90);
    sketch.strokeWeight(1);
    sketch.line(point.x, -size, point.z, point.x, point.y, point.z);
    sketch.translate(point.x, point.y, point.z);

    sketch.fill(sketch.color(255, 204, 0));
    sketch.noStroke();
    sketch.sphere(size / 50, 8);
    sketch.pop();
  }
};

export const featureExtraction = ({ sketch, camera, xyz, size }) => {
  cameraMovement(sketch, camera);

  for (const point of xyz) {
    sketch.push();
    sketch.translate(point.x, point.y, point.z);

    sketch.fill(sketch.color(255, 204, 0));
    sketch.noStroke();
    sketch.sphere(size / 50, 8);
    sketch.pop();
  }
};

export const featureMatching = ({ sketch, camera, xyz, size }) => {
  cameraMovement(sketch, camera);

  for (const [i, point] of xyz.entries()) {
    if (i % HIDE_FEATURE_FACTOR !== 0) {
      sketch.push();
      sketch.translate(point.x, point.y, point.z);

      sketch.fill(sketch.color(255, 204, 0));
      sketch.noStroke();
      sketch.stroke('red');
      sketch.sphere(size / 50, 8);
      sketch.pop();
    }
  }
};

export const getPointsCoordsIn3D = ({ sketch, xyz, size, camera }) => {
  camera.setPosition(0, 0, 750);
  camera.lookAt(0, 0, 0);
  sketch.rotateY(sketch.frameCount * SPEED_NORMAL);

  sketch.stroke(0);
  // front
  sketch.line(-size, -size, size, size, -size, size);
  sketch.line(-size, size, size, size, size, size);
  sketch.line(-size, -size, size, -size, size, size);
  sketch.line(size, -size, size, size, size, size);

  // back
  sketch.line(-size, -size, -size, size, -size, -size);
  sketch.line(-size, size, -size, size, size, -size);
  sketch.line(-size, -size, -size, -size, size, -size);
  sketch.line(size, -size, -size, size, size, -size);

  // left top
  sketch.line(-size, -size, size, -size, -size, -size);
  // left bottom
  sketch.line(-size, size, -size, -size, size, size);
  // right top
  sketch.line(size, -size, size, size, -size, -size);
  // right bottom
  sketch.line(size, size, -size, size, size, size);

  for (const [i, point] of xyz.entries()) {
    if (i % HIDE_FEATURE_FACTOR !== 0) {
      sketch.push();
      sketch.translate(point.x, point.y, point.z);
      sketch.sphere(size / 50, 8);
      sketch.pop();
    }
  }
};
