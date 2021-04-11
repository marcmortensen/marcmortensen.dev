<template>
  <div>
    <div class="min-h-screen-height-header bg-white relative">
      <div
        class="h-screen-height-header w-full sm:flex sm:justify-center sm:pb-20 sm:items-center"
      >
        <AppScrollMark class="bottom-10 left-5 text-white sm:text-black" />
        <div
          class="w-3/4 sm:w-full flex justify-start sm:justify-center absolute text-white sm:text-black bottom-0 sm:bottom-10 right-0 text-45 sm:text-65"
        >
          Marc Mortensen
        </div>
        <img
          alt="Marc Mortensen"
          src="~/assets/img/me_bridge.jpg"
          class="object-fill w-full h-full rounded-none sm:rounded-full sm:h-128 sm:w-128 lg:h-3/4 lg:w-1/3 sm:object-cover"
        />
      </div>
    </div>
    <div
      v-for="project in projects"
      :key="project.id"
      class="h-screen-height-header p-10"
    >
      <ProjectOverview
        class="w-full h-full"
        :project="displayProject(project)"
      />
    </div>
  </div>
</template>

<script>
import AppScrollMark from '@/components/AppScrollMark/index';
import { projects } from '~/utils/projectsOverview';

export default {
  components: {
    AppScrollMark,
  },
  data() {
    return {
      projects,
    };
  },
  methods: {
    displayProject(project) {
      return {
        ...project,
        title: project.title.toUpperCase(),
      };
    },
  },
};
</script>
