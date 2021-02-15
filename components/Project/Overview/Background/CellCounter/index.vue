<template>
  <div :class="active ? 'bg-red' : 'bg-primary'"></div>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style>
.project-background-scale {
  transform: scale(1.2);
  transform-origin: top center;
}
</style>
