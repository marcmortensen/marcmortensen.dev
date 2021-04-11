<template>
  <div ref="container" class="overflow-y-scroll h-screen w-screen max-w-full">
    <TheHeader :class="!isAtTop ? 'z-40' : 'hidden'" />
    <main class="w-full min-h-screen relative">
      <Nuxt :class="!isAtTop ? '-top-13 absolute' : 'top-0 absolute'" />
    </main>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader/index.vue';
import { projects } from '@/utils/projectsOverview';
export default {
  components: {
    TheHeader,
  },
  data() {
    return {
      isAtTop: true,
      isAtBottom: false,
      wasAtTop: undefined,
      wasAtBottom: undefined,
      ongoingWheel: false,
      ongoingWheelTimeout: undefined,
    };
  },
  computed: {
    currentProjectIndex() {
      return this.$store.getters['lastProjectSeen/getIndex'];
    },
    previousProject() {
      return projects[this.currentProjectIndex];
    },
    nextProject() {
      return this.currentProjectIndex < projects.length - 1
        ? projects[this.currentProjectIndex + 1]
        : projects[0];
    },
    isLastProject() {
      return this.currentProjectIndex === projects.length - 1;
    },
    isFirstProject() {
      return this.currentProjectIndex === 0;
    },
  },
  mounted() {
    this.$refs.container.addEventListener('scroll', this.handleScroll, {
      passive: true,
    });
    this.$refs.container.addEventListener('wheel', this.handleWheel, {
      passive: true,
    });
    this.handleScroll();
  },
  beforeDestroy() {
    this.$refs.container.removeEventListener('scroll', this.handleScroll);
    this.$refs.container.removeEventListener('wheel', this.handleWheel);
  },
  methods: {
    onTouchStart() {
      this.wasAtTop = this.getIsAtTop();
      this.wasAtBottom = this.getIsAtBottom();
    },
    onSwipeTop() {
      this.handleScroll();
      if (this.isAtBottom && this.wasAtBottom) {
        this.navigateToNextProject();
      }
    },
    onSwipeBottom() {
      this.handleScroll();
      if (this.isAtTop && this.wasAtTop) {
        this.navigateToPreviousProject();
      }
    },
    navigateToNextProject() {
      if (this.nextProject) {
        this.$router.push({
          name: 'project-overview',
          query: { project: this.nextProject.id },
        });
      }
    },
    navigateToPreviousProject() {
      if (this.previousProject) {
        this.$router.push({
          name: 'project-overview',
          query: { project: this.previousProject.id },
        });
      }
    },
    getIsAtTop() {
      return this.$refs.container.scrollTop === 0;
    },
    getIsAtBottom() {
      return (
        Math.ceil(this.$refs.container.scrollTop) +
          this.$refs.container.offsetHeight >=
        this.$refs.container.scrollHeight
      );
    },
    handleScroll() {
      const isAtTop = this.getIsAtTop();
      if (isAtTop && !this.isAtTop) {
        this.isAtTop = true;
        this.showHeader = false;
        this.$store.commit('isAtTop/setIsAtTop', true);
      } else if (!isAtTop && this.isAtTop) {
        this.isAtTop = false;
        this.$store.commit('isAtTop/setIsAtTop', false);
        this.showHeader = true;
      }
      const isAtBottom = this.getIsAtBottom();
      if (isAtBottom && !this.isAtBottom) {
        this.isAtBottom = true;
      } else if (!isAtBottom && this.isAtBottom) {
        this.isAtBottom = false;
      }
    },
    preventMultipleWheelEvents() {
      if (this.ongoingWheelTimeout !== undefined) {
        clearTimeout(this.ongoingWheelTimeout);
      }
      this.ongoingWheelTimeout = setTimeout(() => {
        this.ongoingWheel = false;
      }, 600);
    },
    handleWheel(event) {
      this.handleScroll();
      if (event.ctrlKey || (event.deltaY < 30 && event.deltaY > -30)) {
        return;
      }
      this.preventMultipleWheelEvents();
      if (this.ongoingWheel) {
        return;
      } else {
        this.ongoingWheel = true;
      }
      if (event.deltaY < 0 && this.previousProject && this.isAtTop) {
        this.$router.push({
          name: 'project-overview',
          query: { project: this.previousProject.id },
        });
      } else if (event.deltaY > 0 && this.nextProject && this.isAtBottom) {
        this.$router.push({
          name: 'project-overview',
          query: { project: this.nextProject.id },
        });
      }
    },
  },
};
</script>
