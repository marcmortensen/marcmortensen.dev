<template>
  <div>
    <div
      class="w-full h-full grid grid-cols-1 lg:grid-cols-2 lg:gap-2 content-center"
    >
      <div class="order-2 lg:order-1 bg-primary mt-20 lg:mt-0">
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
                This project was intended to help reserchers speed up repetitive
                tasks with regards to computer vision, the generic solution
                achived enables non developers to focus only on the steps needed
                and the wrapper itself handles the rest.
              </p>
              <p>
                cell-counter can be used to integrate computer vision into a
                workflow or to simply obtain results, the core is designed to be
                extensible, flexible and it's fully tested for better
                maintability.
              </p>
              <p>
                As for the specifics cell-counter is build on top of a very
                known library ImageJ (scientific community). This library lacks
                some practical features such as apply an algorithm to multiple
                files, so the idea is use all the potencial in ImageJ but still
                be flexible. To ilustrate how the cell-counter works I created
                an algorithm to count the cells of a given image.
              </p>
            </div>
          </div>
        </div>
        <div
          class="min-h-screen flex justify-center align-middle text-center items-center"
        >
          <div class="text-20 space-y-2 px-5">
            <ul
              class="text-30 sm:text-40 md:text-50 lg:text-40 xl:text-65 space-y-7"
            >
              <li>Step 1</li>
              <li
                @mouseenter="
                  currentCellDisplayState = CellDisplayState.RBG_GRAYSCALE
                "
                @mouseleave="currentCellDisplayState = CellDisplayState.START"
              >
                Color to grayscale
              </li>
              <li
                @mouseenter="
                  currentCellDisplayState = CellDisplayState.GAUSS_FILTER
                "
                @mouseleave="
                  currentCellDisplayState = CellDisplayState.RBG_GRAYSCALE
                "
              >
                Filter out noise
              </li>
            </ul>
          </div>
        </div>
        <div
          class="min-h-screen flex justify-center align-middle text-center items-center"
        >
          <div class="text-20 space-y-2 px-5">
            <ul
              class="text-30 sm:text-40 md:text-50 lg:text-40 xl:text-65 space-y-7"
            >
              <li>Step 2</li>
              <li
                @mouseenter="
                  currentCellDisplayState = CellDisplayState.DYNAMIC_THRESHOLD
                "
                @mouseleave="
                  currentCellDisplayState = CellDisplayState.GAUSS_FILTER
                "
              >
                Dynamic thresholder
              </li>
            </ul>
          </div>
        </div>
        <div
          class="min-h-screen flex justify-center align-middle text-center items-center"
        >
          <div class="text-20 space-y-2 px-5">
            <ul
              class="text-30 sm:text-40 md:text-50 lg:text-40 xl:text-65 space-y-7"
            >
              <li>Step 3</li>
              <li
                @mouseenter="currentCellDisplayState = CellDisplayState.ERODE"
                @mouseleave="
                  currentCellDisplayState = CellDisplayState.DYNAMIC_THRESHOLD
                "
              >
                Erode
              </li>
              <li
                @mouseenter="
                  currentCellDisplayState = CellDisplayState.WATERSHED
                "
                @mouseleave="currentCellDisplayState = CellDisplayState.ERODE"
              >
                Whatershead
              </li>
              <li
                @mouseenter="currentCellDisplayState = CellDisplayState.RESULT"
                @mouseleave="currentCellDisplayState = CellDisplayState.RESULT"
              >
                Cell Count
              </li>
            </ul>
          </div>
        </div>
        <div class="text-20 space-y-2 px-5">
          <div class="text-35 my-5">Conclusions:</div>
          <p>
            I do really think developrs should be more involved in the research
            field, sadly reserach isn't known for huge budgets and can't simply
            invest in developers as much as the companies altought i think this
            could change in the following years. Simply automating is the way
            otherwise we simply repeat and waste time.
          </p>
          <p>
            This porject was intended to help others, it would mean the world to
            me if it could help anyone.
          </p>
        </div>
      </div>
      <div
        class="bg-gray order-1 lg:order-2 w-full fixed h-1/4 lg:min-h-screen-height-header overflow-hidden lg:sticky lg:top-header"
      >
        <client-only>
          <P5Cells
            :cells="lgScreenCells"
            :active="false"
            class="h-full max-h-full"
            :cell-display-state="currentCellDisplayState"
          />
        </client-only>
      </div>
    </div>
    <div
      class="h-60 md:h-60 flex justify-center text-35 space-y-2 px-5 items-end"
    >
      <span> Check next project </span>
    </div>
  </div>
</template>

<script>
import ProjectIntro from '@/components/Project/Intro/index.vue';
import { cellCounter } from '@/utils/project';
import P5Cells from '@/components/P5/Cells/index.vue';
import { CellDisplayState } from '@/utils/p5/cell/index';
import { lgScreenCells } from './screenCells';

export default {
  layout: 'project',
  components: {
    ProjectIntro,
    P5Cells,
  },
  data() {
    return {
      project: cellCounter,
      lgScreenCells,
      CellDisplayState,
    };
  },
  computed: {
    currentCellDisplayState: {
      get() {
        return this.$route.query.step;
      },
      set(stepName) {
        this.$router.push({
          ...this.$route,
          query: { step: stepName },
        });
      },
    },
  },

  middleware({ store, route, redirect, next }) {
    store.commit('lastProjectSeen/setIndex', cellCounter.index);
    if (route.query.step) {
      return;
    }
    redirect({ ...route, query: { step: CellDisplayState.START } });
  },
};
</script>
