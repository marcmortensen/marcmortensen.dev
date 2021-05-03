<template>
  <div
    class="relative custom-bar grid grid-cols-1 lg:grid-cols-3 grid-rows-4 lg:grid-rows-2 content-center"
  >
    <Component
      :is="project.background"
      :active="active"
      class="z-20 overflow-hidden pointer-events-none object-cover h-full w-full lg:col-span-2 lg:col-start-2 row-span-3"
    />
    <div
      class="absolute -top-6 right-0 z-20 text-65 text-black text-opacity-10 font-bold"
    >
      {{ project.year }}
    </div>
    <div class="pt-5 row-start-4 lg:row-span-2 lg:row-start-1 lg:col-start-1">
      <div
        class="relative flex flex-col justify-between lg:whitespace-nowrap h-full"
      >
        <div class="z-20 lg:pl-8 xl:pl-20 lg:pt-20">
          <h2 class="text-25 sm:text-40 xl:text-100">
            {{ project.title }}
          </h2>
          <p class="text-15 sm:text-20 xl:text-40">
            {{ project.shortDescription }}
          </p>
        </div>
        <div
          class="flex justify-between lg:justify-center lg:space-x-5 xl:justify-between xl:px-20 z-20"
        >
          <NuxtLink :to="`/project/${project.id}`"
            ><button
              class="bg-primary p-1 w-28 lg:w-32 lg:text-20 rounded-full"
            >
              Project
            </button>
          </NuxtLink>
          <button
            class="bg-primary p-1 w-28 lg:w-32 lg:text-20 rounded-full"
            @click="active = !active"
          >
            Preview
          </button>
        </div>
        <span
          class="absolute lg:relative text-100 bottom-2 right-0 text-opacity-80 md:text-opacity-100 lg:self-center lg:pb-10 text-gray-dark md:text-black"
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
  data() {
    return {
      active: false,
    };
  },
};
</script>

<style scoped>
.custom-bar {
  background-color: white;
  border: 1px solid black;
}

.custom-bar:before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  border: 3px solid white;
  border-radius: 5%;
  width: calc(100% + 4px);
  height: calc(100% + 4px);
}
</style>
