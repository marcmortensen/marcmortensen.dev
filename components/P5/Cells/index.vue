<template>
  <div ref="containerxxxxx">
    <vue-p5
      class="flex justify-center"
      :additional-events="['windowresized']"
      @setup.once="setup"
      @draw="draw"
      @windowresized="windowResized"
    >
    </vue-p5>
  </div>
</template>

<script>
import { Cell, CellDisplayState } from '@/utils/p5/cell/index';

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
    cellDisplayState: {
      type: String,
      default: CellDisplayState.START,
      validate: (displayState) =>
        Object.values(CellDisplayState).includes(displayState),
    },
  },
  data() {
    return {
      particleSystem: [],
      maxCellSize: this.cells.reduce(function (acc, obj) {
        return acc > obj.size ? acc : obj.size;
      }, 0),
      CellDisplayState,
    };
  },
  computed: {
    width() {
      return this.$refs.containerxxxxx.clientWidth;
    },
    height() {
      return this.$refs.containerxxxxx.clientHeight;
    },
  },
  methods: {
    setup(sketch) {
      this.particleSystem = this.cells.map(
        (cellProps) =>
          new Cell(
            sketch,
            { width: this.width, height: this.height },
            cellProps,
            this.maxCellSize
          )
      );
      sketch.createCanvas(this.width, this.height);
    },
    draw(sketch) {
      sketch.background(220);
      for (let i = 0; i < this.particleSystem.length; i++) {
        this.particleSystem[i].motion();
        this.particleSystem[i].display(this.cellDisplayState);
        this.particleSystem[i].checkEdge();
      }
    },
    windowResized(sketch) {
      for (let i = 0; i < this.particleSystem.length; i++) {
        this.particleSystem[i].xPosition = sketch.random(
          this.maxCellSize,
          this.width - this.maxCellSize
        );
        this.particleSystem[i].yPosition = sketch.random(
          this.maxCellSize,
          this.height - this.maxCellSize
        );
      }
      sketch.resizeCanvas(this.width, this.height);
    },
  },
};
</script>
