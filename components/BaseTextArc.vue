<template>
  <vue-arc-text
    :key="text + arc"
    ref="arctext"
    :text="text"
    :arc="arc"
    :direction="direction"
    :class="className"
    @mouseover.native="mouseOver"
    @mouseleave.native="mouseLeave"
  ></vue-arc-text>
</template>

<script>
import VueArcText from 'vue-arc-text';
export default {
  components: { VueArcText },
  props: {
    text: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      default: '',
    },
    arc: {
      type: Number,
      default: 600,
    },
    direction: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return { hover: false };
  },
  methods: {
    mouseOver() {
      if (this.hover) {
        return;
      }
      this.hover = true;
      this.$emit('mouseOver', this.hover);
    },

    mouseLeave() {
      if (!this.hover) {
        return;
      }
      this.hover = false;
      this.$emit('mouseOver', this.hover);
    },
  },
};
</script>
<style></style>
