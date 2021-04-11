<template>
  <div
    class="grid grid-cols-1 lg:grid-cols-2 grid-rows-4 lg:grid-rows-2 content-center"
  >
    <Component
      :is="project.background"
      :active="false"
      class="z-20 overflow-hidden pointer-events-none object-cover h-full w-full lg:col-span-2 lg:col-start-2 row-span-3"
    />
    <div class="pt-5 row-start-4 lg:row-span-2 lg:row-start-1 lg:col-start-1">
      <div
        class="relative flex flex-col justify-around lg:whitespace-nowrap h-full items-center"
      >
        <div class="z-20 lg:pt-32">
          <h2 class="text-25 sm:text-40 xl:text-100">
            {{ project.title }}
          </h2>
          <p class="text-15 sm:text-20 xl:text-40">
            {{ project.shortDescription }}
          </p>
        </div>
        <span
          class="absolute lg:relative text-100 bottom-2 right-0 text-opacity-10 lg:text-opacity-100 lg:self-center text-black lg:bg-primary lg:rounded-full lg:w-40 lg:h-40 text-center"
          >{{ `0${project.index + 1}` }}</span
        >
      </div>
    </div>
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
};
</script>
