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
            class="absolute lg:relative text-100 lg:text-65 xl:text-100 bottom-2 right-0 text-opacity-80 md:text-opacity-100 lg:self-center text-gray-dark md:text-black lg:text-white lg:bg-primary lg:rounded-full lg:w-28 lg:h-28 xl:w-40 xl:h-40 text-center"
            >{{ `0${project.index + 1}` }}</span
          >

          <AppScrollMark
            class="top-0 left-5 text-black z-40"
            :downwards="false"
            display-text="RETURN"
          />
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
              <div class="text-20 space-y-2">
                <p>
                  This project was intended to help reserchers speed up
                  repetitive tasks with regards to computer vision, the generic
                  solution achived enables non developers to focus only on the
                  steps needed and the wrapper itself handles the rest.
                </p>
                <p>
                  cell-counter can be used to integrate computer vision into a
                  workflow or to simply obtain results, the core is designed to
                  be extensible, flexible and it's fully tested for better
                  maintability.
                </p>
                <p>
                  As for the specifics cell-counter is build on top of a very
                  known library ImageJ (scientific community). This library
                  lacks some practical features such as apply an algorithm to
                  multiple files, so the idea is use all the potencial in ImageJ
                  but still be flexible. To ilustrate how the cell-counter works
                  I created an algorithm to count the cells of a given image.
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
                  class="hover:text-primary cursor-pointer"
                  :class="
                    currentCellDisplayState === CellDisplayState.START
                      ? 'text-primary'
                      : ''
                  "
                  @click="changeCellDisplayState(CellDisplayState.START)"
                >
                  Start
                </li>
                <li
                  class="hover:text-primary cursor-pointer"
                  :class="
                    currentCellDisplayState === CellDisplayState.RBG_GRAYSCALE
                      ? 'text-primary'
                      : ''
                  "
                  @click="
                    changeCellDisplayState(CellDisplayState.RBG_GRAYSCALE)
                  "
                >
                  Color to grayscale
                </li>
                <li
                  class="hover:text-primary cursor-pointer"
                  :class="
                    currentCellDisplayState === CellDisplayState.GAUSS_FILTER
                      ? 'text-primary'
                      : ''
                  "
                  @click="changeCellDisplayState(CellDisplayState.GAUSS_FILTER)"
                >
                  Filter out noise
                </li>
                <li
                  class="hover:text-primary cursor-pointer"
                  :class="
                    currentCellDisplayState ===
                    CellDisplayState.DYNAMIC_THRESHOLD
                      ? 'text-primary'
                      : ''
                  "
                  @click="
                    changeCellDisplayState(CellDisplayState.DYNAMIC_THRESHOLD)
                  "
                >
                  Dynamic thresholder
                </li>
                <li
                  class="hover:text-primary cursor-pointer"
                  :class="
                    currentCellDisplayState === CellDisplayState.ERODE
                      ? 'text-primary'
                      : ''
                  "
                  @click="changeCellDisplayState(CellDisplayState.ERODE)"
                >
                  Erode
                </li>
                <li
                  class="hover:text-primary cursor-pointer"
                  :class="
                    currentCellDisplayState === CellDisplayState.WATERSHED
                      ? 'text-primary'
                      : ''
                  "
                  @click="changeCellDisplayState(CellDisplayState.WATERSHED)"
                >
                  Watershed
                </li>
                <li
                  class="hover:text-primary cursor-pointer"
                  :class="
                    currentCellDisplayState === CellDisplayState.RESULT
                      ? 'text-primary'
                      : ''
                  "
                  @click="changeCellDisplayState(CellDisplayState.RESULT)"
                >
                  Result
                </li>
              </ul>
            </div>
          </div>
          <div class="text-20 space-y-2 px-5 mb-56">
            <div class="text-35 my-5">Conclusions:</div>
            <p>
              I do really think developrs should be more involved in the
              research field, sadly reserach isn't known for huge budgets and
              can't simply invest in developers as much as the companies
              altought i think this could change in the following years. Simply
              automating is the way otherwise we simply repeat and waste time.
            </p>
            <p>
              This porject was intended to help others, it would mean the world
              to me if it could help anyone.
            </p>
          </div>

          <AppScrollMark
            display-text="NEXT PROJECT"
            class="bottom-10 left-5 text-black"
          />

          <AppLink to="/">
            <AppActionMark
              display-text="RETURN"
              class="bottom-10 left-1/3 text-black"
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
import P5Cells from '@/components/P5/Cells/index.vue';
import { CellDisplayState } from '@/utils/p5/cell/index';
import { lgScreenCells } from './screenCells';

export default {
  layout: 'project',
  components: {
    ProjectIntro,
    P5Cells,
    AppScrollMark,
    AppActionMark,
    AppLink,
    AppIcon,
    IconClose,
  },
  data() {
    return {
      project: cellCounter,
      lgScreenCells,
      CellDisplayState,
      showInPagePreview: false,
      currentCellDisplayState: CellDisplayState.START,
    };
  },
  computed: {
    hasScrolledPastFristPage() {
      return this.$store.getters['hasScrolledPastFirstPage/getScroll'];
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
};
</script>

<style>
.vertical {
  writing-mode: vertical-rl;
}
</style>
