<template>
  <div class="h-screen-height-header">
    <VueSlickCarousel
      ref="projectsOverviewCarusel"
      v-bind="sliderOptions"
      :initial-slide="currentProjectPosition"
      class="h-full"
      @afterChange="afterChange"
      @wheel.native="handleScroll"
    >
      <div v-for="(project, index) in projects" :key="index" class="w-full">
        <ProjectOverview class="h-full" :project="displayProject(project)" />
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import ProjectOverview from '@/components/Project/Overview';
import { projects, DEFAULT_PROJECT_ID } from '@/utils/projects';
import { sliderOptions } from '@/utils/projectOverview';
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';

export default {
  components: {
    ProjectOverview,
    VueSlickCarousel,
  },
  data() {
    return {
      projects,
      sliderOptions,
    };
  },
  computed: {
    currentProject: {
      get() {
        return this.$route.query.project;
      },
      set(project) {
        this.$router.push({
          ...this.$route,
          query: { project },
        });
      },
    },

    currentProjectPosition() {
      return projects.findIndex(
        (project) => project.id === this.currentProject
      );
    },
  },
  middleware({ store, route, redirect, next }) {
    store.commit('page/setName', 'project-overview');
    if (route.query.project) {
      return;
    }
    const initialProject =
      store.getters['project/getName'] || DEFAULT_PROJECT_ID;
    redirect({ ...route, query: { project: initialProject } });
  },
  watch: {
    currentProject: {
      immediate: true,
      handler(project) {
        this.$store.commit('project/setName', project);
      },
    },
  },
  methods: {
    displayProject(project) {
      return {
        ...project,
        title: project.title.toUpperCase(),
      };
    },
    afterChange(nextProjectIndex) {
      this.currentProject = projects[nextProjectIndex].id;
    },
    handleScroll($event) {
      if ($event.deltaY > 0) {
        return this.$refs.projectsOverviewCarusel.next();
      }
      return this.$refs.projectsOverviewCarusel.prev();
    },
  },
};
</script>

<style>
.slick-list,
.slick-track {
  height: 100%;
}

.slick-slide,
.slick-slider .slick-track,
.slick-slider .slick-list {
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  -o-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);

  -webkit-transform: translateZ(0);
  -moz-transform: translateZ(0);
  -ms-transform: translateZ(0);
  -o-transform: translateZ(0);
  transform: translateZ(0);

  -webkit-perspective: 1000;
  -moz-perspective: 1000;
  -ms-perspective: 1000;
  perspective: 1000;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -ms-backface-visibility: hidden;
  backface-visibility: hidden;
}

.slick-slide > div {
  height: inherit;
}
.slick-slide > div > div {
  height: inherit;
}

.slick-next {
  z-index: 1;
  right: 25px !important;
}
.slick-prev {
  z-index: 1;
  left: 25px !important;
}
.slick-dots {
  bottom: 25px;
}
</style>
