<template>
  <div :class="active ? 'bg-primary' : 'bg-red'"></div>
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
