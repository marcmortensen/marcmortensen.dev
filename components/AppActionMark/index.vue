<template functional>
  <div
    class="absolute z-30"
    :class="data.staticClass || ''"
    v-bind="data.attrs"
  >
    <span class="vertical" :class="props.downwards ? 'pb-2' : 'pt-12'">{{
      props.displayText
    }}</span>
    <div
      :class="props.downwards ? '' : 'top-0'"
      class="bar w-1 h-10 absolute"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    displayText: {
      type: String,
      mandatory: true,
      default: 'RETURN',
    },
    downwards: {
      type: Boolean,
      mandatory: false,
      default: true,
    },
  },
};
</script>

<style scoped>
.vertical {
  writing-mode: vertical-rl;
}
.bar {
  content: '';
  left: 9px;
  background-color: currentColor;
}
</style>
