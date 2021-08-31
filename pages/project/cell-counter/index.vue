<template>
  <div class="">
    <div
      class="grid grid-cols-1 lg:grid-cols-2 grid-rows-2 lg:grid-rows-2 content-center min-h-screen relative"
    >
      <div
        id="start-project"
        class="order-2 w-full overflow-x-hidden lg:row-span-2 h-3/4 lg:h-full fixed lg:block lg:relative overflow-y-scroll lg:overflow-y-hidden lg:top-0"
        :class="
          !hasScrolledPastFristPage
            ? 'z-40 top-0'
            : showInPagePreview
            ? 'z-50 -top-1/2 mt-13'
            : 'z-20 bg-white absolute'
        "
      >
        <Component
          :is="project.background"
          :active="false"
          :cell-display-state="currentCellDisplayState"
          :observe-visibility="false"
          class="w-full h-full"
        />
        <div
          :class="
            !showInPagePreview ||
            (showInPagePreview && !hasScrolledPastFristPage)
              ? 'hidden'
              : ''
          "
          class="w-10 h-10 bottom-0 absolute z-50 lg:hidden cursor-pointer"
          @click="showInPagePreview = !showInPagePreview"
        >
          <AppIcon
            class="w-10 h-10 text-black bg-white p-2 rounded-full border"
          >
            <IconClose class="w-8 h-8" />
          </AppIcon>
        </div>
        <div
          :class="
            !showInPagePreview ||
            (showInPagePreview && !hasScrolledPastFristPage)
              ? 'hidden'
              : ''
          "
          class="w-30 h-1/3 bottom-0 right-0 vertical absolute z-50 text-center lg:hidden"
        >
          <p class="text-40 text-opacity-30 text-black bg-white bg-opacity-90">
            {{ currentCellDisplayState }}
          </p>
        </div>
      </div>
      <div
        class="z-40 lg:z-50 row-start-4 lg:row-span-2 lg:row-start-1 lg:col-start-1"
      >
        <div
          class="relative flex flex-col justify-around lg:whitespace-nowrap h-screen items-center"
        >
          <div class="absolute bottom-16 left-16 z-20 lg:pt-32 lg:relative">
            <h2 class="text-25 sm:text-40 xl:text-100">
              {{ project.title }}
            </h2>
            <p class="text-15 sm:text-20 xl:text-40">
              {{ project.shortDescription }}
            </p>
          </div>
          <span
            class="absolute lg:relative text-100 lg:text-65 xl:text-100 bottom-2 right-0 text-opacity-10 md:text-opacity-100 lg:self-center text-black lg:text-white lg:bg-primary lg:rounded-full lg:w-28 lg:h-28 xl:w-40 xl:h-40 text-center"
            >{{ `0${project.index + 1}` }}</span
          >
          <AppLink to="/">
            <AppScrollMark
              class="top-0 left-5 text-black z-40 hover:text-primary"
              :downwards="false"
              display-text="RETURN"
            />
          </AppLink>
          <AppScrollMark class="bottom-10 left-5 text-black" />
        </div>
        <div>
          <div
            class="min-screen-height-header-extra lg:min-h-screen-height-header flex flex-col p-5 justify-end"
          >
            <div class="w-full h-full">
              <ProjectIntro
                :title="project.title"
                :technologies="project.technologies"
              />
              <div class="text-20 space-y-4">
                <p>
                  This open source project is designed to help researchers
                  automate computer vision tasks; it’s built to reduce as much
                  groundwork as possible so they can focus on their tasks. To
                  explain it simply Cell-Counter is a generic project that wraps
                  computer vision utilities and lets you use them as you see fit
                  in already existing algorithms or new ones, its free to use
                  and easy to expand upon.
                </p>
                <p>
                  As for the specifics Cell-Counter is built on top of a very
                  known library ImageJ. This library lacks some practical
                  features such as apply an algorithm to multiple files, so the
                  idea is using all the potential in ImageJ but still be
                  flexible. Cell-Counter can be used to integrate computer
                  vision into any workflow or to simply obtain local results,
                  the core is designed to be extensible, flexible and it's fully
                  tested for better maintainability.
                </p>
                <p>
                  To illustrate how it can be used the first algorithm published
                  was the Cell-Counter algorithm that lets you count cells given
                  a folder and some configurations, the output of the execution
                  is a CVS file with all the data of the cells on each image,
                  and an output image. Up next you will see each one of the
                  steps taken by the algorithm:
                </p>
              </div>
            </div>
          </div>
          <div
            class="min-h-screen flex justify-center align-middle text-center items-center"
          >
            <div class="text-20 space-y-2 px-5">
              <ul
                class="text-30 sm:text-40 md:text-50 lg:text-40 xl:text-50 space-y-7"
              >
                <li
                  v-for="algorithmStep in algorithmSteps"
                  :key="algorithmStep.step"
                  class="hover:text-primary cursor-pointer"
                  :class="
                    currentCellDisplayState === algorithmStep.step
                      ? 'text-primary'
                      : ''
                  "
                  @click="changeCellDisplayState(algorithmStep.step)"
                >
                  {{ algorithmStep.label }}
                </li>
              </ul>
            </div>
          </div>
          <div class="text-20 space-y-4 px-5 mb-56">
            <div class="text-35 my-5">Conclusions:</div>
            <p>
              I do really think developers should be more involved in the
              research field, sadly research isn't known for huge budgets and
              can't simply invest in developers as much as the companies. I
              think automating is the way otherwise we simply waste time.
            </p>
            <p>
              This project was intended to help others, it would mean the world
              to me if it could help anyone.
            </p>
          </div>
          <AppLink :to="{ path: '/', query: { section: nextProject.id } }">
            <AppScrollMark
              display-text="NEXT PROJECT"
              class="bottom-10 left-5 text-black hover:text-primary"
            />
          </AppLink>

          <AppLink to="/">
            <AppActionMark
              display-text="RETURN"
              class="bottom-10 left-1/3 text-black hover:text-primary"
            />
          </AppLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectIntro from '@/components/Project/Intro/index.vue';
