<template>
  <div class="relative overflow-hidden">
    <div class="pl-6 absolute top-1/2 max-h-1/2 h-full flex xl:justify-start">
      <NuxtLink
        :to="`/project/${project.id}`"
        class="pb-16 text-50 md:text-100 lg:text-150 max-w-5xl self-end xl:pb-0 z-30"
        @mouseenter.native="active = true"
        @mouseleave.native="active = false"
      >
        {{ project.title }}
      </NuxtLink>
    </div>
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
};
</script>
