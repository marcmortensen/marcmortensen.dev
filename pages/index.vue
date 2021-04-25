<template>
  <div ref="container">
    <div id="intro" class="min-h-screen-height-header bg-white relative">
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
      :id="project.id"
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
import ProjectOverview from '@/components/Project/Overview/index.vue';
import { projects, scrollToOptions } from '~/utils/projectsOverview';

export default {
  components: {
    AppScrollMark,
    ProjectOverview,
  },
  data() {
    return {
      projects,
      sections: [...[{ id: 'intro' }], ...projects],
      sectionIndex: null,
      ongoingWheel: false,
      ongoingWheelTimeout: undefined,
      hasPurgedPreviousWheel: false,
    };
  },
  computed: {
    currentSectionId: {
      get() {
        return this.$route.query.section;
      },
      set(sectionId) {
        this.$router.push({
          ...this.$route,
          query: { section: sectionId },
        });
      },
    },
    previousSection() {
      return this.isFirstSection
        ? this.sections[this.sections.length - 1]
        : this.sections[this.sectionIndex - 1];
    },
    nextSection() {
      return this.isLastSection
        ? this.sections[0]
        : this.sections[this.sectionIndex + 1];
    },
    isLastSection() {
      return this.sectionIndex === this.sections.length - 1;
    },
    isFirstSection() {
      return this.sectionIndex === 0;
    },
  },
  watch: {
    currentSectionId: {
      immediate: true,
      handler(section) {
        const projectIndex = projects.findIndex(
          (_project) => _project.id === section
        );
        if (projectIndex > 0) {
          this.$store.commit('lastProjectSeen/setIndex', projectIndex);
        }
      },
    },
  },
  mounted() {
    this.$refs.container.addEventListener('wheel', this.handleWheel, {
      passive: true,
    });
    this.$scrollTo(`#${this.currentSectionId}`, 300, scrollToOptions);
    setTimeout(() => {
      this.hasPurgedPreviousWheel = true;
    }, 100);
  },
  beforeDestroy() {
    this.$refs.container.removeEventListener('wheel', this.handleWheel);
  },
  created() {
    this.sectionIndex = this.sections.findIndex(
      (section) => section.id === this.currentSectionId
    );
  },
  middleware({ store, route, redirect, next }) {
    store.commit('page/setName', '/');
    if (route.query.section) {
      return;
    }

    const lastSeenProjectId =
      store.getters['lastProjectSeen/getIndex'] !== -1
        ? projects[store.getters['lastProjectSeen/getIndex']].id
        : null;

    const initialSection = lastSeenProjectId || 'intro';
    redirect({ ...route, query: { section: initialSection } });
  },
  methods: {
    displayProject(project) {
      return {
        ...project,
        title: project.title.toUpperCase(),
      };
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
        this.sectionIndex = this.sections.findIndex(
          (section) => section.id === this.previousSection.id
        );
        this.currentSectionId = this.sections[this.sectionIndex].id;
        this.$scrollTo(
          `#${this.sections[this.sectionIndex].id}`,
          300,
          scrollToOptions
        );
      } else if (event.deltaY > 0 && this.hasPurgedPreviousWheel) {
        this.sectionIndex = this.sections.findIndex(
          (section) => section.id === this.nextSection.id
        );
        this.currentSectionId = this.sections[this.sectionIndex].id;
        this.$scrollTo(
          `#${this.sections[this.sectionIndex].id}`,
          300,
          scrollToOptions
        );
      }
    },
  },
};
</script>
