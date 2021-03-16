<template>
  <client-only>
    <div
      v-observe-visibility="{
        callback: () => {},
        intersection: {
          threshold: 0.01,
          rootMargin: '0px 0px 0px 0px', //0px 50% 0px 50% (top, right, bottom, left)
        },
      }"
      class="bg-gray-light"
    >
      <P5Cells :cells="cellsToShow" :active="active" class="w-full h-full" />
    </div>
  </client-only>
</template>

<script>
import Vue from 'vue';
import { ObserveVisibility } from 'vue-observe-visibility';
import P5Cells from '@/components/P5/Cells/index.vue';
import { xsScreenCells, lgScreenCells } from './cell';

Vue.directive('observe-visibility', ObserveVisibility);

export default {
  components: {
    P5Cells,
  },
  props: {
    active: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      xsScreenCells,
      lgScreenCells,
    };
  },
  computed: {
    cellsToShow() {
      switch (this.$screen.breakpoint) {
        case 'xs':
          return this.xsScreenCells;
        case 'sm':
          return this.xsScreenCells;
        case 'md':
          return this.xsScreenCells;
        case 'lg':
          return this.lgScreenCells;
        case 'xl':
          return this.lgScreenCells;
        case '2xl':
          return this.lgScreenCells;
        default:
          return this.lgScreenCells;
      }
    },
  },
};
</script>
