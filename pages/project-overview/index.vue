<template>
  <div class="h-screen-height-header">
    <VueSlickCarousel
      ref="projectsOverviewCarusel"
      v-bind="sliderOptions"
      :initial-slide="initialSlide"
      class="h-full"
      @afterChange="afterChange"
      @wheel.native="handleWheel"
    >
      <ProjectOverview
        v-for="project in projects"
        :key="project.id"
        class="w-full h-full"
        :project="displayProject(project)"
      />
    </VueSlickCarousel>
  </div>
</template>

<script>
import ProjectOverview from '@/components/Project/Overview';
import VueSlickCarousel from 'vue-slick-carousel';
import { DEFAULT_PROJECT_ID } from '~/utils/project';
import { sliderOptions, projects } from '~/utils/projectsOverview';
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
      ongoingWheel: false,
      ongoingWheelTimeout: undefined,
      hasPurgedPreviousWheel: false,
      initialSlide: null,
    };
  },
  computed: {
    currentProjectName: {
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
  },
  watch: {
    currentProjectName: {
      immediate: true,
      handler(project) {
        this.$store.commit(
          'lastProjectSeen/setIndex',
          projects.findIndex((_project) => _project.id === project)
        );
      },
    },
  },
  created() {
    this.initialSlide = projects.findIndex(
      (project) => project.id === this.currentProjectName
    );
  },
  middleware({ store, route, redirect, next }) {
    store.commit('page/setName', 'project-overview');
    if (route.query.project) {
      return;
    }

    const lastSeenProjectName =
      store.getters['lastProjectSeen/getIndex'] !== -1
        ? projects[store.getters['lastProjectSeen/getIndex']].id
        : null;

    const initialProject = lastSeenProjectName || DEFAULT_PROJECT_ID;
    redirect({ ...route, query: { project: initialProject } });
  },
  mounted() {
    setTimeout(() => {
      this.hasPurgedPreviousWheel = true;
    }, 100);
  },
  methods: {
    displayProject(project) {
      return {
        ...project,
        title: project.title.toUpperCase(),
      };
    },
    afterChange(nextProjectIndex) {
      this.currentProjectName = projects[nextProjectIndex].id;
    },
    preventMultipleWheelEvents() {
      if (this.ongoingWheelTimeout !== undefined) {
        clearTimeout(this.ongoingWheelTimeout);
      }
      this.ongoingWheelTimeout = setTimeout(() => {
        this.ongoingWheel = false;
      }, 300);
    },

    handleWheel(event) {
      if (
        event.ctrlKey ||
        (event.deltaY < 30 && event.deltaY > -30) ||
        !this.hasPurgedPreviousWheel
      ) {
        return;
      }
      this.preventMultipleWheelEvents();
      if (this.ongoingWheel) {
        return;
      }
      this.ongoingWheel = true;

      if (event.deltaY < 0 && this.hasPurgedPreviousWheel) {
        this.$refs.projectsOverviewCarusel.prev();
      } else if (event.deltaY > 0 && this.hasPurgedPreviousWheel) {
        this.$refs.projectsOverviewCarusel.next();
      }
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
