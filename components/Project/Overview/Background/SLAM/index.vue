<template>
  <client-only>
    <div
      v-observe-visibility="{
        callback: visibilityChanged,
        intersection: {
          threshold: 0.01,
          rootMargin: '0px 0px 0px 0px', //0px 50% 0px 50% (top, right, bottom, left)
        },
      }"
      class="bg-white"
    >
      <P5CubePoints
        v-if="isVisible"
        :num-spheres="50"
        :cube-display-state="
          displayState
            ? displayState
            : active
            ? CubeCloudPointsState.GET_3D_COORDS_FROM_POSE_MATRIX
            : CubeCloudPointsState.START
        "
        class="w-full h-full"
      />
    </div>
  </client-only>
</template>

<script>
import Vue from 'vue';
import { CubeCloudPointsState } from '@/utils/p5/cubeCloudPoints/index';
import { ObserveVisibility } from 'vue-observe-visibility';
import P5CubePoints from '@/components/P5/CubePoints/index.vue';

Vue.directive('observe-visibility', ObserveVisibility);

export default {
  components: {
    P5CubePoints,
  },
  props: {
    active: {
      type: Boolean,
      required: true,
    },
    displayState: {
      type: String,
      default: null,
      validate: (displayState) =>
        Object.values(CubeCloudPointsState).includes(displayState),
    },
  },
  data() {
    return {
      CubeCloudPointsState,
      isVisible: false,
    };
  },
  methods: {
    visibilityChanged(isVisible, entry) {
      this.isVisible = isVisible;
    },
  },
};
</script>