import AppScrollMark from '@/components/AppScrollMark/index.vue';
import AppActionMark from '@/components/AppActionMark/index.vue';
import AppIcon from '@/components/AppIcon/index.vue';
import IconClose from '@/components/Icon/Close/index.vue';
import AppLink from '@/components/AppLink/index.vue';
import { cellCounter } from '@/utils/project';
import { CellDisplayState } from '@/utils/p5/cell/index';
import { projects } from '@/utils/projectsOverview';

export default {
  layout: 'project',
  components: {
    ProjectIntro,
    AppScrollMark,
    AppActionMark,
    AppLink,
    AppIcon,
    IconClose,
  },
  data() {
    return {
      project: cellCounter,
      CellDisplayState,
      showInPagePreview: false,
      currentCellDisplayState: CellDisplayState.START,
    };
  },
  computed: {
    algorithmSteps() {
      return [
        { step: CellDisplayState.START, label: 'Start' },
        { step: CellDisplayState.RBG_GRAYSCALE, label: 'Color to grayscale' },
        { step: CellDisplayState.GAUSS_FILTER, label: 'Filter out noise' },
        {
          step: CellDisplayState.DYNAMIC_THRESHOLD,
          label: 'Dynamic thresholder',
        },
        { step: CellDisplayState.ERODE, label: 'Erode' },
        { step: CellDisplayState.WATERSHED, label: 'Watershed' },
        { step: CellDisplayState.RESULT, label: 'Result' },
      ];
    },
    hasScrolledPastFristPage() {
      return this.$store.getters['hasScrolledPastFirstPage/getScroll'];
    },
    currentProjectIndex() {
      return this.$store.getters['lastProjectSeen/getIndex'];
    },
    nextProject() {
      return this.currentProjectIndex < projects.length - 1
        ? projects[this.currentProjectIndex + 1]
        : projects[0];
    },
  },

  created() {
    this.$store.commit('lastProjectSeen/setIndex', cellCounter.index);
  },
  methods: {
    isSmallDeviceToShowPreview() {
      return (
        this.$screen.breakpoint === 'xs' ||
        this.$screen.breakpoint === 'sm' ||
        this.$screen.breakpoint === 'md'
      );
    },
    changeCellDisplayState(cellDisplayState) {
      this.currentCellDisplayState = cellDisplayState;
      this.showInPagePreview = !this.showInPagePreview
        ? this.isSmallDeviceToShowPreview()
        : this.showInPagePreview;
    },
  },
  head() {
    return {
      title: 'Cell Counter | Marc Mortensen',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Creating a platform to let developers use ImageJ within Node.js',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content:
            'Creating a platform to let developers use ImageJ within Node.js',
        },
      ],
    };
  },
};
</script>

<style>
.vertical {
  writing-mode: vertical-rl;
}
</style>
