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
      class="bg-gray-light"
    >
      <Cell :cells="cellsToShow" :active="active" class="w-full h-full" />
    </div>
  </client-only>
</template>

<script>
import Vue from 'vue';
import { ObserveVisibility } from 'vue-observe-visibility';
import Cell from '@/components/Cell/index.vue';

Vue.directive('observe-visibility', ObserveVisibility);

export default {
  components: {
    Cell,
  },
  props: {
    active: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      cells: [
        { size: 33, color: '#000' },
        { size: 33, color: '#000' },
        { size: 44, color: 'red' },
        { size: 33, color: '#000' },
        { size: 44, color: '#000' },
        { size: 23, color: 'orange' },
        { size: 33, color: '#000' },
        { size: 44, color: 'green' },
        { size: 23, color: 'orange' },
        { size: 33, color: '#000' },
        { size: 44, color: 'red' },
        { size: 33, color: '#000' },
        { size: 44, color: '#000' },
        { size: 23, color: 'orange' },
        { size: 33, color: '#000' },
        { size: 44, color: 'green' },
        { size: 23, color: 'orange' },
        { size: 33, color: '#000' },
        { size: 44, color: 'red' },
        { size: 23, color: 'orange' },
        { size: 33, color: '#000' },
        { size: 44, color: 'red' },
        { size: 23, color: 'orange' },
        { size: 33, color: '#000' },
        { size: 33, color: '#000' },
        { size: 44, color: 'red' },
        { size: 23, color: 'orange' },
        { size: 33, color: '#000' },
        { size: 44, color: '#000' },
        { size: 23, color: 'orange' },
        { size: 33, color: '#000' },
        { size: 44, color: 'green' },
        { size: 23, color: 'orange' },
        { size: 33, color: '#000' },
        { size: 44, color: 'red' },
        { size: 33, color: '#000' },
        { size: 44, color: '#000' },
        { size: 23, color: 'orange' },
        { size: 33, color: '#000' },
        { size: 44, color: 'green' },
        { size: 23, color: 'orange' },
        { size: 33, color: '#000' },
        { size: 44, color: 'red' },
        { size: 33, color: '#000' },
        { size: 44, color: '#000' },
        { size: 23, color: 'orange' },
        { size: 33, color: '#000' },
        { size: 44, color: 'green' },
        { size: 23, color: 'orange' },
        { size: 33, color: '#000' },
        { size: 19, color: 'red' },
        { size: 23, color: 'orange' },
        { size: 33, color: '#000' },
        { size: 44, color: 'red' },
        { size: 23, color: 'orange' },
        { size: 33, color: '#000' },
      ],
      cellsSmallScreen: [
        { size: 23, color: 'orange' },
        { size: 33, color: '#000' },
        { size: 44, color: 'red' },
        { size: 23, color: 'orange' },
        { size: 33, color: '#000' },
        { size: 33, color: '#000' },
        { size: 44, color: 'red' },
        { size: 23, color: 'orange' },
        { size: 33, color: '#000' },
        { size: 44, color: '#000' },
        { size: 23, color: 'orange' },
        { size: 33, color: '#000' },
        { size: 44, color: 'green' },
        { size: 23, color: 'orange' },
        { size: 33, color: '#000' },
        { size: 44, color: 'red' },
        { size: 33, color: '#000' },
        { size: 44, color: '#000' },
        { size: 23, color: 'orange' },
        { size: 33, color: '#000' },
        { size: 44, color: 'green' },
        { size: 23, color: 'orange' },
        { size: 33, color: '#000' },
        { size: 44, color: 'red' },
        { size: 33, color: '#000' },
        { size: 44, color: '#000' },
        { size: 23, color: 'orange' },
        { size: 33, color: '#000' },
        { size: 44, color: 'green' },
        { size: 23, color: 'orange' },
        { size: 33, color: '#000' },
        { size: 19, color: 'red' },
        { size: 23, color: 'orange' },
      ],
    };
  },
  computed: {
    cellsToShow() {
      switch (this.$screen.breakpoint) {
        case 'xs':
          return this.cellsSmallScreen;
        case 'sm':
          return this.cellsSmallScreen;
        case 'md':
          return this.cellsSmallScreen;
        case 'lg':
          return this.cells;
        case 'xl':
          return this.cells;
        case '2xl':
          return this.cells;
        default:
          return this.cells;
      }
    },
  },
  methods: {
    visibilityChanged(isVisible, entry) {},
  },
};
</script>
