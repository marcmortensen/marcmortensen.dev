<template functional>
  <div
    class="absolute z-30"
    :class="data.staticClass || ''"
    v-bind="data.attrs"
  >
    <span :class="props.right ? 'pb-2 ml-8' : ''">{{ props.displayText }}</span>
    <div class="bar w-1 h-10 absolute"></div>

    <div class="bar w-1 h-20 absolute -top-6 mt-2 ml-38 transform rotate-90">
      <div class="w-3 h-3 absolute rounded-full -top-13 -ml-1 bg-black"></div>
    </div>
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
    right: {
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
.ml-38 {
  margin-left: 38px;
}

.-top-13 {
  top: -11px;
}
</style>
