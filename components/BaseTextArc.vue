<template>
  <div>
    <vue-arc-text
      ref="arctext"
      :text="text"
      :arc="arc"
      :direction="direction"
      :class="className"
    ></vue-arc-text>
  </div>
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
      default: 150,
    },
    direction: {
      type: Number,
      default: 1,
    },
  },
};
</script>
<style></style>
