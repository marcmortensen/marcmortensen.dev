<template>
  <div
    class="relative overflow-hidden bg-red-900"
    :class="`bg-${project.bg}-900`"
  >
    <base-text-arc
      class="z-10"
      :class="active ? 'text-4xl md:text-6xl' : 'text-3xl md:text-5xl'"
      :text="project.title"
      :arc="active ? 800 : 3000"
      class-name="absolute center-absolute title-cellCounter"
      @mouseOver="mouseOver"
    />
    <Component
      :is="project.background"
      :active="active"
      class="pointer-events-none object-cover h-full w-full"
    />
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      active: false,
    };
  },
  methods: {
    mouseOver(active) {
      this.active = active;
    },
  },
};
</script>
<style>
.center-absolute {
  top: 50%;
  left: 50%;
  transform: translate(-25%, -50%);
}
.title-cellCounter {
  color: white;
}
</style>
