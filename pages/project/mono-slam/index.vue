<template>
  <div class="">
    <div
      class="grid grid-cols-1 lg:grid-cols-2 grid-rows-2 lg:grid-rows-2 content-center min-h-screen relative lg:auto-cols-auto"
    >
      <div
        id="start-project"
        class="order-2 w-full overflow-x-hidden lg:row-span-2 h-3/4 lg:h-screen lg:w-1/2 fixed lg:block lg:relative overflow-y-scroll lg:overflow-y-hidden lg:top-0"
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
          :display-state="currentDisplayState"
          class="w-full h-full lg:fixed"
          :class="
            currentDisplayState ===
            CubeCloudPointsState.GET_3D_COORDS_FROM_POSE_MATRIX
              ? 'lg:w-1/2'
              : ''
          "
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
            {{ currentDisplayState }}
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
                  It is a feature based simultaneous localization and mapping
                  (S.L.A.M) made in NodeJs. Its objective is to be able to
                  generate maps in 3D from video input. This isn't new and
                  better alternatives currently exist both on the corporate and
                  on the open source world, although I wasn't able to find one
                  in NodeJs. This is a complex, so because we only use video
                  input and not sensory data (such as GPS or odometry) we are
                  bound to find noise in our maps.
                </p>
                <p>
                  Someone has to do the heavy lifting in this instance we make
                  use of the library OpenCV a library focused on computer
                  vision, to start things off we have to load a video from the
                  NodeJs and load it into OpenCV and play it on frame by frame.
                </p>
                <p>
                  Next is find which features are the most desirable from each
                  frame (a feature is something pretty easy to spot right away
                  on a picture from a computer standpoint of view). There is a
                  ton of research to determine which are good features and bad
                  ones, OpenCV has already implemented some function to search
                  for those features using ORB Detection, this process is known
                  as feature extraction. We can now display all the features on
                  each frame.
                </p>
                <p>
                  Following we need to somehow link old features with new ones,
                  if we see a feature it's likely that it will be spotted on the
                  following frame, this is called feature matching. The concept
                  is to keep all the features that have been seen at least 2
                  times, there is more on how to match those features or how to
                  discard some of them, but for now we can just fiddle with
                  OpenCV until we can see good feature matches. Some parameters
                  that we can adjust are the number of total features to be
                  extracted and the focal length of the camera used.
                </p>
                <p>
                  At last, once we have a list of matched features, we can use
                  triangulation to guess what 3D coordinate it relates to. This
                  is cool, but how? Glad you asked. The objective is to figure
                  out how we (as the camera) move with the rotation and
                  translation (Rt) and extrapolate this into a 3D point using
                  the last frame rotation matrix and the current one to
                  triangulate the point into 3D global space.
                </p>
                <p>
                  Now we have a video of a room with multiple lamps hanging from
                  the top, the video is recorded looking upwards and moving in
                  circles, see the view as the steps are applied:
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
                    currentDisplayState === algorithmStep.step
                      ? 'text-primary'
                      : ''
                  "
                  @click="changeDisplayState(algorithmStep.step)"
                >
                  {{ algorithmStep.label }}
                </li>
              </ul>
            </div>
          </div>
          <div class="text-20 space-y-4 px-5 mb-56">
            <div class="text-35 my-5">Conclusions:</div>
            <p>
              There are some intrinsic values that depend on the video inputted
              and because we lack more information there is noise on the
              resulting points, so complete automation is possible but off the
              table for now. Also, I wanted something that could work outside
              the browser, sadly this with 3D rendering of points doesn't work
              great in NodeJs as I was unable to display them directly. But they
              could be piped into another program.
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
import { slam } from '@/utils/project';
import { CubeCloudPointsState } from '@/utils/p5/cubeCloudPoints/index';
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
      project: slam,
      CubeCloudPointsState,
      showInPagePreview: false,
      currentDisplayState: CubeCloudPointsState.START,
    };
  },
  computed: {
    algorithmSteps() {
      return [
        { step: CubeCloudPointsState.START, label: 'Start' },
        {
          step: CubeCloudPointsState.FEATURE_EXTRACTION,
          label: 'Feature extraction',
        },
        {
          step: CubeCloudPointsState.FEATURE_MATCHING,
          label: 'Feature matching',
        },
        {
          step: CubeCloudPointsState.GET_3D_COORDS_FROM_POSE_MATRIX,
          label: 'Points in 3D coords',
        },
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
    this.$store.commit('lastProjectSeen/setIndex', slam.index);
  },
  methods: {
    isSmallDeviceToShowPreview() {
      return (
        this.$screen.breakpoint === 'xs' ||
        this.$screen.breakpoint === 'sm' ||
        this.$screen.breakpoint === 'md'
      );
    },
    changeDisplayState(cellDisplayState) {
      this.currentDisplayState = cellDisplayState;
      this.showInPagePreview = !this.showInPagePreview
        ? this.isSmallDeviceToShowPreview()
        : this.showInPagePreview;
    },
  },
  head() {
    return {
      title: 'S.L.A.M | Marc Mortensen',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Monocular feature based S.L.A.M in Node.js',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: 'Monocular feature based S.L.A.M in Node.js',
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
