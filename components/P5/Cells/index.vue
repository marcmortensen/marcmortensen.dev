<template>
  <vue-p5
    class="flex justify-center"
    :additional-events="['windowresized']"
    @setup.once="setup"
    @draw="draw"
    @windowresized="windowResized"
  >
  </vue-p5>
</template>

<script>
import { primaryCellColor } from '@/config/cell';
import { headerHeight } from '@/components/TheHeader/height';
export default {
  components: {
    'vue-p5': () => (process.client ? import('vue-p5') : null),
  },
  props: {
    cells: {
      type: Array,
      mandatory: false,
      default: () => [],
    },
    active: {
      type: Boolean,
      mandatory: true,
      default: () => false,
    },
  },
  data() {
    return {
      particleSystem: [],
      maxCellSize: this.cells.reduce(function (acc, obj) {
        return acc > obj.size ? acc : obj.size;
      }, 0),
    };
  },
  methods: {
    setup(sketch) {
      class Cell {
        constructor({ size, color }, maxCellSize) {
          this.xPosition = sketch.random(
            maxCellSize,
            sketch.windowWidth - maxCellSize
          );
          this.yPosition = sketch.random(
            maxCellSize,
            sketch.windowHeight - headerHeight - maxCellSize
          );
          this.speed = sketch.createVector(
            sketch.random(-1, 1),
            sketch.random(-1, 1)
          );
          this.size = size;
          this.color = color;
        }

        motion() {
          this.xPosition = this.xPosition + this.speed.x;
          this.yPosition = this.yPosition + this.speed.y;
        }

        display() {
          sketch.noStroke();
          sketch.fill(this.color);
          sketch.circle(this.xPosition, this.yPosition, this.size);
        }

        checkEdge() {
          if (
            this.xPosition + this.size / 2 > sketch.windowWidth ||
            this.xPosition - this.size / 2 < 0
          ) {
            this.speed.x = -1 * this.speed.x;
          }
          if (
            this.yPosition + this.size / 2 >
              sketch.windowHeight - headerHeight ||
            this.yPosition - this.size / 2 < 0
          ) {
            this.speed.y = -1 * this.speed.y;
          }
        }
      }

      this.particleSystem = this.cells.map(
        (cellProps) => new Cell(cellProps, this.maxCellSize)
      );
      sketch.createCanvas(sketch.windowWidth, sketch.windowHeight);
    },
    draw(sketch) {
      sketch.background(220);
      let cellIndex = 1;
      for (let i = 0; i < this.particleSystem.length; i++) {
        this.particleSystem[i].motion();
        if (!this.active || this.particleSystem[i].color === primaryCellColor) {
          this.particleSystem[i].display();
          if (
            this.active &&
            this.particleSystem[i].color === primaryCellColor
          ) {
            sketch.noStroke();
            sketch.fill(255);
            sketch.textAlign(sketch.CENTER, sketch.CENTER);
            sketch.text(
              cellIndex,
              this.particleSystem[i].xPosition,
              this.particleSystem[i].yPosition
            );
            cellIndex++;
          }
        }
        this.particleSystem[i].checkEdge();
      }
    },
    windowResized(sketch) {
      for (let i = 0; i < this.particleSystem.length; i++) {
        this.particleSystem[i].xPosition = sketch.random(
          this.maxCellSize,
          sketch.windowWidth - this.maxCellSize
        );
        this.particleSystem[i].yPosition = sketch.random(
          this.maxCellSize,
          sketch.windowHeight - headerHeight - this.maxCellSize
        );
      }
      sketch.resizeCanvas(sketch.windowWidth, sketch.windowHeight);
    },
  },
};
</script>
