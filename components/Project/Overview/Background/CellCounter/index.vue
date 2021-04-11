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
      class="bg-white"
    >
      <P5Cells
        :cells="cellsToShow"
        :cell-display-state="
          cellDisplayState
            ? cellDisplayState
            : active
            ? CellDisplayState.RESULT
            : CellDisplayState.START
        "
        class="w-full h-full"
      />
    </div>
  </client-only>
</template>

<script>
import Vue from 'vue';
import { CellDisplayState } from '@/utils/p5/cell/index';
import { ObserveVisibility } from 'vue-observe-visibility';
import P5Cells from '@/components/P5/Cells/index.vue';
import { xsScreenCells, lgScreenCells } from './screenCells';

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
    cellDisplayState: {
      type: String,
      default: null,
      validate: (displayState) =>
        Object.values(CellDisplayState).includes(displayState),
    },
  },
  data() {
    return {
      CellDisplayState,
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
