/**
 * Abstract Class P5ClassBuilder.
 *
 * @class P5ClassBuilder
 */

export class P5ClassBuilder {
  constructor(sketch, { width, height }) {
    if (this.constructor === P5ClassBuilder) {
      throw new Error("Abstract classes can't be instantiated.");
    }
    this.sketch = sketch;
    this.width = width;
    this.height = height;
  }
}
