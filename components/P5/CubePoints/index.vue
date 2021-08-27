<template>
  <div ref="cloudOfPoints">
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
import {
  CubeCloudPointsState,
  CubeCloudPoints,
} from '@/utils/p5/cubeCloudPoints/index';

export default {
  components: {
    'vue-p5': () => (process.client ? import('vue-p5') : null),
  },
  props: {
    numSpheres: {
      type: Number,
      mandatory: true,
      default: () => 300,
    },
    cubeSize: {
      type: Number,
      mandatory: true,
      default: () => 250,
    },
    cubeDisplayState: {
      type: String,
      default: CubeCloudPointsState.START,
      validate: (displayState) =>
        Object.values(CubeCloudPointsState).includes(displayState),
    },
  },
  data() {
    return {
      cube: null,
      CubeCloudPointsState,
    };
  },
  computed: {
    width() {
      return this.$refs.cloudOfPoints.clientWidth;
    },
    height() {
      return this.$refs.cloudOfPoints.clientHeight;
    },
  },
  methods: {
    setup(sketch) {
      sketch.createCanvas(this.width, this.height, sketch.WEBGL);
      sketch.background(255);
      const camera = sketch.createCamera();
      this.cube = new CubeCloudPoints(
        sketch,
        { width: this.width, height: this.height },
        this.numSpheres,
        this.cubeSize,
        camera
      );
    },
    draw(sketch) {
      sketch.background(255, 255, 255);
      this.cube.display(this.cubeDisplayState);
    },
    windowResized(sketch) {
      sketch.resizeCanvas(this.width, this.height);
    },
  },
};
</script>
